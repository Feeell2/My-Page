import './sass/index.scss';
import MyPhoto from "./assets/0.jpg";
import MyProject1 from "./assets/1.jpg";
import MyProject2 from "./assets/taskManager.jpg";
import MyProject3 from "./assets/3.jpg";

const getPhoto=(nameClass,img)=>{
    const myPhotoDiv=document.querySelector(nameClass);
    const myPhoto=new Image();
    myPhoto.src=img;
    myPhoto.className="rounded projects-img";
    myPhoto.alt="myphoto";
    myPhotoDiv.appendChild(myPhoto);
    return myPhoto
};
const getPhotos=()=>{
    getPhoto(".myPhoto",MyPhoto);
    getPhoto(".project1-img",MyProject1);
    getPhoto(".project2-img",MyProject2);
    getPhoto(".project3-img",MyProject3);

};
document.addEventListener('DOMContentLoaded',()=>getPhotos());