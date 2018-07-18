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
                    div.classList.remove('md-container-tooltip-hide');
                    div.classList.add('md-container-tooltip-show');                        

                    setTimeout(() => {
                        div.classList.remove('md-container-tooltip-show');
                    }, 1000);
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


