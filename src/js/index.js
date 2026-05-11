var btn = document.querySelector('.btn-know-more');
var texto = document.querySelector('.show-about');
var img = document.querySelector('.image');

btn.addEventListener('click', function() {
    if (texto.style.display === 'none' && img.className == 'image') {
        texto.style.display = 'block';
        img.className = 'image-nova';
       
    } else {
        texto.style.display = 'none';
        img.className = 'image';

    }
});