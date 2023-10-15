function heart(){
    let heart = document.querySelector('a')
    heart.innerHTML = '<i class="fa-solid fa-heart"></i>'
    heart.style.animationName = 'sizeHRT'
    document.body.style.backgroundColor = "rgb(15, 15, 15)"
    document.querySelector('h3').innerText = 'Kanbrik ktar makatswar 🥺❤'
    document.querySelector('h3').style.color = "white"
    document.querySelector('.hajiz').style.display = "block"
    let audio = new Audio('AL.mp3')
    audio.play()
}