document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        // const accordionContent = button.nextElementSibling;

        button.classList.toggle('accordion__button--active');

        // if (button.classList.contains('accordion__button--active')) {
        //     accordionContent.style.maxheight = accordionContent.scrollHeight + '108px';
        // } else {
        //     accordionContent .style.maxheight = 0;
        // }
    });
});