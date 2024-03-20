export default function initTooltip(){
    const tooltips = document.querySelectorAll('[data-tooltip]')
    
    tooltips.forEach((item)=>{
        item.addEventListener('mouseenter', onMouseOver)
    })
    
    function onMouseOver(event){
        const tooltipBox = createTooltipBox(this)
    
        onMouseMove.tooltipBox = tooltipBox
        this.addEventListener('mousemove', onMouseMove)
    
        onMouseLeave.tooltipBox = tooltipBox
        onMouseLeave.element = this
        this.addEventListener('mouseleave', onMouseLeave)
        
        onClick.tooltipBox = tooltipBox
        onClick.element = this
        this.addEventListener('click', onClick)
    }
    
    const onMouseLeave = {
        handleEvent(){
            this.tooltipBox.remove()
            this.element.removeEventListener('mouseleave', onMouseLeave)
            this.element.removeEventListener('mousemove', onMouseMove)
            this.element.removeEventListener('click', onClick)
        },
    }
    
    const onClick = {
        handleEvent(){
            this.tooltipBox.innerText = 'Copiado Para Área de Tranferência'
        }
    }

    const onMouseMove = {
        handleEvent(event){
            this.tooltipBox.style.top = event.pageY + -10 + 'px'
            this.tooltipBox.style.left = event.pageX + -10 + 'px'
        }
    }
    
    function createTooltipBox(element){
        const tooltipBox = document.createElement('div')
        const text = element.getAttribute('aria-label')
        tooltipBox.classList.add('tooltip')
        tooltipBox.innerText = text
        document.body.appendChild(tooltipBox)
        return tooltipBox
    }
}

/* 
TODO: Adicionar switch para este código atender a vários tipos de tooltip.
*/