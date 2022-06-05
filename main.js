//navigation

const links = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');
const main = document.querySelector('main');

function router(){
    for (const link of links){
        if(link.hash===window.location.hash) link.classList.add('active');
        else link.classList.remove('active');
     }
}

function hideOthers(){
    if(!(window.location.hash) || window.location.hash ==='#domov' ) {
        articles.forEach((article)=>article.removeAttribute('style'));
        window.scrollTo(0,0);
    }
    else {
        articles.forEach((article)=>article.style.display='none');
        document.querySelector(window.location.hash).removeAttribute('style');
        document.querySelector(window.location.hash).style.backgroundColor="white";
        window.scrollTo(0,0);
    }

}

links.forEach((link)=> link.addEventListener('click', (e)=>{
    e.preventDefault(); 
    window.location.hash=e.target.hash; 
    window.scrollTo(0,0); 
    main.scrollTo(0,0);
    }))


if(window.location.hash) {
        router();
        hideOthers();

}


window.addEventListener('hashchange', ()=>{router(); hideOthers();});

// sticky navbar on small screensize

const navbar = document.querySelector('nav'); 
const navWrapper = document.querySelector('.nav-wrapper');

let navTop = navbar.offsetTop;


window.addEventListener('resize',()=> {
    navTop = navbar.offsetTop; 
    if(navbar.classList.contains('fixed')) {
        navbar.classList.remove('fixed');
        navTop = navbar.offsetTop; 
        stickyNav();
    }
});

window.addEventListener('scroll',stickyNav);

function stickyNav(evt){
if( window.scrollY>navTop) {
    navWrapper.style.height = navbar.offsetHeight+'px';
    navbar.classList.add('fixed');
}
else {
    navbar.classList.remove('fixed');
    navWrapper.removeAttribute('style');
}
}


//burger-menu toggling

const burgerButton = document.querySelector('nav button');

if(navbar.classList.contains('expanded')) {
    navbar.classList.remove('expanded');
    navbar.classList.add('hidden');

    burgerButton.setAttribute('title','Zobraz menu');
    burgerButton.setAttribute('aria-expanded','false');
}

window.addEventListener('click', ()=>{
    if(navbar.classList.contains('expanded')) {
        navbar.classList.remove('expanded');
    navbar.classList.add('hidden');

    burgerButton.setAttribute('title','Zobraz menu');
    burgerButton.setAttribute('aria-expanded','false');
    }
});
  
burgerButton.addEventListener('click',toggle);

function toggle(e){
if(navbar.classList.contains('hidden')){
    navbar.classList.remove('hidden');
    navbar.classList.add('expanded');

    burgerButton.setAttribute('title','Skry menu');
    burgerButton.setAttribute('aria-expanded','true');
}
else {
    navbar.classList.remove('expanded');
    navbar.classList.add('hidden');

    burgerButton.setAttribute('title','Zobraz menu');
    burgerButton.setAttribute('aria-expanded','false');
}
e.stopPropagation();
}


