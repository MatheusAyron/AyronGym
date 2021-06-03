//ANIMAÇÃO btn DARK/LIGHT//

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>  window.getComputedStyle(element).getPropertyValue(style)
    

const initialColors = {
    bg: getStyle(html, "--bg"),
    bgPanel: getStyle(html, "--bg-panel"),
    colorHeadings: getStyle(html, "--color-headings"),
    colorText: getStyle(html, "--color-text"),
    colorBtnText: getStyle(html,"--color-btntext"),
}

const darkMode = {
    bg: "#333333",
    bgPanel: "#434343",
    colorHeadings: "#3664FF",
    colorText: "#B5B5B5",
    colorBtnText: "#B5B5B5",
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()  
    // -$1 e o nome da variavel, ele pega a key, coloca "--" + de A-Z e guarda em -$1//


const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    )
}


checkbox.addEventListener("change",({target}) => {

    target.checked ? changeColors(darkMode) : changeColors(initialColors) //quando estiver checked ele vai estar com DARKMODE se não InitialColors//

})