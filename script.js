document.addEventListener('DOMContentLoaded', () => {
    // Add no scroll during intro
    document.body.classList.add('loading');

    const introLogo = document.getElementById('intro-logo');
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');
    const main = document.querySelector('main');
    const footer = document.querySelector('footer');

    // Show intro logo for 3.5s then reveal page content
    setTimeout(() => {
        introLogo.style.display = 'none';

        header.hidden = false;
        nav.hidden = false;
        main.hidden = false;
        footer.hidden = false;

        header.classList.add('visible');
        nav.classList.add('visible');
        main.classList.add('visible');
        footer.classList.add('visible');

        document.body.classList.remove('loading');
    }, 3500);

    // Shrink header on scroll
    window.addEventListener('scroll', () => {
        if(window.scrollY > 60) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });

    // Modal controls
    const modal = document.getElementById('terms');
    const modalCloseBtn = modal.querySelector('.close-btn');
    const termsLink = document.getElementById('terms-link');

    termsLink.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
        modal.focus();
    });

    function closeModal() {
        modal.style.display = 'none';
    }

    modalCloseBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
