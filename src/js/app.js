(function TooltipFucn(){
    'use strict'

    class Tooltip{

        constructor(title,decripcion,direccion,select){
            this._title = title;
            this._descripcion = decripcion;
            this._direccion = direccion
            this._select = select
        }
    
        createELement(){
    
            let template = `
                <div class="md-container-tootip-hide">
                    <p class="title-tooltip">${this._title}</p>
                    <p class="description-tooltip">${this._descripcion}</p>
                </div>
            `;
            this._select.insertAdjacentHTML('beforebegin',template);    
            this.showElememnt()
        }

        showElememnt(){

            this._select.addEventListener('mouseover',(e)=>{
                let div = this._select.previousSibling.previousElementSibling;
                console.log(div);
                if(div.className === 'md-container-tootip-hide'){
                    switch(this._direccion){
                        case 'up':
                            div.classList.remove('md-container-tootip-hide');
                            div.classList.add('md-container-tooltip-show-up');

                        break;
                        case 'down':
                            div.classList.remove('md-container-tootip-hide');
                            div.classList.add('md-container-tooltip-show-down');

                        break;
                        case 'left':
                            div.classList.remove('md-container-tootip-hide');
                            div.classList.add('md-container-tooltip-show-left');
                        break;
                        case 'right':
                            div.classList.remove('md-container-tootip-hide');
                            div.classList.add('md-container-tooltip-show-right');

                        break;
                    }

                    setTimeout(() => {
                        div.classList.remove(div.className);
                        div.classList.add('md-container-tootip-hide');
                    }, 600);
                }
            })

        }
    }
    
    let elements = document.querySelectorAll('[data-toggle="tooltip"]');
    elements.forEach(e => getValues(e))

    function getValues (element){
        let title = element.dataset.title
        let description = element.dataset.description
        let direccion = element.dataset.direcion
        let select = document.querySelector("#"+element.id)
        let data = new Tooltip(title,description,direccion,select);
        data.createELement();

    }


})();


