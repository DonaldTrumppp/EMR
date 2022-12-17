class TextMessage {
    constructor({ text, onComplete }) {
      this.text = text;
      this.onComplete = onComplete;
      this.element = null;
    }
  
    createElement() {
        //Create the element
        this.element = document.createElement("div");
        this.element.classList.add("TextMessage");
    
        this.element.innerHTML = (`
            <p class="TextMessage_p">${this.text}</p>
            
        `)
    
        // this.element.querySelector("button").addEventListener("click", () => {
        //     //Close the text message
        //     this.done();
        // });

        //   this.actionListener = new KeyPressListener("Enter", () => {
        //     this.done();
        //   })
  
    }

    updateText(newText){
        this.text = newText
        this.element.innerHTML = (`
            <p class="TextMessage_p">${this.text}</p>
            
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