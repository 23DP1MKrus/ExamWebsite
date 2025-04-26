let cards = document.querySelectorAll(".slider-card")
let rightArrow = document.getElementById("rightArrow")
let leftArrow = document.getElementById("leftArrow")
let circles = document.querySelectorAll(".circle")
circles[0].classList = "now-circle"


// const hideLeftAnim = [
//     { transform: "translateX(0%)", opacity: 1 },
//     { transform: "translateX(-20%)", opacity: 0 },
// ];
//
// const hideLeftAnimTiming = {
//     duration: 1000,
//     iterations: 1,
// };
rightArrow.addEventListener("click", ev => {
    let shownCard = document.getElementsByClassName("shown")[0]
    let shownCardIndex;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].isEqualNode(shownCard)){
            shownCardIndex = i
        }
    }
    if (shownCardIndex === 3){
        cards[shownCardIndex].classList = "slider-card rightAnim"
        setTimeout(() => {
        cards[shownCardIndex].classList = "slider-card hidden"
        circles[shownCardIndex].classList = "circle"
        shownCardIndex = -1
            cards[shownCardIndex+1].classList = "slider-card leftAnimReversed"
            setTimeout(() => {
                cards[shownCardIndex+1].classList = "slider-card shown"
            },1000)
        circles[shownCardIndex+1].classList = "now-circle"
        },1000)
    }
    else {
        cards[shownCardIndex].classList = "slider-card rightAnim"
        setTimeout(() => {
        cards[shownCardIndex].classList = "slider-card hidden"
        circles[shownCardIndex].classList = "circle"
            cards[shownCardIndex+1].classList = "slider-card leftAnimReversed"
            setTimeout(() => {
                cards[shownCardIndex+1].classList = "slider-card shown"
            },1000)

        circles[shownCardIndex+1].classList = "now-circle"
        },1000)
    }




})
leftArrow.addEventListener("click", ev => {
    let shownCard = document.getElementsByClassName("shown")[0]
    let shownCardIndex;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].isEqualNode(shownCard)){
            shownCardIndex = i
        }
    }
    if (shownCardIndex === 0){
        cards[shownCardIndex].classList = "slider-card leftAnim"
        setTimeout(() => {
            cards[shownCardIndex].classList = "slider-card hidden"
            circles[shownCardIndex].classList = "circle"
            shownCardIndex = 4
            cards[shownCardIndex-1].classList = "slider-card rightAnimReversed"
            setTimeout(() => {
                cards[shownCardIndex-1].classList = "slider-card shown"
            },1000)
            circles[shownCardIndex-1].classList = "now-circle"
        },1000)
    }
    else {
        cards[shownCardIndex].classList = "slider-card leftAnim"
        setTimeout(() => {
            cards[shownCardIndex].classList = "slider-card hidden"
            circles[shownCardIndex].classList = "circle"
            cards[shownCardIndex-1].classList = "slider-card rightAnimReversed"
            setTimeout(() => {
                cards[shownCardIndex-1].classList = "slider-card shown"
            },1000)

            circles[shownCardIndex-1].classList = "now-circle"
        },1000)
    }

})
