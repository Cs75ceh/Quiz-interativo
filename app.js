const form = document.querySelector('.quiz-form')

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
    console.log('Score : ', score)
})
