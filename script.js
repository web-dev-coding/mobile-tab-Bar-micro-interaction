var $menuItemList;
var $menuShadow;
var $menuShadowImage;


/* move shdow to active menu */
setPosition = function($element){

    var $menuItemIcon = $element.getElementsByTagName("img")[0];
    $menuShadowImage.classList.add("hide");
    $menuShadow.style.left = $element.getBoundingClientRect().left + "px";

    $menuShadow.addEventListener('transitionend', () => {
        $menuShadowImage.src = $menuItemIcon.src;
        $menuShadowImage.classList.remove("hide");
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    $menuItemList = document.querySelectorAll('.menu__item');
    $menuShadow = document.getElementById("menu__shadow");
    $menuShadowImage = $menuShadow.getElementsByTagName("img")[0];

    // set iniatal position
    $menuItemList.forEach($element => {
        $element.addEventListener('click', event => {
            setPosition($element);
        });
    });

    // initial position
    setPosition(document.querySelectorAll('.menu__item')[0]);

});
