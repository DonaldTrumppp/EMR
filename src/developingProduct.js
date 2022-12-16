class DevelopingProduct{
    constructor(config){
        this.name = config.name
        this.stat = config.stat
    }

    returnConfig (){
        return {
            name: this.name,
            stat: this.stat
        }
    }

}
