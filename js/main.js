// Додаємо обробники подій для всіх кнопок like та comment
document.addEventListener('DOMContentLoaded', function() {
    // Знаходимо всі кнопки лайків
    const likeButtons = document.querySelectorAll('.like-button');
    likeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Знаходимо елемент лічильника лайків
            const likeCount = this.parentElement.querySelector('.like-count');
            // Збільшуємо значення лічильника
            likeCount.textContent = parseInt(likeCount.textContent) + 1;
        });
    });

    // Знаходимо всі кнопки коментарів
    const commentButtons = document.querySelectorAll('.comment-button');
    commentButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Знаходимо елемент лічильника коментарів
            const commentCount = this.parentElement.querySelector('.comment-count');
            // Збільшуємо значення лічильника
            commentCount.textContent = parseInt(commentCount.textContent) + 1;

            // Показуємо діалогове вікно для введення коментаря
            const comment = prompt("Введіть ваш коментар:");
            if (comment) {
                // Додаємо коментар до відповідного місця (можна зберігати коментарі десь у структурі HTML або в базі даних)
                console.log(`Новий коментар для ${this.closest('.visit-item').dataset.place}: ${comment}`);
            }
        });
    });
});
const videoContainer = document.querySelector('.video-container');
const video = document.getElementById('myVideo');
const playButton = document.querySelector('.play-button');

videoContainer.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        videoContainer.classList.remove('paused');
    } else {
        video.pause();
        videoContainer.classList.add('paused');
    }
});

video.addEventListener('play', () => {
    videoContainer.classList.remove('paused');
});

video.addEventListener('pause', () => {
    videoContainer.classList.add('paused');
});