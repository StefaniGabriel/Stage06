import { Router } from "./router.js"

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/universe", "/pages/ouniverso.html") 
router.add("/exploration", "pages/exploracao.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()


function exchangeClasse(go) {
    let body = document.querySelector('body')
   
    body.classList.remove('home')
    body.classList.remove('exploration')
    body.classList.remove('universe')
    body.classList.add(go);

    
}


let universe = document.querySelector('.a-univer')
let exploration = document.querySelector('.a-explo')
let home = document.querySelector('.a-home')

universe.addEventListener('click', () => {

    exchangeClasse('universe')

})


exploration.addEventListener('click', () => {

    exchangeClasse('exploration')

})

home.addEventListener('click', () => {
    exchangeClasse('home')

})






   



