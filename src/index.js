import {examTypeList, hxTypeList,hxCommonRecord,patientData, firebaseConfig} from "./patientData.js"
import {Patient} from "./patient.js"
import {ContentManager} from "./contentManager.js"
import { FirebaseManager } from "./firebase.js"
import {utils} from "./utils.js"

const firebaseManager = new FirebaseManager();
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
    // const time = result.birthday.toDate()
    console.log(result)
    const currentPx = new Patient(result)
    currentPx.init(hxTypeList)
    console.log(currentPx)
    const contentManager = new ContentManager({
        container : document.querySelector(".content-container"),
        pxHxList: currentPx.HxList[0],
    })
    contentManager.init()
}

const loadedData = loadPxData("P123456")

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





