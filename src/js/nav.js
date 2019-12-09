(function() {
    let navMenu = document.querySelector('.mobile-nav');

    let onOpen = () => {
        navMenu.classList.remove('js-none');
        navMenu.classList.add('js-block');
    };

    let onClose = () => {
        navMenu.classList.add('js-none');
        navMenu.classList.remove('js-block');
    };

    document.addEventListener('click', (evt) => {
        let target = evt.target;
        if (target.matches('.mobile-closed__button')) {
            target.classList.toggle('active');
            navMenu.classList.contains('js-none') ? onOpen() : onClose();
        }
    });
})();
