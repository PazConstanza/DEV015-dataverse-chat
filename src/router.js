
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
    console.log(ROUTES)
}

const queryStringToObject = (queryString) => {
    // convert query string to URLSearchParams
    //const valores = window.location.search;
    // convert URLSearchParams to an object
    // return the object
}

const renderView = (pathname, props = {}) => {
    // clear the root element
   const root = document.getElementById("root")

    rootEl.innerHTML = ""


    

    // find the correct view in ROUTES for the pathname
    // in case not found render the error view
    const view = ROUTES[location.pathname] 
    console.log(view)
    // render the correct view passing the value of props
   /*if (!view){
    navigateTo("/error")
   }*/
    // add the view element to the DOM root element
    const component = view (props)
    rootEl.appendChild(view)


}
// navigteto actualiza la URL y renderiza la vista correspondiente
export const navigateTo = (pathname, props = {}) => {
    // Update window history with pushState
    window.history.pushState({}, '', pathname);

    // Render the view with the pathname and props
    renderView(pathname, props);

}

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