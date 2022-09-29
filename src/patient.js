import {utils} from "./utils.js"

class Patient {
    constructor(config){
        this.id = config.id;
        this.age = utils.getAge(config.birthday.toDate());
        this.HxSource = config.HxList;
        this.HxList = [];
    }

    init(hxTypeList){
        const tempObj = {}
        Object.values(hxTypeList).forEach(HxType => {
            tempObj[HxType] = this.HxSource[0][HxType]
        })
        this.HxList.push(tempObj)
    }
}

export {Patient}