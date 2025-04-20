let cards = document.querySelectorAll(".slider-card")
let rightArrow = document.getElementById("rightArrow")
let leftArrow = document.getElementById("leftArrow")
let circles = document.querySelectorAll(".circle")
circles[0].classList = "now-circle"
rightArrow.addEventListener("click", ev => {
    let shownCard = document.getElementsByClassName("shown")[0]
    let shownCardIndex;
    for (let i = 0; i < cards.length; i++) {
        if (cards[i].isEqualNode(shownCard)){
            shownCardIndex = i
        }
    }
    if (shownCardIndex === 3){
        cards[shownCardIndex].classList = "slider-card hidden"
        circles[shownCardIndex].classList = "circle"
        shownCardIndex = -1
        cards[shownCardIndex+1].classList = "slider-card shown"
        circles[shownCardIndex+1].classList = "now-circle"
    }
    else {
        cards[shownCardIndex].classList = "slider-card hidden"
        circles[shownCardIndex].classList = "circle"
        cards[shownCardIndex+1].classList = "slider-card shown"
        circles[shownCardIndex+1].classList = "now-circle"
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
        cards[shownCardIndex].classList = "slider-card hidden"
        circles[shownCardIndex].classList = "circle"
        shownCardIndex = 4
        cards[shownCardIndex-1].classList = "slider-card shown"
        circles[shownCardIndex-1].classList = "now-circle"
    }
    else {
        cards[shownCardIndex].classList = "slider-card hidden"
        circles[shownCardIndex].classList = "circle"
        cards[shownCardIndex-1].classList = "slider-card shown"
        circles[shownCardIndex-1].classList = "now-circle"
    }

})
