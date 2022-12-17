class Employee{
    constructor(config){
        this.name = config.name
        this.dice = config.dice
    }

    yieldPoint(){
        let randomIndex = Math.floor(Math.random() * 6)
        randomIndex += 1;
        return this.dice[randomIndex];
    }
    
    returnDisplayConfig(){
        return {
            name: this.name,
            dice: this.dice
        }
    }


}



// export {produect}