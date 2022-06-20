const imgBox = document.querySelectorAll('.imgBox');
imgBox.forEach(e=>e.addEventListener('click',function(){
    e.classList.toggle('active');
}))