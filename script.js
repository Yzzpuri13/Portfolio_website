function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

document.getElementById('arrowToProjects').addEventListener('click', function() {
    document.getElementById('project').scrollIntoView({ behavior: 'smooth' });
});
