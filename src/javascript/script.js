var btn = document.querySelector('#mobile-btn')
var header = document.querySelector('header')
var tema_estilo = document.querySelector("#theme_style")
var sol = document.querySelector('#sun')
var moon = document.querySelector('#moon')


btn.addEventListener("click", () => header.classList.toggle("active"))

var theme = document.querySelector("#theme-btn")
theme.addEventListener("click", () => toggle_theme())


var trocar = true
function toggle_theme(){
    if(trocar){
        tema_estilo.innerHTML = '<link id="theme_style" rel="stylesheet" href="src/style/theme_dark.css">'

        sol.classList.remove("destrocar")
        moon.classList.remove("destrocar")
        sol.classList.add("trocar")
        moon.classList.add("trocar")
    }
    else{
        tema_estilo.innerHTML = '<link id="theme_style" rel="stylesheet" href="src/style/theme_light.css">'

        sol.classList.remove("trocar")
        moon.classList.remove("trocar")
        sol.classList.add("destrocar")
        moon.classList.add("destrocar")
    }
    trocar =! trocar
}

