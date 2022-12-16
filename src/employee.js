class Employee{
    constructor(config){
        this.name = config.name
        this.dice = config.dice
        this.sellRate = 1
    }

    yieldPoint(){
        let randomIndex = Math.floor(Math.random() * 6)
        randomIndex += 1;
        return this.dice[randomIndex];
    }
    



}



// export {produect}