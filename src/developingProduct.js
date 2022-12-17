class DevelopingProduct{
    constructor(config){
        this.name = config.name
        this.stats = config.stats
        this.progress = 0
        this.isCompleted = false
    }

    develop({key, value}){
        this.stats[key] += value

        this.progress += 1
        if (this.progress >= 12){
            this.isCompleted = true
        }
    }

    returnConfig (){
        return {
            name: this.name,
            stats: this.stats
        }
    }

}
