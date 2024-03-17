export default function initScrollToTop(){
    const buttonToTop = document.querySelector('.to-top-container')
   
    function scrollToTop(){
        const element = document.querySelector('[data-scroll-element="header"]')    
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    buttonToTop.addEventListener('click', scrollToTop)
}