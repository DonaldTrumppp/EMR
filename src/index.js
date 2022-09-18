import {examTypeList, hxTypeList,hxCommonRecord,patientData, firebaseConfig} from "./patientData.js"
import {Patient} from "./patient.js"
import {ContentManager} from "./contentManager.js"
import {utils} from "./utils.js"

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
async function loadCity(name) {
    const cityDoc = doc(db, `cities/${name}`);
    const snapshot = await getDoc(cityDoc);
    return {
        id: snapshot.id,
        ...snapshot.data(),
    };
}

console.log(db)

Object.filter = (obj, predicate) => 
    Object.keys(obj)
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );


const currentPx = new Patient(patientData.P123456)

const contentManager = new ContentManager({
    container : document.querySelector(".content-container"),
    pxHxList: currentPx.HxList[0],
})
contentManager.init()





