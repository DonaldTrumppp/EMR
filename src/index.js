// import { KeyPressListener } from "./keyPressListener.js"
// import {utils} from "./utils.js"

var bgmVolume = 5;
var playerMS = 20;

var isPaused = false;

var frameCount = 0;
var fps = 5;
var fpsInterval, startTime, now, then, elapsed;

const produectArr = []
let developingProduct = null;
const employeeArr = []

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

const goldDiv = document.querySelector("#gold")
let goldCount = 234
goldDiv.textContent = goldCount

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

        produectArr.forEach((product) =>{
            goldCount += product.sell()
        })
        

        employeeArr.forEach((employee) =>{
            developingProduct.stat += employee.yieldPoint()
        })

        goldDiv.textContent = developingProduct.stat

        
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
    developingProduct = developProduct()
    newEmployee(employeeArr)
}

function pauseTheGame(){
    isPaused = true
}

function unPauseTheGame(){
    isPaused = false
}

function developProduct(devProd){
    return new DevelopingProduct({
        name: "product1",
        stat: 0,
    })
}

function newProduct(arr){
    const newProduct = new Product({
        name: "product1",
        stat: 100,
    })
    newProduct.init()
    arr.push(newProduct)
}

function newEmployee(arr){
    const newEmployee = new Employee({
        name: "employee1",
        dice: {
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
        }
    })
    arr.push(newEmployee)
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
          .filter( key => predicate(obj[key]) )
          .reduce( (res, key) => (res[key] = obj[key], res), {} );


// const currentPx = new Patient(patientData.P123456)

// const contentManager = new ContentManager({
//     container : document.querySelector(".content-container"),
//     pxHxList: currentPx.HxList[0],
// })
// contentManager.init()





