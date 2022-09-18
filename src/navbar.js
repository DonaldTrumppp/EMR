class navBar {
    constructor(config){

    }

    createElement(){

    }

    init(){
        this.createElement()
        this.elementList.forEach(element =>{
            this.container.appendChild(element)
        })
        
    }
}