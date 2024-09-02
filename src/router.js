
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
    // assign rootEl
    rootEl = el
}

export const setRoutes = (routes) => {
    // optional Throw errors if routes isn't an object

    if (typeof routes != "object" || routes == null) {
        throw new Error("routes no es un objeto");
    }
    // optional Throw errors if routes doesn't define an /error route

    if (!routes["/error"]) {

        throw new Error("Esta ruta no existe");
    }
    // assign ROUTES

    ROUTES = routes

}

const queryStringToObject = (queryString) => {
    // Convertir query string a URLSearchParams
    const urlParams = new URLSearchParams(queryString);

    // Crear un objeto vacío
    const paramsObject = {};

    // Iterar sobre los pares clave-valor de URLSearchParams
    urlParams.forEach((value, key) => {
        paramsObject[key] = value;
    });

    // Devolver el objeto
    return paramsObject;
};

const renderView = (pathname, props = {}) => {
    // Limpiar el elemento root
    const root = document.getElementById("root");
    root.innerHTML = "";

    // Buscar la vista correcta en ROUTES para el pathname
    // Manejar rutas dinámicas si es necesario
    let view = ROUTES[pathname];

    // Si no se encuentra la ruta exacta, buscar rutas dinámicas
    if (!view) {
        for (const route in ROUTES) {
            const routeParts = route.split('/');
            const pathParts = pathname.split('/');

            if (routeParts.length !== pathParts.length) continue;

            let isMatch = true;
            const params = {};

            for (let i = 0; i < routeParts.length; i++) {
                if (routeParts[i].startsWith(':')) {
                    const paramName = routeParts[i].slice(1);
                    params[paramName] = pathParts[i];
                } else if (routeParts[i] !== pathParts[i]) {
                    isMatch = false;
                    break;
                }
            }

            if (isMatch) {
                view = ROUTES[route];
                props = { ...props, ...params };
                break;
            }
        }
    }

    // Si no se encuentra ninguna vista, navegar a la ruta de error
    if (!view) {
        navigateTo("/error");
        return;
    }

    // Renderizar la vista correcta pasando los valores de props
    const component = view(props);
    root.appendChild(component);
};

// navigteto actualiza la URL y renderiza la vista correspondiente
export const navigateTo = (pathname, props = {}) => {
    const search = window.location.search;
    const queryParams = queryStringToObject(search);

    // Combina props con los parámetros de búsqueda
    const combinedProps = { ...props, ...queryParams };

    // Actualiza el historial de la ventana con pushState
    window.history.pushState({}, '', pathname);

    // Renderiza la vista con el pathname y los props combinados
    renderView(pathname, combinedProps);
};


export const onURLChange = (location) => {

    //parse the location for the pathname and search params
    const { pathname, search } = location


    console.log(location)

    // convert the search params to an object
    const searchParams = new URLSearchParams(search);
    const paramsObject = {};
    searchParams.forEach((value, key) => {
        paramsObject[key] = value;
    });
    // render the view with the pathname and object
    renderView(pathname, paramsObject);



}

window.addEventListener("popstate", (event) => {
    // Recupera la ruta actual y cualquier estado almacenado en el historial
    const location = window.location;
    onURLChange(location); // Llama a tu función onURLChange para manejar la navegación
});