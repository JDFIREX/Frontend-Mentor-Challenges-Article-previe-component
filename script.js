let shareImg = document.querySelector(".share_img")
let shareImgActive = false;

window.addEventListener('load', (e) => shareSectionPosition(e))
window.addEventListener('resize', (e) => shareSectionPosition(e))
shareImg.addEventListener('click', (e) => shareImgAnimation(e));



function shareImgAnimation(e){
    let shareSection = document.querySelector('.share_section');
    let shareArrow = document.querySelector('.share_arrow');
    let shareBox = document.querySelector('.share_box');
    
    let shareImgCoords = shareImg.getBoundingClientRect();


// animation

    if(!shareImgActive){

        
        if(window.innerWidth <= 550){
            shareSection.style.top = (shareImgCoords.top - 34) + "px";;
        }else{
            shareSection.style.top = (shareImgCoords.top - 80) + "px";;
        }
        shareSection.style.backgroundColor = `hsl(217, 19%, 35%)`;
        setTimeout(() => {
            shareSection.style.left = (shareImgCoords.left - 112) + "px";
            if(window.innerWidth <= 1000){
                shareSection.style.left = (shareImgCoords.left -182) + "px";
            }
            shareSection.style.width =`250px`;
            shareSection.style.height = `50px`;
            shareSection.style.borderRadius = `10px`;
            e.path[0].src = `images/icon-share_white.svg`;
            shareImg.style.backgroundColor = `hsl(217, 19%, 35%)`;
            if(window.innerWidth <= 550){
                shareImg.style.backgroundColor =`hsl(214, 17%, 51%)`
                shareSection.style.borderRadius = `10px`;
                shareSection.style.borderTopLeftRadius = `0px`;
                shareSection.style.borderTopRightRadius = `0px`;
                shareSection.style.width =`468.76px`;
                shareSection.style.height = `100px`;
                shareSection.style.left = (shareImgCoords.left - 355) + "px";
            }
        }, 220);
        setTimeout(() => {
            shareArrow.style.top = `37.5px`;
            shareArrow.style.visibility = `visible`;
            if(window.innerWidth <= 550){
                shareArrow.style.visibility = `hidden`;
            }
        }, 450);
        setTimeout(() => {
            shareBox.style.visibility = `visible`;
        }, 670);
        setTimeout(() => {
            shareImgActive = true;
        }, 800);

    }else{
        
        shareArrow.style.top = `10px`;
        shareArrow.style.visibility = `hidden`;
        setTimeout(() => {
            shareBox.style.visibility = `hidden`;
        }, 100);
        setTimeout(() => {
            shareSection.style.left = shareImgCoords.left + "px";
            shareSection.style.width =`30px`;
            shareSection.style.height = `30px`;
            shareSection.style.borderRadius = `50%`;
        }, 350);
        setTimeout(() => {
            e.path[0].src = `images/icon-share.svg`;
            shareImg.style.backgroundColor = `hsl(210, 46%, 95%)`;
            shareSection.style.top = shareImgCoords.top + "px";
            shareSection.style.backgroundColor = `hsl(210, 46%, 95%)`;
        }, 600);
        setTimeout(() => {
            shareImgActive = false;
        }, 800);
    }

}

function shareSectionPosition(e) {

    let shareImgCoords = shareImg.getBoundingClientRect();

    let shareSection = document.querySelector('.share_section');

    shareSection.style.top = shareImgCoords.top + "px";
    shareSection.style.left = shareImgCoords.left + "px";


}