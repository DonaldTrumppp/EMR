import {hxCommonRecord} from "./patientData.js"
import {utils} from "./utils.js"

class SimpleTestDetail{
    // Input = a test: detail
    // e.g. Entrance VA: 6/6
    // init = inject formated input into the DOM
    constructor(config){
        this.container = config.container
        this.element = null
        this.testType = config.testType
        this.testDetail = config.testDetail
    }

    createElement(){
        const element = document.createElement("div");
        element.classList.add("simpleTestDiv")

        const testTypeDiv = document.createElement("div");
        element.classList.add("simpleTestType")
        testTypeDiv.innerHTML = `
            <p class = "TextMessage_p">${this.testType}:   </p>`
        element.appendChild(testTypeDiv)

        const testDetailDiv = document.createElement("div");
        const isCommonResponse = Object.filter(hxCommonRecord, obj => obj === this.testDetail)
        if (!utils.checkEmptyObject(isCommonResponse)){
            testDetailDiv.classList.add("simpleTestDetailCommon")
        }
        else{
            testDetailDiv.classList.add("simpleTestDetail")
        }
            
        testDetailDiv.innerHTML = `
            <p class = "TextMessage_p">${this.testDetail}</p>`
        element.appendChild(testDetailDiv)

        this.element = element
    }

    init(){
        this.createElement()
        if (this.container) this.container.appendChild(this.element);
    }
}

export {SimpleTestDetail};