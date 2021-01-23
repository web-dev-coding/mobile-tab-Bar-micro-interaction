document.addEventListener('DOMContentLoaded', (event) => {
    var menu = document.getElementById("menu");
    var menuItemList = document.querySelectorAll('.menu__item');
    var menuShadow = document.getElementById("menu__shadow");

    menuItemList.forEach(element => {
        element.addEventListener('click', event => {
          
            menuShadow.style.left = element.getBoundingClientRect().left + "px";
            console.log(menuShadow.style.left);
        });
      })

  });
