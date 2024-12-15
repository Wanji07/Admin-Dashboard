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

let toggled = false;

toggleBtn.addEventListener('click', () => {
    toggled = !toggled;
    if (toggled == true) {
        document.body.style.color = 'black';
        navigation.classList.add('light-mode-nav');
        section.classList.add('light-mode-section');
        aside.classList.add('light-mode-aside');
        announcement.forEach(announcement => announcement.classList.add('light-mode-card'));
        contentTrending.forEach(trend => trend.classList.add('light-mode-card'));
        projectCard.forEach(card => card.classList.add('light-mode-card'));
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    } else {
        navigation.classList.remove('light-mode-nav');
        section.classList.remove('light-mode-section');
        aside.classList.remove('light-mode-aside');
        announcement.forEach(announcement => announcement.classList.remove('light-mode-card'));
        contentTrending.forEach(trend => trend.classList.remove('light-mode-card'));
        projectCard.forEach(card => card.classList.remove('light-mode-card'));
        toggleIcon.classList.add('fa-sun');
        toggleIcon.classList.remove('fa-moon');
    }
});