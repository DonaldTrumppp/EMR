import {utils} from "./utils.js"

class Patient {
    constructor(config){
        this.id = config.id;
        this.age = utils.getAge(config.age);
        this.HxList = config.HxList;
    }

}

export {Patient}