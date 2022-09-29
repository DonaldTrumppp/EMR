// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, setDoc , doc, getDoc } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {firebaseConfig} from "./patientData.js"

class FirebaseManager{
    constructor(){
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        this.db = getFirestore(app);
    }
    async loadPatientData({id}){
        const pxDoc = doc(this.db, "pxList", id);
        const snapshot = await getDoc(pxDoc);
        return {
            id: snapshot.id,
            ...snapshot.data(),
        }
    }
    async setPatientData({id, patientData}){
        const docRef = collection(this.db, "pxList")
        console.log(docRef)
        await setDoc (
            doc(docRef, id),
            patientData
        )
    }
    async loadCity() {
        const docRef = doc(this.db, "cities", "SF");
        const snapshot = await getDoc(docRef);
        return {
            id: snapshot.id,
            ...snapshot.data(),
        };
    }
    async setDocCity(){
        const citiesRef = collection(db, "cities");
        await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    }

}




export {FirebaseManager};