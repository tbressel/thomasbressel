const MA_PAGE_HTML = document.querySelector("html");
window.addEventListener("DOMContentLoaded", () => 
    {
        MA_PAGE_HTML.classList.add("load-ok");
        console.log('Ma page se charge en fade-in, je récupère : ',MA_PAGE_HTML);



// Gestion du menu burger
        const BOUTON_BURGER = document.querySelector(".button-burger");
        console.log('Ma constante BOUTON_BURGER, cible sur : ',BOUTON_BURGER);
        BOUTON_BURGER.addEventListener('click', () => {
            console.log('Je viens de cliquer sur le bouton burger !');
                const BODY = document.querySelector("body").classList;
                console.log('Je récupère le contenu de ma classe BODY : ',BODY);
                BODY.toggle('body-toggle');
                console.log('Le contenu passe à :',BODY);
        });

// Gestion des album cliquable
    let flag = 0
        const ALBUMS = document.querySelectorAll(".album-container");
        ALBUMS.forEach(un_element => 
            {
                const ALBUM = un_element.className;
                    un_element.addEventListener('mouseover',() =>
                            {
                               un_element.firstElementChild.classList.add("zoom");
                               un_element.lastElementChild.classList.remove("album-title");
                               un_element.lastElementChild.classList.add("zoom-title");
                            });
                            
                             un_element.addEventListener('mouseout',() =>
                             {
                                 un_element.firstElementChild.classList.remove("zoom");
                                 un_element.lastElementChild.classList.remove("zoom-title");
                                 un_element.lastElementChild.classList.add("album-title");
                                                
                            });
                                                                             
            });
          





























    });

