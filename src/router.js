
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
    // asigna rootEl
    rootEl = el
}

export const setRoutes = (routes) => {
    // optional Throw errors if routes isn't an object

    if (typeof routes != "object" || routes === null) {
        throw new Error("routes no es un objeto");
    }
    // optional Throw errors if routes doesn't define an /error route

    if (!routes["/error"]) {

        throw new Error("No existe la ruta error.");
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
    console.log(pathname)
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

    
    if (!view) {
        navigateTo("/error");                                                               // Si no se encuentra ninguna vista, navegar a la ruta de error
        return;
    }

    
    const component = view(props);                                                          // Renderizar la vista correcta pasando los valores de props
    root.appendChild(component);
};


export const navigateTo = (pathname, props = {}) => {                                       // navigteto actualiza la URL y renderiza la vista correspondiente
    const search = window.location.search;  
    const queryParams = queryStringToObject(search);

    
    const combinedProps = { ...props, ...queryParams };                                     // Combina props con los parámetros de búsqueda

   
    window.history.pushState({ props: combinedProps }, '', pathname);                       // Actualiza el historial de la ventana con pushState y guarda los props (incluyendo data)
    renderView(pathname, combinedProps);                                                    // Renderiza la vista con el pathname y los props combinados
};


export const onURLChange = (location, state = {}) => {

    const { pathname, search } = location;                                                   //parse the location for the pathname and search params                         

    console.log(location)

    const searchParams = new URLSearchParams(search);                                       // convert the search params to an object
    const paramsObject = {};
    searchParams.forEach((value, key) => {
        paramsObject[key] = value;
    });
    
    const combinedProps = { ...paramsObject, ...state.props };                              // Mezclar los props del historial con los nuevos params (state incluye el `props.data` si navegas de vuelta)    
    renderView(pathname, combinedProps);                                                    // Renderiza la vista con el pathname y los props combinados


}

window.addEventListener("popstate", (event) => {
    
    const location = window.location;                                                       // Recupera la ruta actual y cualquier estado almacenado en el historial
    const state = event.state || {};
    onURLChange(location, state);                                                                  // Llama a la funcion onURLChange para manejar la navegacion
});

window.addEventListener('DOMContentLoaded', () => {
    
    const location = window.location;                                                       // Maneja la actualización de la página
    onURLChange(location);                                                                  // Llama la funcion onURLChange para manejar la actualizacion

});