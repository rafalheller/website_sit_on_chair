document.addEventListener('DOMContentLoaded', function () {
    hideName();
})
let hideName = function () {
    let divProductModel = document.querySelector('.product-model');
    let productModelTitle = document.querySelector('.product-name');

    let divProductModel2 = document.querySelector('.product-model:nth-of-type(2)');
    let productModelTitle2 = divProductModel2.querySelector('.product-name');
    // =========================================================

    divProductModel.addEventListener('mouseenter', function () {
        productModelTitle.classList.add("hidden")
    })
    divProductModel.addEventListener('mouseleave', function () {
        productModelTitle.classList.remove("hidden");
    })

    divProductModel2.addEventListener('mouseenter', function () {
        productModelTitle2.classList.add("hidden")
    })
    divProductModel2.addEventListener('mouseleave', function () {
        productModelTitle2.classList.remove("hidden");
    })
};

// == przerobić na funkcję z użyciem THIS.==