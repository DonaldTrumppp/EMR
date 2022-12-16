import {SimpleTestDetail} from "./simpleTestDetail.js"

class ContentManager{
    constructor(config){
        this.container = config.container
        this.pxHxList = config.pxHxList
        this.elementList = [];
    }

    createElement(){
        const content = this.pxHxList
        Object.keys(content).forEach(testType =>{
            let testDetail = content[testType];
            let element;
            
            if (testDetail.type){
                element = document.createElement("div");
                element.classList.add("TextDetailContainer");
                Object.keys(testDetail).forEach(subTestType =>{
                    const testDetailElement = document.createElement("div");
                    testDetailElement.classList.add("testDetail");
                    testDetailElement.innerHTML = `
                        <p class = "TextMessage_p">${subTestType}: ${testDetail[subTestType]}   </p>`
                    element.appendChild(testDetailElement)
                })
            }
            else{
                const simpleTestDetail = new SimpleTestDetail({
                    testType,
                    testDetail,
                })
                simpleTestDetail.createElement()
                element = simpleTestDetail.element
            }
            
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

export {ContentManager};