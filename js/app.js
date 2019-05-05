document.addEventListener('DOMContentLoaded', function () {
    hideName();
    changePhoto();
    seeMore();


});

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

let changePhoto = function () {
    let nextBtn = document.querySelector(".arrow-next");
    let prevBtn = document.querySelector(".arrow-prev");
    let picIndex = 0;
    let picturesArray = [];
    let picturesList = document.querySelectorAll('.main-item li');

    picturesList.forEach(value => {
        picturesArray.push(value);
    });

    picturesArray[picIndex].classList.add("visible");

    nextBtn.addEventListener('click', function () {
        console.log('next button');
        let nextPicIndex = picIndex + 1;
        if (nextPicIndex == picturesArray.length) {
            nextPicIndex = 0;
        }

        picturesArray[picIndex].classList.remove('visible');
        picturesArray[nextPicIndex].classList.add('visible');
        picIndex = nextPicIndex;
    });
    prevBtn.addEventListener('click', function () {
        console.log('prev button');
        let prevPicIndex = picIndex - 1;
        if (prevPicIndex < 0) {
            prevPicIndex = picturesArray.length - 1;
        }

        picturesArray[picIndex].classList.remove('visible');
        picturesArray[prevPicIndex].classList.add('visible');
        picIndex = prevPicIndex;
    });
}
let seeMore = function () {
    let btn = document.querySelector(".main-button");
    btn.addEventListener('click', function () {
        swal("Uuuupss", "Musisz chwilę poczekać, strona w budowie!", "warning");
    })
}