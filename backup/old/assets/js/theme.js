// Custom theme code
window.addEventListener('load',(e)=>{
    setTimeout(() => {  console.clear(); }, 100);
    setTimeout(() => {  console.clear(); }, 4000);
})
if (document.getElementsByClassName('clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn' });
}

if (document.getElementsByClassName('clean-product').length > 0) {
    window.onload = function() {
        vanillaZoom.init('#product-preview');
    };
}
