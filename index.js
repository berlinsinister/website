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
let navbarLinks = document.querySelectorAll('.navbar-link');
let hoverDelay = 30;
for (let link of navbarLinks) {
    link.addEventListener('click', () => {
        audio.play();
    });
    link.addEventListener('mouseover', () => {
        link.classList.add('navbar-link-cursor-hover-1');
        setTimeout(() => {
            link.classList.remove('navbar-link-cursor-hover-1');
            link.classList.add('navbar-link-cursor-hover-2');
        }, hoverDelay);
        setTimeout(() => {
            link.classList.remove('navbar-link-cursor-hover-2');
            link.classList.add('navbar-link-cursor-hover-3');
        }, hoverDelay * 2);
        // setTimeout(() => {
        //     link.classList.remove('navbar-link-cursor-hover-3');
        //     link.classList.add('navbar-link-cursor-hover-4');
        // }, hoverDelay * 3);
        setTimeout(() => {
            link.classList.remove('navbar-link-cursor-hover-3');
            link.classList.add('navbar-link-cursor-hover-1');
        }, hoverDelay * 3);
    });
    link.addEventListener('mouseout', () => {
        link.classList.remove('navbar-link-cursor-hover-1');
    });
}

// show languages on click
let languagesDropdown = document.querySelector('.languages-dropdown');
let languagesContent = document.querySelector('.languages-content');
let activeLanguageArrow = document.querySelector('.active-language .lnr');
languagesDropdown.addEventListener('click', () => {
    languagesContent.classList.toggle('languages-show');
    languagesContent.classList.toggle('fade');

    if (activeLanguageArrow.classList.contains('rotate-180')) {
        activeLanguageArrow.classList.remove('rotate-180');
        activeLanguageArrow.classList.add('rotate-0');
    } else {
        activeLanguageArrow.classList.add('rotate-180');
        activeLanguageArrow.classList.remove('rotate-0');
    }

    audio.play();
});

// document.addEventListener('click', e => {
//     if (languagesContent.classList.contains('languages-show'))
//         languagesContent.classList.remove('languages-show');
//     console.log('document click');
//     e.preventDefault();
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
setTimeout(() => {
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
}, delay / 1.5);

// navlogo hover
let navlogo = document.querySelector('.navlogo');
let profession = document.querySelector('.profession');
let homeBg = document.querySelector('.home-bg');
let hexSymbols = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'a', 'b', 'c', 'd', 'e', 'f'];
let hexColor = '';
let randomHexNumber;

// navlogo.addEventListener('mouseover', () => {
//     for (let i = 0; i < 6; i++) {
//         randomHexNumber = Math.floor(Math.random() * 16); // random integer from 0 to 15
//         hexColor = hexColor.concat(hexSymbols[randomHexNumber]);
//     }
//     // console.log(hexColor);
//     navlogo.style.backgroundColor = '#' + hexColor;
//     // profession.style.backgroundColor = '#' + hexColor;
//     hexColor = '';

//     // homeBg.style.filter = 'grayscale(1)';
// });

// on scroll
let navbar = document.querySelector('.navbar');
let homeContent = document.querySelector('.home-content');
let searchBar = document.querySelector('.search-bar');
let search = document.querySelector('.search');
window.addEventListener("scroll", () => {
    let y = window.scrollY;
    if (y >= 100) {
        navbar.classList.add('navbar-scroll');
        navlogo.classList.add('navlogo-scroll');
        homeContent.style.display = 'none';
        searchBar.style.display = 'none';
        search.style.display = 'none';
        languagesDropdown.style.display = 'none';
    } else {
        navbar.classList.remove('navbar-scroll');
        navlogo.classList.remove('navlogo-scroll');
        homeContent.style.display = 'block';
        searchBar.style.display = 'inline-block';
        search.style.display = 'inline-block';
        languagesDropdown.style.display = 'inline-block';
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

// fa icons color change on focus
let inputs = Array.prototype.slice.call(document.querySelectorAll('.contact-form input')); // converts node list into array, requires querySelectorAll
let textArea = document.querySelector('.contact-form textarea');
inputs = inputs.concat(textArea);
let lightgray = '#555555';
for (let input of inputs) {
    let inputSpan = input.nextElementSibling;
    input.addEventListener('focus', () => {
        inputSpan.style.color = 'white';
    });
    input.addEventListener('blur', () => {
        inputSpan.style.color = lightgray;
    });
}

// phone show
let phoneLink = document.querySelector('#phone-link');
let phone = document.querySelector('.phone');
phoneLink.addEventListener('mouseover', () => {
    // phoneLink.innerHTML = '593 95 17 33';
    phone.classList.add('phone-show');
    phone.classList.add('fade');
});

phoneLink.addEventListener('mouseout', () => {
    // phoneLink.innerHTML = 'call me';
    phone.classList.remove('phone-show');
});

// submit prevent default
// let submit = document.querySelector('#submit');
// submit.addEventListener('click', e => {
//     e.preventDefault();
// });

// is in viewport
const isInViewport = elem => {
    let bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

let skillTypes = document.querySelectorAll('.skill-type');
console.log(skillTypes);
for (let skill of skillTypes) {
    window.addEventListener("scroll", () => {
        if (isInViewport(skill)) {
            skill.classList.add('skill-type-move-x');
        } else {
            skill.classList.remove('skill-type-move-x');
        }
    });
}