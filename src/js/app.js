'use strict'

class Tooltip{
    constructor(title,decripcion,eventM,select){
        this._title = title;
        this._descripcion = decripcion;
        this._event = eventM
        this._select = select
    }

    _loadEvent(){
        this._select  = document.querySelector(this._select)
        console.log(this._select);
        this.createELement();
    }

    _close(){
        console.log("close")
    }

    _open(){

        console.log("open")

    }

    createELement(){


        let habilities = "demo1"
        let hobbys = "demo"

        let component = `
            <section >
                <p>Demo</p>
            </section>
        `;



    }
}

let data = new Tooltip(
    'demo',
    'modes2',
    'click',
    '#demo'
)
data._loadEvent()


console.log(data)