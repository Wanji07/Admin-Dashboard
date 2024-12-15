const toggleBtn = document.getElementById('light-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const navigation = document.getElementById('nav');
const section = document.getElementById('section');
const aside = document.getElementById('aside');
const announcement = document.querySelectorAll('.content-announcement');
const contentTrending = document.querySelectorAll('.content-trending');
const projectCard = document.querySelectorAll('.project-card');  
const favBtn = document.getElementById('fav-btn');
const favIcon = document.getElementById('fav-icon');
const missingCard = document.querySelectorAll('#missing-project-card');

let toggled = false;

toggleBtn.addEventListener('click', () => {
    toggled = !toggled;
    if (toggled == true) {
        document.body.style.color = 'black';
        document.body.style.backgroundColor = 'rgb(238, 238, 238)';
        navigation.classList.add('light-mode-nav');
        section.classList.add('light-mode-section');
        aside.classList.add('light-mode-aside');
        announcement.forEach(announcement => announcement.classList.add('light-mode-card'));
        contentTrending.forEach(trend => trend.classList.add('light-mode-card'));
        projectCard.forEach(card => card.classList.add('light-mode-card'));
        missingCard.forEach(card => card.classList.add('light-mode-missing-card'));
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    } else {
        navigation.classList.remove('light-mode-nav');
        section.classList.remove('light-mode-section');
        aside.classList.remove('light-mode-aside');
        announcement.forEach(announcement => announcement.classList.remove('light-mode-card'));
        contentTrending.forEach(trend => trend.classList.remove('light-mode-card'));
        projectCard.forEach(card => card.classList.remove('light-mode-card'));
        missingCard.classList.remove('light-mode-missing-card');
        toggleIcon.classList.add('fa-sun');
        toggleIcon.classList.remove('fa-moon');
    }
});