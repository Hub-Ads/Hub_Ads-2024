export default function initCopyToClipboard(){
    const buttonsCopy = document.querySelectorAll('[data-copy-clipboard]')
    
    buttonsCopy.forEach((button)=>{
        function copyContent(){
            let copyText = button.previousElementSibling.innerText
            navigator.clipboard.writeText(copyText)
        }
    
        button.addEventListener('click', copyContent)
    })
}