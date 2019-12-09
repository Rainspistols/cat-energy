(function() {
    if (location.pathname === '/index.html' || location.pathname === '/') {
        let rangeImg = document.querySelector('.cropper');
        let range = document.querySelector('input[type="range"]');
        rangeImg.style.width = range.value + '%';

        range.addEventListener('input', (evt) => {
            let target = evt.target;
            rangeImg.style.width = target.value + '%';
        });
    }
})();
