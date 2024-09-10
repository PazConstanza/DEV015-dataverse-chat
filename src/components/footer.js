export const footer = () => {
    const footerCreate = document.createElement("footer")
    footerCreate.classList.add("footer")
    footerCreate.innerHTML = `<p>By Paz Gutiérrez</p>`

    return footerCreate
}
