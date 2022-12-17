class EmployeeDisplay {
    constructor({ employeeArr, onComplete }) {
      this.employeeArr = employeeArr;
      this.onComplete = onComplete;
      this.className = "EmployeeDisplay"
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
        let diceDisplayText = ""

        this.employeeArr.forEach((employeeConfig) =>{
            diceDisplayText += `Name: ${employeeConfig.name},`
            Object.keys(employeeConfig.dice).forEach((key, index) => {
                diceDisplayText += `${key}: ${JSON.stringify(employeeConfig.dice[key])}|| `
            })
            diceDisplayText += "<br>"
        })

        this.element.innerHTML = (`
            <p class="${this.className}_p">
                ${diceDisplayText}
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