export default function initDragScroll(){
    const sliders = document.querySelectorAll('[data-scroll="drag-items"]')
    let isDown = false;
    let scrollLeft;
    let startX;
    
    sliders.forEach((slider)=>{
        function dragDown(event){
            isDown = true
            slider.classList.add('active')
            startX = event.pageX - slider.offsetLeft
            scrollLeft = slider.scrollLeft
            slider.addEventListener('mousemove', dragMove)
        }
        
        function dragUp(){
            isDown = false
                slider.classList.remove('active')
                startX = 0
                slider.removeEventListener('mousemove', dragMove)
        }
        
        function dragLeave(){
            isDown = false
            slider.classList.remove('active')
            startX = 0
            slider.removeEventListener('mousemove', dragMove) 
        }
        
        function dragMove(event){
            if(!isDown) return
            event.preventDefault()
            const x = event.pageX - slider.offsetLeft
            const walk = x - startX
            slider.scrollLeft = scrollLeft - walk
        }

        slider.addEventListener('mousedown', dragDown);
        slider.addEventListener('mouseleave', dragLeave);
        slider.addEventListener('mouseup', dragUp);
    })

}

/* 
Todo: Adicionar funções e estilos apenas caso haja necessidade, ou seja, caso o container "estoure" / adicional evento com scroll do mouse / avaliar se prevent default vai atrapalhar funções como links, modais, etc.
*/