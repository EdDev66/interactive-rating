let content = document.querySelector('.main-content')
let feedbackContent = document.querySelector('.review-feedback')
let submitBtn = document.querySelector('.submit')
let btns = document.querySelectorAll('.rating-btn')
let rating = document.querySelector('.rating')
let ratingText = document.querySelector('.select-text')

let ratingScore;

btns.forEach((el) => {
    el.addEventListener('click', () => {
        for(let i=0; i<btns.length; i++) {
            if(btns[i].classList.contains('active-rating')) {
               btns[i].classList.remove('active-rating') 
            }
        }
        el.classList.add('active-rating')
        ratingScore = el.innerText
    })
})

// for (let i = 0; i < btns.length; i++) {
//     const item = btns[i]
//     item.addEventListener('click', () => {
//         console.log(item)
//     })
// }

submitBtn.addEventListener('click', () => {
    if(!ratingScore) {
        window.alert('Please select a score!')
        return;
    }
    content.style.display = 'none'
    ratingText.innerText = `You selected ${ratingScore} out of 5`
    feedbackContent.style.display = 'flex'
})


