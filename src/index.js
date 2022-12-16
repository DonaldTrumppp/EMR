import {examTypeList, hxTypeList,hxCommonRecord,patientData, firebaseConfig} from "./patientData.js"
import {Patient} from "./patient.js"
import {ContentManager} from "./contentManager.js"
import { FirebaseManager } from "./firebase.js"
import { KeyPressListener } from "./keyPressListener.js"
import {utils} from "./utils.js"

const firebaseManager = new FirebaseManager();

const searchInput = document.querySelector("#searchInput")
const searchButton = document.querySelector("#searchButton")
searchButton.addEventListener("click", getIdThenLoad);
new KeyPressListener("Enter", getIdThenLoad)

function getIdThenLoad(){
    console.log("getting Id then loading")
    const id = getId()
    if (!id){
        console.log("no id!")
        return false
    }
    loadPxData(id)
}

function getId(){
    return searchInput.value
}

async function consoleLogPx(id){
    const result = await firebaseManager.setPatientData({
        patientData: patientData[id],
        id,
    });
}
async function loadPxData(id){
    const result = await firebaseManager.loadPatientData({
        id,
    })
    console.log(result)
    if (!result.birthday){
        console.log("Pateint does not exist!")
        return false
    }
    const currentPx = new Patient(result)
    
    currentPx.init(hxTypeList)
    const contentManager = new ContentManager({
        container : document.querySelector(".content-container"),
        pxHxList: currentPx.HxList[0],
    })
    contentManager.init()
    searchInput.value = null
}


// Example use:
// var scores = {
//     John: 2, Sarah: 3, Janet: 1
// };
// var filtered = Object.filter(scores, score => score > 1);
// return {} if no match found
Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );


// const currentPx = new Patient(patientData.P123456)

// const contentManager = new ContentManager({
//     container : document.querySelector(".content-container"),
//     pxHxList: currentPx.HxList[0],
// })
// contentManager.init()





