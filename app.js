document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM redy to use");


    const navigationItems = Array.from(document.getElementsByClassName('navigation__item'));
    
    
    navigationItems.forEach(item => {    
        item.addEventListener('click', () => {
            document.getElementById('navi-toggle').checked = false;
        
        });
        
    });
})
