let audio = document.querySelector('#audio');
let delay = 3000;
let random;

audio.volume = 0.5;

// arrow blinks
// let arrows = document.querySelectorAll('.arrow');
// setInterval(() => {
//     for (let arrow of arrows)
//         arrow.classList.toggle('arrow-blink');
// }, delay / 5);

// // click on arrows
// for (let arrow of arrows) {
//     arrow.addEventListener('click', () => {
//         audio.play();
//     });
// }

// click on navbar links
let navbarLinks = document.querySelectorAll('.navbar a');
for (let link of navbarLinks) {
    link.addEventListener('click', () => {
        audio.play();
    });
}

// bit text and number motion on first page load
// let text = document.querySelector('.title');
// let number = document.querySelector('#home-number');
// window.addEventListener("load", () => {
//     text.classList.add('move-x');
//     number.classList.add('move-y');
// });

// random delay for fonts
// let html = document.querySelector('.html');
// let css = document.querySelector('.css');
// let sass = document.querySelector('.sass');
// let javascript = document.querySelector('.javascript');
// let jquery = document.querySelector('.jquery');
// let react = document.querySelector('.react');
// let skills = [html, css, sass, javascript, jquery, react];

// const blink = skill => {
//     setInterval(() => {
//         random = Math.floor(Math.random() * 10);
//         skill.classList.toggle('bg-skill-blink');
//     }, Math.floor(delay / random));
// }

// for (let skill of skills)
//     blink(skill);

// add + for li elements
// let listItems = document.querySelectorAll('.skills-div li');
// for (let item of listItems) {
//     item.innerHTML = '+ ' + item.innerHTML;
// }

// add + for li titles
// let listTitles = document.querySelectorAll('.skills-div b');
// for (let item of listTitles) {
//     item.innerHTML = '+ ' + item.innerHTML;
// }

// welcome different languages switch
let welcome = document.querySelector('.welcome');
// let languages = ['Welcome', 'Bienvenue', 'Sveiki atvykę', 'Velkominn', '어서 오십시오', 'ようこそ', 'Willkommen'];
let languages = ['Welcome', 'Bienvenue', 'Sveiki atvykę', 'Velkominn', 'Willkommen'];
let i = 0;
setInterval(() => {
    welcome.innerHTML = languages[i];
    welcome.classList.add('fade');

    // if (languages[i] == '어서 오십시오')
    //     welcome.classList.add('korean');
    // else if (welcome.classList.contains('korean'))
    //     welcome.classList.remove('korean');

    // if (languages[i] == 'ようこそ')
    //     welcome.classList.add('japanese');
    // else if (welcome.classList.contains('japanese'))
    //     welcome.classList.remove('japanese');

    i++;

    if (i == languages.length)
        i = 0;
    setTimeout(() => {
        welcome.classList.remove('fade');
    }, delay / 2);
}, delay);

// navlogo hover
let navlogo = document.querySelector('.navlogo');
let hexSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
let hexColor = '';
let randomHexNumber;

navlogo.addEventListener('mouseover', () => {
    for (let i = 0; i < 6; i++) {
        randomHexNumber = Math.floor(Math.random() * 16); // random integer from 0 to 15
        hexColor = hexColor.concat(hexSymbols[randomHexNumber]);
    }
    // console.log(hexColor);
    navlogo.style.backgroundColor = '#' + hexColor;
    hexColor = '';
});

// on scroll
let navbar = document.querySelector('.navbar');
let homeContent = document.querySelector('.home-content');
window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y >= 100) {
        navbar.classList.add('navbar-scroll');
        homeContent.style.display = 'none';
    } else {
        navbar.classList.remove('navbar-scroll');
        homeContent.style.display = 'block';
    }
});

// mouseover and mouseout on list links
let listLinks = document.querySelectorAll('.list-link');
let fa = '<span class="lnr lnr-chevron-right"></span>';
let falen = fa.length;
for (let link of listLinks) {
    link.addEventListener('mouseover', () => {
        // if (link.innerHTML[0] != fa[0]) // for rocket logo - prev version
        link.innerHTML = fa + link.innerHTML;
        audio.play();
    });
    link.addEventListener('mouseout', () => {
        link.innerHTML = link.innerHTML.slice(falen);
    });
}

// tiles blink
// let tiles = document.querySelectorAll('.single-tile');
// const singleTileBlink = singleTile => {
//     setTimeout(() => {
//         singleTile.classList.toggle('single-tile-blink');
//     }, 100);
// }

// for (let tile of tiles) {
//     singleTileBlink(tile);
//     console.log('for loop');
// }

// projects slider
// let active = 0; // from prev version
let active;
let projects = document.querySelectorAll('.single-project');
let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');
let tiles = document.querySelectorAll('.single-tile');

// function for finding active project and tile index
const findActiveProjectIndex = projects => {
    let index;
    for (let project of projects) {
        if (project.classList.contains('active')) {
            index = project.getAttribute('id');
            index = index.substr(8); // removing the string 'project-'
            index = parseInt(index);
            index--; // indexation!!
            return index;
        }
    }
}

// left arrow click
leftArrow.addEventListener('click', () => {
    // finding active project and tile index
    active = findActiveProjectIndex(projects);

    projects[active].classList.remove('active');
    projects[active].classList.add('hidden');
    tiles[active].classList.remove('single-tile-active');
    if (active - 1 == -1)
        active = projects.length - 1;
    else
        active--;
    projects[active].classList.add('active');
    projects[active].classList.remove('hidden');
    tiles[active].classList.add('single-tile-active');

    audio.play();
});

// right arrow click
rightArrow.addEventListener('click', () => {
    // finding active project and tile index
    active = findActiveProjectIndex(projects);

    projects[active].classList.remove('active');
    projects[active].classList.add('hidden');
    tiles[active].classList.remove('single-tile-active');
    if (active + 1 == projects.length)
        active = 0;
    else
        active++;
    projects[active].classList.add('active');
    projects[active].classList.remove('hidden');
    tiles[active].classList.add('single-tile-active');

    audio.play();
});

// tiles click and project activation
let projectToActivate;
let projectId;
let tileId;
for (let tile of tiles) {
    tile.addEventListener('click', () => {
        // project deactivation, hiding and breaking a loop
        for (let project of projects) {
            if (project.classList.contains('active')) {
                project.classList.remove('active');
                project.classList.add('hidden');
                break;
            }
        }

        // single tile deactivation
        for (let tile of tiles) {
            if (tile.classList.contains('single-tile-active')) {
                tile.classList.remove('single-tile-active');
                break;
            }
        }

        // single tile activation
        tile.classList.add('single-tile-active');

        // project activation
        tileId = tile.getAttribute('id');
        tileId = tileId.substr(5); // removing the string 'tile-'
        projectId = 'project-' + tileId;
        projectToActivate = document.getElementById(projectId);
        projectToActivate.classList.add('active');
        projectToActivate.classList.remove('hidden');

        audio.play();
    });
}

// phone show
let phone = document.querySelector('#phone');
phone.addEventListener('mouseover', () => {
    phone.innerHTML = '593 95 17 33';
});

phone.addEventListener('mouseout', () => {
    phone.innerHTML = 'call me';
});

// submit prevent default
let submit = document.querySelector('#submit');
submit.addEventListener('click', e => {
    e.preventDefault();
});