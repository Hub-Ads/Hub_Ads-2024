export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')

    tooltips.forEach((item)=>{
        item.addEventListener('mouseenter', onMouseEnter)
    })

    function createTooltipBox(element){
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }

    function onMouseEnter(event){
        const tooltipBox = createTooltipBox(this)
         
        tooltipBox.style.top = event.pageY + -60 + 'px'
        tooltipBox.style.left = event.pageX - 250 + 'px'

        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
    }
    
    const onMouseLeave = {
        handleEvent(){
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
        }
    }
}

/* 
Todo: Refatorar todo o código, não gostei do resultado
*/