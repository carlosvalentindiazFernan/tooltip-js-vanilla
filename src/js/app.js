(function TooltipFucn() {
    'use strict'

    var $ = function (selector) {

        if (!(this instanceof $)) {
            return new $(selector);
        }


        this._select = document.querySelectorAll(selector);
        this._title = "";
        this._descripcion = "";
        this._onApprove = "";

        $.prototype.showTooltip = function (obj) {

            this._title = obj.title;
            this._descripcion = obj.description;
            this._onApprove = obj.onApprove;

            this._select.forEach(function (element) {
                CreateELementFunction(element)
                element.addEventListener('mouseover', () => {
                    let div = element.previousSibling.previousElementSibling;
                    showElememnt(element)
        
                })
            });
        }

        function showElememnt(element) {

            let div = element.previousSibling.previousElementSibling;
            console.log(div.className)
            if (div.className === 'md-container-tootip-hide' || div.className === null) {
                div.classList.remove('md-container-tootip-hide');
                div.classList.add('md-container-tooltip-show-up');

                setTimeout(() => {                    
                    div.classList.remove('md-container-tooltip-show-up');
                    div.classList.add('md-container-tootip-hide');
                }, 600);
            }


        }

        function CreateELementFunction(element, title, description) {
            let template = `
                    <div class="md-container-tootip-hide">
                        <p class="title-tooltip">${title}</p>
                        <p class="description-tooltip">${description}</p>
                    </div>
                `;

            element.insertAdjacentHTML('beforebegin', template);

        }

        return this;

    }


    $('#button-left').showTooltip({
        'title': 'demo',
        'description': 'this  is a description',
        'onApprove': 'messaje click'
    });

})();


