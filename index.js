const menButtonElement = document.getElementById("menbutton");
const womenButtonElement = document.getElementById("womenbutton");
const kidsButtonElement = document.getElementById("kidsbutton");
const image1Element = document.getElementById("image1");
const image2Element = document.getElementById("image2");
const image3Element = document.getElementById("image3");
const productTitleElement1 = document.getElementById("product-title1");
const productTitleElement2 = document.getElementById("product-title2");
const productTitleElement3 = document.getElementById("product-title3");



menButtonElement.addEventListener("click", function () {
    image1Element.src = "https://tinypic.host/images/2023/12/23/beach.jpeg";
    image2Element.src = "https://img.freepik.com/free-photo/young-man-posing-casually-white-wall_1157-48198.jpg";
    image3Element.src = "https://img.freepik.com/free-photo/two-indian-stylish-mans-friends-traditional-clothes-posed-outdoor-talk-laugh_627829-12656.jpg";
    productTitleElement1.textContent = "White stylish background";
    productTitleElement2.textContent = "Single-Yellow-kurthi";
    productTitleElement3.textContent = "yellow and black combo kurthi";



});

womenButtonElement.addEventListener("click", function () {
    image1Element.src = "https://img.freepik.com/free-photo/young-woman-beautiful-yellow-dress_1303-17544.jpg";
    image2Element.src = "https://img.freepik.com/premium-photo/hot-pakistani-girl-wearing-desi-dress-traditional-photoshoot-trees_658768-433.jpg";
    image3Element.src = "https://img.freepik.com/free-photo/young-woman-beautiful-red-dress_1303-17503.jpg";
    productTitleElement1.textContent = "Women yellow Kurthi";
    productTitleElement2.textContent = "Women Full Kurthi";
    productTitleElement3.textContent = "Women Red bubbling Kurthi";

});

kidsButtonElement.addEventListener("click", function () {
    image1Element.src = "https://img.freepik.com/free-photo/little-girl-studio_1303-5617.jpg";
    image2Element.src = "https://img.freepik.com/free-photo/cute-stylish-children_155003-8330.jpg";
    image3Element.src = "https://img.freepik.com/free-photo/low-angle-little-boy-posing_23-2148445671.jpg";
    productTitleElement1.textContent = "Pink-Frock";
    productTitleElement2.textContent = "Combo-Pack";
    productTitleElement3.textContent = "Full-combo-Dress";


});




