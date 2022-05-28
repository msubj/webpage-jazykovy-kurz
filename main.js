const links = document.querySelectorAll('nav a');
const articles = document.querySelectorAll('article');

function router(){
    for (const link of links){
        if(link.hash===this.window.location.hash) link.classList.add('active');
        else link.classList.remove('active');
     }
}

function hideOthers(){
    if(!(window.location.hash) || window.location.hash ==='#domov' ) articles.forEach((article)=>article.removeAttribute('style'));
    else {
        articles.forEach((article)=>article.style.display='none');
        document.querySelector(window.location.hash).removeAttribute('style');
        document.querySelector(window.location.hash).style.backgroundColor="white";
    }

}


if(window.location.hash) {
        router();
        hideOthers();

}


window.addEventListener('hashchange', ()=>{router(); hideOthers();});
  



