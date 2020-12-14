import './sass/index.scss';
import MyPhoto from "./assets/0.JPG";
import MyProject1 from "./assets/1.JPG";
import MyProject2 from "./assets/taskManager.JPG";
import MyProject3 from "./assets/3.JPG";
import AOS from 'aos';
import 'aos/dist/aos.css';

const getSpinner = () => {
    return document.querySelector(".spinner");
};

const showLoading = () => {
    getSpinner().classList.add("spinner--visible");
};

const hideLoading = () => {
    getSpinner().classList.remove("spinner--visible");
};

const getPhoto = (nameClass, img) => {
    const myPhotoDiv = document.querySelector(nameClass);
    const myPhoto = new Image();
    myPhoto.src = img;
    myPhoto.className = "rounded projects-img";
    myPhoto.alt = "myphoto";
    myPhotoDiv.appendChild(myPhoto);
    return myPhoto;
};

const getPhotos = () => {
    getPhoto(".myPhoto", MyPhoto);
    getPhoto(".project1-img", MyProject1);
    getPhoto(".project2-img", MyProject2);
    getPhoto(".project3-img", MyProject3);

};

document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "interactive") {
        showLoading();
        getPhotos();
    } else if (event.target.readyState === 'complete') {
        hideLoading();
        AOS.init();
    }
});
