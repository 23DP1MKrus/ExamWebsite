let cards = document.querySelectorAll(".slider-card")
let rightArrow = document.getElementById("rightArrow")
let leftArrow = document.getElementById("leftArrow")


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
        shownCardIndex = -1
        cards[shownCardIndex+1].classList = "slider-card shown"
    }
    else {
        cards[shownCardIndex].classList = "slider-card hidden"
        cards[shownCardIndex+1].classList = "slider-card shown"
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
        shownCardIndex = 4
        cards[shownCardIndex-1].classList = "slider-card shown"
    }
    else {
        cards[shownCardIndex].classList = "slider-card hidden"
        cards[shownCardIndex-1].classList = "slider-card shown"
    }

})
