const utils = {
    getAge(dateString){
        var today = new Date();
        var birthDate = new Date(dateString);
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth() + 1;
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    },

    checkEmptyObject(obj){
        return(obj // 👈 null and undefined check
            && Object.keys(obj).length === 0 // could be new Date()
            && Object.getPrototypeOf(obj) === Object.prototype)
    },
}

export {utils}