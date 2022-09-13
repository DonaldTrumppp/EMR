class ContentManager{
    constructor(config){
        this.container = config.container
        this.elementList = [];
    }

    createElement(){
        const content = data

        Object.keys(content).forEach(key =>{
            let object = content[key];
            const element = document.createElement("div");
            element.classList.add("TextMessage");

            object = object + "<br>A blunder?<br>"
            element.innerHTML = (`
                <p class = "TextMessage_p"> ${object}</p>
            `)
            this.elementList.push(element)
        })

        
    }

    init(){
        this.createElement()
        this.elementList.forEach(element =>{
            this.container.appendChild(element)
        })
        
    }
}

const contentManager = new ContentManager({
    container : document.querySelector(".content-container")
})
contentManager.init()