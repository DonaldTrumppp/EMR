class DevelopingProductDisplay {
    constructor({ config, onComplete }) {
      this.config = config;
      this.onComplete = onComplete;
      this.className = "DevelopingProductDisplay"
      this.element = null;
    }
  
    createElement() {

        //Create the element
        this.element = document.createElement("div");
        this.element.classList.add(this.className);

        this.updateText()

        // this.element.querySelector("button").addEventListener("click", () => {
        //     //Close the text message
        //     this.done();
        // });

        //   this.actionListener = new KeyPressListener("Enter", () => {
        //     this.done();
        //   })
  
    }

    updateText(){
        let displayText = ""
        Object.keys(this.config.stats).forEach((key, index) => {
            displayText += `${key}: ${this.config.stats[key]}|| `
        })

        this.element.innerHTML = (`
            <p class="${this.className}_p">Name: ${this.config.name},
                Stats: ${displayText}
            </p>
            
        `)
    }
  
    done() {
        this.element.remove();
        // this.onComplete();
    }
  
    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }
}