let button = document.querySelector('.aszsocials-button');
let modal = document.querySelector('.aszsocials-modal');
let hint = document.querySelector('.aszsocials-hint');
button.onclick = function () {
    if(modal.style.display == 'none' || modal.style.display=='') {
        this.className += " aszsocials-button_active";
        modal.style.display = 'block';
        hint.style.display = 'none';
    }
    else {
        this.className = "aszsocials-button";
        modal.style.display = 'none';
    }
}