const form = document.querySelector('.quiz-form')
const button = document.querySelector('button')
const h3 = document.createElement('h3');

const correctAnswers = [4, 1, 4, 4, 1,2]

form.addEventListener('submit', event => {
    event.preventDefault()
    userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
        form.inputQuestion6.value
    ]
    
    let score = 0
    const increment = 100 / 6 
    userAnswers.forEach((userAnswer, index) => {
        
        if (Number(userAnswer) === correctAnswers[index]) {
            score = score + increment 
        }
    });

    if (document.querySelector('h3')) {
        h3.remove()
    }
    
    const containerMessage = button.insertAdjacentElement('afterend', h3)
    h3.setAttribute('class','my-5 text-warning text-center')
    containerMessage.textContent = `Score : ${score}`
})
