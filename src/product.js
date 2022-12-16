class Product{
    constructor(config){
        this.name = config.name
        this.stat = config.stat
        this.sellRate = 1
    }

    init(){
        this.expectedSale = this.stat * 100
    }

    sell(){
        this.sellRate *= 0.95
        return Math.floor(this.expectedSale * this.sellRate)
    }

}



// export {produect}