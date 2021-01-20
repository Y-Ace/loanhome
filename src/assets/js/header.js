function header() {
    var navBottom = document.querySelector(".header-footer");
    var navBottomul = navBottom.children[0];
    var navBottomli = navBottom.querySelectorAll("ul>li");
    
    for (var i = 0; i < navBottomli.length; i++) {
        (function (i) {
            navBottomli[i].addEventListener("click", function () {
                console.log(i)
            })
        })(i)
    }
}
export {header}