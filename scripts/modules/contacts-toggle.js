export default function initContactsToggle(){
    const h2Buttons = document.querySelectorAll('.contacts-container h2')
    const teachersContainer = document.querySelector('[data-contacts="teachers"]')
    const secretaryContainer = document.querySelector('[data-contacts="secretaries"]')
    
    secretaryContainer.classList.add('hidden')
    
    function toggleSections(event){
        const element = event.target.parentElement

        if(element.classList.contains('hidden')){
            teachersContainer.classList.toggle('hidden')
            secretaryContainer.classList.toggle('hidden')
        }
    }
    
    h2Buttons.forEach((item) => {
        item.addEventListener('click', toggleSections)
    });
}