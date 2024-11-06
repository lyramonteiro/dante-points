const totalPoints = 2;
const allPoints = 6;

const totalPointsPlaceholders = document.querySelectorAll('.js--points-now');

const allPointsPlaceholder = document.querySelector('.js--total');

totalPointsPlaceholders.forEach((placeholder) => {
    placeholder.textContent = `${totalPoints} pontos`;
});

allPointsPlaceholder.textContent = allPoints;
