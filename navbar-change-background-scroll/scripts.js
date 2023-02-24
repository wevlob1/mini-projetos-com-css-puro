const navbar = document.querySelector('.navbar');

//! esse metodo mostra no console em qual lugar da pagina o scroll está
window.addEventListener('scroll',() => {
    console.log(window.scrollY)
    if (window.scrollY >= 300 ){
        navbar.classList.remove('deactive-navbar');
        navbar.classList.add('active-navbar');
    }
    else{
        navbar.classList.remove('active-navbar')
        navbar.classList.add('deactive-navbar')
    }
})

//! adicionando um configuração quando o
 
