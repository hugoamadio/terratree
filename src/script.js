const btnContato = document.getElementById('btn-contato');
const btnMenuMobile = document.getElementById('nav-btn')

var btnPlaceHolder = false

btnContato.addEventListener('click', function (event) {
    window.location.href = 'https://wa.me/5519998726671';
});

btnMenuMobile.addEventListener('click', function(event){
    btnMenuMobile.classList.toggle('')
})