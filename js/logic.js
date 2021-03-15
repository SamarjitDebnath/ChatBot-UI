const chat = document.querySelector('.wrapper');

document.querySelector('.toggle').onclick = function () {
    this.classList.toggle('active');
    chat.classList.toggle('active');
}

