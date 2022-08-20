const BUTTON_THEME = document.querySelector(".theme-button")
const BUTTON_IMAGE = document.querySelector(".theme-button img")

const BACKGROUND_SECTION = document.querySelector(".background-section")
const SNAKE_SECTION = document.querySelector(".snake-section")

const FB_BUTTON = document.querySelector("footer div:nth-child(1)")
const FB_IMAGE = document.querySelector("footer div:nth-child(1) img")

const TWITTER_BUTTON = document.querySelector("footer div:nth-child(2)")
const TWITTER_IMAGE = document.querySelector("footer div:nth-child(2) img")

const INSTA_BUTTON = document.querySelector("footer div:nth-child(3)")
const INSTA_IMAGE = document.querySelector("footer div:nth-child(3) img")

const GITHUB_BUTTON = document.querySelector("footer div:nth-child(4)")
const GITHUB_IMAGE = document.querySelector("footer div:nth-child(4) img")

const ANARCHY_IMAGE = document.querySelectorAll(".background-section img")

const MAIN = document.querySelectorAll(".main")
const GAME = document.querySelectorAll(".game")
const MAIN_CHANGER = document.querySelector("header.main .span__changer")
const GAME_CHANGER = document.querySelector("header.game .span__changer")

const MAIN_PAGE_CHANGER = document.querySelector("main.main .menu-container .main-page")
const COMPASS_PAGE_CHANGER = document.querySelector("main.main .menu-container .compass-page")

const MAIN_PAGE = document.querySelector("main.main .content-container-main")
const COMPASS_PAGE = document.querySelector("main.main .content-container-compass")

const COMPASS_BUTTONS = document.querySelectorAll("main.main .change-compass-button")
const COMPASS_IMAGE = document.querySelector(".compass-image")
const COMPASS_NAME = document.querySelector("main.main .content-container-compass h1")

const CHANGE_COMPASS_BUTTON_LEFT = document.querySelector(".left-button-compass")
const CHANGE_COMPASS_BUTTON_RIGHT = document.querySelector(".right-button-compass")

const SRC_OF_COMPASS_IMAGES = ["mypolitics", "soulgraphy"]
const NAME_OF_COMPASSES = ["MYPOLITICS", "SOULGRAPHY"]

const WEAPON_LIST = document.querySelectorAll("header.game .span__list li")
const WEAPON_IMG = document.querySelectorAll("main.game img")
const WEAPON_NAMES = ["glock", "p90", "ak47", "awp", "rpg7"]
const WEAPON_ACCESS = [1, 0, 0, 0, 0]
const WEAPON_COST = [100, 300, 700, 1500]
let currentWeapon = localStorage.getItem("weapon") || 0
WEAPON_IMG.forEach((weaponImg) => {
    weaponImg.src = "./photos/" + WEAPON_NAMES[currentWeapon] + ".png"
})
document.querySelector("header.game li:nth-child(" + (parseFloat(currentWeapon) + 1) + ")").style.background = "green"
for (i=0; i<4; i++){
    if(WEAPON_COST[i] <= localStorage.getItem("points")){
        WEAPON_ACCESS[(i+1)] = 1
    }
}
for (i = 0; i < 5; i++){
    if(WEAPON_ACCESS[i] === 0){
        document.querySelector("header.game li:nth-child(" + (i + 1) + ")").style.background = "gray"
    }
}
let pointsOfWeapon = [1, 1.5, 2, 2.5, 3]

const BUTTON_GAME = document.querySelector(".clicker-button")
const POINTS_GAME = document.querySelector(".point-div span:nth-child(2)")

let theme = 0

let compassIndex = 0

let pointsOfGame = localStorage.getItem("points") || "0"
POINTS_GAME.innerHTML = localStorage.getItem("points") || "0"

/* CHANGE SUBPAGES */

MAIN_PAGE_CHANGER.addEventListener("click", () => {
    MAIN_PAGE.classList.remove("none")
    COMPASS_PAGE.classList.add("none")
})

COMPASS_PAGE_CHANGER.addEventListener("click", () => {
    COMPASS_PAGE.classList.remove("none")
    MAIN_PAGE.classList.add("none")
})

/* GAME */

BUTTON_GAME.addEventListener("click", () => {
    WEAPON_IMG.forEach((weaponImg) => {
        weaponImg.classList.add("active-weapon")
    })
    setTimeout(() => {
        WEAPON_IMG.forEach((weaponImg) => {
            weaponImg.classList.remove("active-weapon")
        })
    }, 100)
    pointsOfGame = parseFloat(pointsOfGame) + parseFloat(pointsOfWeapon[currentWeapon])
    localStorage.setItem("points", pointsOfGame)
    POINTS_GAME.innerHTML = localStorage.getItem("points")
    for (i=0; i<4; i++){
        if(WEAPON_COST[i] <= localStorage.getItem("points")){
            WEAPON_ACCESS[(i+1)] = 1
            document.querySelector("header.game li:nth-child(" + (i + 2) + ")").style.background = ""
            document.querySelector("header.game li:nth-child(" + (parseFloat(currentWeapon) + 1) + ")").style.background = "green"
        }
    }
    for (i = 0; i < 5; i++) {   
        WEAPON_CHANGE(i)
    }
    console.log(WEAPON_ACCESS)
})

/* THEME */

BUTTON_THEME.addEventListener("click", () => {

    document.body.classList.toggle("light")

    if (theme === 0){
        BUTTON_IMAGE.src = "./photos/light-theme-icon.png";
        FB_IMAGE.src = "./photos/facebook-icon-dark.png";
        TWITTER_IMAGE.src = "./photos/twitter-icon-dark.png";
        INSTA_IMAGE.src = "./photos/instagram-icon-dark.png";
        GITHUB_IMAGE.src = "./photos/github-icon-dark.png";
        CHANGE_COMPASS_BUTTON_LEFT.src = "./photos/anarchy-icon-yellow.png"
        CHANGE_COMPASS_BUTTON_RIGHT.src = "./photos/anarchy-icon-yellow.png"

        ANARCHY_IMAGE.forEach((icon) => {
            icon.src = "./photos/anarchy-icon-dark.png"
        })
        theme++;
    }
    else {
        BUTTON_IMAGE.src = "./photos/dark-theme-icon.png";
        FB_IMAGE.src = "./photos/facebook-icon-yellow.png";
        TWITTER_IMAGE.src = "./photos/twitter-icon-yellow.png";
        INSTA_IMAGE.src = "./photos/instagram-icon-yellow.png";
        GITHUB_IMAGE.src = "./photos/github-icon-yellow.png";
        CHANGE_COMPASS_BUTTON_LEFT.src = "./photos/anarchy-icon-dark.png"
        CHANGE_COMPASS_BUTTON_RIGHT.src = "./photos/anarchy-icon-dark.png"

        ANARCHY_IMAGE.forEach((icon) => {
            icon.src = "./photos/anarchy-icon-yellow.png"
        })
        theme = 0;
    }
})

/* CHANGE PAGES */

MAIN_CHANGER.addEventListener("click", () => {
    MAIN.forEach((maincontents) => {
        maincontents.classList.add("none")
    })
    GAME.forEach((gamecontents) => {
        gamecontents.classList.remove("none")
    })
    BACKGROUND_SECTION.classList.add("none")
    SNAKE_SECTION.classList.add("none")
})

GAME_CHANGER.addEventListener("click", () => {
    GAME.forEach((gamecontents) => {
        gamecontents.classList.add("none")
    })
    MAIN.forEach((maincontents) => {
        maincontents.classList.remove("none")
    })
    BACKGROUND_SECTION.classList.remove("none")
    SNAKE_SECTION.classList.remove("none")
})

/* FUNCTIONS */

const COMPASS_CHANGER = (indexFirst, indexSecond, indexThird) => {
    COMPASS_BUTTONS[indexFirst].addEventListener("click", () => {

        COMPASS_NAME.innerHTML = NAME_OF_COMPASSES[compassIndex]
        COMPASS_IMAGE.src = "./photos/" + SRC_OF_COMPASS_IMAGES[compassIndex] + ".png"

        if(compassIndex === indexFirst){
            compassIndex = indexSecond
        }
        else{
            compassIndex += indexThird
        }
    })
}

const WEAPON_CHANGE = (index) => {
    if(WEAPON_ACCESS[index] === 1){
        WEAPON_LIST[index].addEventListener("click", () => {
            WEAPON_IMG.forEach((weaponImg) => {
                weaponImg.src = "./photos/" + WEAPON_NAMES[index] + ".png"
            })
            WEAPON_LIST.forEach((weaponList) => {
                weaponList.style.background = ""
            })
            document.querySelector("header.game li:nth-child(" + (index + 1) + ")").style.background = "green"
            for (i = 0; i < 5; i++){
                if(WEAPON_ACCESS[i] === 0){
                    document.querySelector("header.game li:nth-child(" + (i + 1) + ")").style.background = "gray"
                }
            }
            localStorage.setItem("weapon", index)
            currentWeapon = localStorage.getItem("weapon")
        })
    }
}

const LOGO_CHANGE = (button, image, imageName) => {

    button.addEventListener("mouseover", () => {
        image.src = "./photos/" + imageName + "-white.png"
    })
    button.addEventListener("mouseout", () => {
        if(theme === 0){
            image.src = "./photos/" + imageName + "-yellow.png"
        }
        else{
            image.src = "./photos/" + imageName + "-dark.png"
        }
    })
}

COMPASS_CHANGER(0, 1, -1)
COMPASS_CHANGER(1, 0, 1)

LOGO_CHANGE(FB_BUTTON, FB_IMAGE, "facebook-icon")
LOGO_CHANGE(TWITTER_BUTTON, TWITTER_IMAGE, "twitter-icon")
LOGO_CHANGE(INSTA_BUTTON, INSTA_IMAGE, "instagram-icon")
LOGO_CHANGE(GITHUB_BUTTON, GITHUB_IMAGE, "github-icon")

for (i = 0; i < 5; i++) {   
    WEAPON_CHANGE(i)
}

