
function openPopup(){
    var blur = document.getElementById('blur');
    blur.classList.add('blurbg');

    var popup = document.getElementById('popup');
    popup.classList.add("open-popup");
}

function closePopup(){
    var blur = document.getElementById('blur');
    blur.classList.remove('blurbg');

    var popup = document.getElementById('popup');
    popup.classList.remove("open-popup");
}

function openpopup_1(){

    var popup_1= document.getElementById('popup_1');
    popup_1.classList.add("open-popup");

}