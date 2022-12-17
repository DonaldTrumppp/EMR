// import { KeyPressListener } from "./keyPressListener.js"
// import {utils} from "./utils.js"

var bgmVolume = 5;
var playerMS = 20;

var isPaused = false;

var frameCount = 0;
var fps = 5;
var fpsInterval, startTime, now, then, elapsed;

const gameContaier = document.querySelector(".game-container")
const productArr = []
let developingProduct = null;
const employeeArr = []
let message = null
let employeeDisplay = null
let developingProductDisplay = null

// const keys = {
//     w: {
//         pressed: false
//     },
//     a: {
//         pressed: false
//     },
//     s: {
//         pressed: false
//     },
//     d: {
//         pressed: false
//     }
// }

const goldDiv = document.querySelector("#gold")
const developingProductDiv = document.querySelector("#developingProduct")
let goldCount = 250

// initialize the timer variables and start the animation
function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    update();
}

function update() {
    window.requestAnimationFrame(update)

    now = Date.now();
    elapsed = now - then;

    // if enough time has elapsed, draw the next frame

    if (elapsed > fpsInterval) {
        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // update the game
        if (isPaused) {
            console.log("paused")
            return;
        }


        if (productArr) {

            messageText = ""
            productArr.forEach((product) => {
                goldCount += product.sell()
                messageText += `${product.name} Has Earned: ${product.sale} <br>`

            })
            if (message) {
                message.updateText(messageText)
            }
            else {
                message = new TextMessage({
                    text: messageText
                })
                message.init(gameContaier)
            }

        }

        if (employeeArr){
            employeeDisplay.employeeArr = employeeArr
            employeeDisplay.updateText()
        }



        if (developingProduct) {

            employeeArr.forEach((employee) => {
                chosenSideArr = Object.entries(employee.yieldPoint())[0]

                statGain = { key: chosenSideArr[0], value: chosenSideArr[1] }

                developingProduct.develop(statGain)
            })
            developingProductDisplay.config = developingProduct.returnConfig()
            developingProductDisplay.updateText()
            if (developingProduct.isCompleted) {
                newProduct(productArr, developingProduct.returnConfig())
                developingProduct = null
            }
        }


        goldDiv.textContent = `Gold: ${goldCount}`



        // playerSprite.weaponArr.forEach((weapon) => {
        //     weapon.attack(farmGridArr)
        // })

        // plantSeedFromDrawPile()

        // // draw the BG before drawing others
        // bgSprite.draw()

        // farmGridArr.forEach((farmGrid) => {
        //     farmGrid.draw()
        //     if(farmGrid.content){
        //         farmGrid.content.draw()
        //     }
        // })

        // enemies = enemies.filter(enemy => enemy.currentHP > 0)
        // enemies.forEach((enemy) => {
        //     enemy.draw()
        // })


        // projectileArr = projectileArr.filter(projectile => projectile.position.x > -1000)
        // projectileArr.forEach((projectile) => {
        //     projectile.draw()
        // })

        // playerSprite.draw()
    }
}

function initGame() {
    startAnimating(fps)
    newEmployee(employeeArr)
    newEmployee(employeeArr)
    newProduct(productArr)
    developProduct()

    employeeDisplay = new EmployeeDisplay({
        employeeArr: employeeArr
    })
    employeeDisplay.init(gameContaier)

    developingProductDisplay = new DevelopingProductDisplay({
        config: developingProduct
    })
    developingProductDisplay.init(gameContaier)

    buttonsBindings()
}

function buttonsBindings() {
    //* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
    let dropdown = document.getElementsByClassName("dropdown-btn");
    for (let i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }

    let hireButton =  document.querySelector("#HireButton")
    hireButton.addEventListener("click", 
        newEmployee
    , false)

    let newProductButton = document.querySelector("#newProductButton")
    newProductButton.addEventListener("click", developProduct, false)
}

function pauseTheGame() {
    isPaused = true
}

function unPauseTheGame() {
    isPaused = false
}

function developProduct(devProd) {
    if (developingProduct){
        if(!developingProduct.isCompleted){
            console.log("Developing another product")
            return
        }
    }
    developingProduct = new DevelopingProduct({
        name: `Product ${productArr.length + 1}`,
        stats:
        {
            F: 0,
            C: 0,
            G: 0,
            S: 0
        }
    })

}

function newProduct(arr, config = null) {
    let newProduct
    if (config) {
        newProduct = new Product(config)
    }
    else {
        newProduct = new Product({
            name: `Product ${productArr.length + 1}`,
            stats: {
                F: 25,
                C: 25,
                G: 25,
                S: 25,
            }
        })
    }
    newProduct.init()
    if(Array.isArray(arr)){
        arr.push(newProduct)
    }
    else{
        productArr.push(newProduct)
    }
    
}

function newEmployee(arr = null) {

    const newEmployee = new Employee({
        name: `Employee ${employeeArr.length + 1}`,
        dice: {
            1: { F: 4 },
            2: { F: 4 },
            3: { G: 2 },
            4: { G: 2 },
            5: { S: 1 },
            6: { C: 1 },
        }
    })
    if(!Array.isArray(arr)){
        employeeArr.push(newEmployee)
    }
    else{arr.push(newEmployee)}
}


function writeSave() {
    // TODO: write save file with current weapon, relics and levels
    if (!storageAvailable('localStorage')) {
        console.log("LocalStorage unavailable!")
        return
    }
    // TODO: write save

    // localStorage["weaponArr"] = JSON.stringify(playerSprite.weaponArr);

    // playerExp = [playerSprite.level, playerSprite.currentExp, playerSprite.requiredExp,]
    // localStorage["playerCurrentExp"] = JSON.stringify(playerExp);

}

function loadSave() {
    bgmVolume = localStorage.getItem("bgmVolume")

    if (!localStorage.weaponArr) { return }

    // while (playerSprite.weaponArr.length > 0) {
    //     playerSprite.weaponArr.pop()
    // }


    // storedJson = JSON.parse(localStorage.weaponArr)

    // storedJson.forEach((weapon) => {
    //     const weaponImg = new Image();
    //     weaponImg.src = currentWeaponSet[weapon.name].imgSrc
    //     weapon = new Weapon({
    //         position: {
    //             x: playerSprite.position.x,
    //             y: playerSprite.position.y
    //         },
    //         image: weaponImg,
    //         frames: {
    //             max: 1,
    //             hold: 1
    //         },
    //         animate: true,
    //         scale: 5,
    //         damage: weapon.damage,
    //         coolDown: weapon.coolDown,
    //         name: weapon.name,
    //         levelUpEffect: weapon.levelUpEffect,
    //         level: weapon.level,
    //         numOfProjectile: weapon.numOfProjectile,
    //     })
    //     playerSprite.weaponArr.push(weapon)
    // })
    // const playerExp = JSON.parse(localStorage.playerCurrentExp)
    // playerSprite.level = playerExp[0]
    // playerSprite.currentExp = playerExp[1]
    // playerSprite.requiredExp = playerExp[2]
}

function clearSave() {
    localStorage.clear()
}

// start playing BGM once the user clicked
// let clicked = false
// addEventListener('click', () => {
//     if (!clicked) {
//         bgm = audio.letterIris

//         if (bgmVolume == undefined) {
//             bgmVolume = 5
//         }
//         bgm.volume(bgmVolume / 100)

//         // TODO: fix the audio stopping issue when switching between pages
//         // bgm.play()

//         clicked = true
//     }
// })


initGame()


// Example use:
// var scores = {
//     John: 2, Sarah: 3, Janet: 1
// };
// var filtered = Object.filter(scores, score => score > 1);
// return {} if no match found
Object.filter = (obj, predicate) =>
    Object.keys(obj)
        .filter(key => predicate(obj[key]))
        .reduce((res, key) => (res[key] = obj[key], res), {});


// const currentPx = new Patient(patientData.P123456)

// const contentManager = new ContentManager({
//     container : document.querySelector(".content-container"),
//     pxHxList: currentPx.HxList[0],
// })
// contentManager.init()





