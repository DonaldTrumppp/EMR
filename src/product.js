class Product{
    constructor(config){
        this.name = config.name
        this.stats = config.stats
        this.sellRate = 1
        this.sale = 0
        this.statsTotal = 0
    }

    init(){

        Object.keys(this.stats).forEach((key, index) =>{
            this.statsTotal += this.stats[key]

        })

        this.expectedSale = this.statsTotal * 100
    }

    sell(){
        this.sellRate *= 0.85
        this.sale += Math.floor(this.expectedSale * this.sellRate)
        return Math.floor(this.expectedSale * this.sellRate)
    }

}



// export {produect}