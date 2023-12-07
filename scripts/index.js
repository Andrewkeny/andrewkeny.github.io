

const navMenu = document.querySelector('.nav-menu')
const mobImg = document.querySelector('.menu-icon-btn img')
const btnMenu = document.querySelector('.menu-icon-btn').addEventListener('click',() => {  
    if (navMenu.style.display === 'flex'){
        navMenu.style.display = 'none';
        navMenu.classList.remove('nav-menu-mobile');
        mobImg.classList.add('rotate-in');
        mobImg.src = '../img/icone-menu.png';
        mobImg.addEventListener('animationend', () => {
            mobImg.classList.remove('rotate-in');
        });
    }
    else {
        navMenu.style.display = 'flex';
        navMenu.classList.add('nav-menu-mobile');
        mobImg.classList.add('rotate-out');
        mobImg.src = '../img/icone-menu-close.png';
        mobImg.addEventListener('animationend', () => {
            mobImg.classList.remove('rotate-out');
        });
       
    }
   
})
window.addEventListener('resize', function() {
    if (window.innerWidth <= 1100) {
    
        navMenu.style.display = 'none';
        const navLinks = document.querySelectorAll('.nav-menu a');

            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('nav-menu-mobile')) {
                        navMenu.style.display = 'none';
                        navMenu.classList.remove('nav-menu-mobile');
                    }
                });
            });
        // Check if the menu is open and change the icon
        if (navMenu.classList.contains('nav-menu-mobile')) {
            document.querySelector('.menu-icon-btn img').src = '../img/icone-menu.png';
            
        }

    } else {
        navMenu.style.display = 'flex';
        navMenu.classList.remove('nav-menu-mobile');
    }
});
//evento de fechar o menu mobile quando clica em alguma tag a



const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.attributeName === "class") {
            const currentClassState = mutation.target.classList;
            if (!currentClassState.contains('nav-menu-mobile')) {
                
                
                document.querySelector('.menu-icon-btn img').src = '../img/icone-menu.png'
            }
        }
    });
});

observer.observe(navMenu, { attributes: true });


//personagem correndo





//Dark Mode
const main = document.querySelector('body')
const root = document.querySelector(':root')
const btnDarkMode = document.querySelector('.btn-dark-mode')

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


document.querySelector('.btn-dark-mode').addEventListener('click',() =>{
    const imgDarkMode = document.getElementById('sol')
    if(main.dataset.theme === 'dark'){
            btnDarkMode.disabled = true
            imgDarkMode.style.filter = "grayscale(100%)"
            imgDarkMode.style.animation = 'rotateScale 900ms ease'
            imgDarkMode.src = "../img/icone-lua.png"
            main.dataset.theme = 'light'
            
           
            setTimeout(function(){
                btnDarkMode.disabled = false
                imgDarkMode.style.animation = '';
            }, 700);
        
           
        
    }
    else{
            btnDarkMode.disabled = true
            imgDarkMode.style.animation = 'rotateScale 900ms ease'
            imgDarkMode.style.removeProperty('filter')
            imgDarkMode.src = "../img/icone-sol.png"
            main.dataset.theme = 'dark'
            
            
            setTimeout(function(){
                btnDarkMode.disabled = false
                imgDarkMode.style.animation = '';
                
            }, 700);
        
        
       
    }
})

//Efeito de digitar e apagar palavra
let texto = 'Desenvolvedor front-end';
let i = 0;
let direcao = 1;

function efeitoDigitar() {
  if (direcao == 1) {
    document.querySelector('.txt-efect').style.borderRight = 'solid 3px'; // Adiciona a borda à direita de volta
    document.querySelector('.txt-efect').innerHTML = texto.substring(0, i + 1);
    i++;
    if (i > texto.length) {
      direcao = -1;
      setTimeout(efeitoDigitar, 2000); // Pausa antes de começar a apagar
    } else {
      setTimeout(efeitoDigitar, 150); // Velocidade de digitação
    }
  } else if (direcao == -1) {
    document.querySelector('.txt-efect').style.borderRight = 'solid 3px'; // Adiciona a borda à direita de volta
    document.querySelector('.txt-efect').innerHTML = texto.substring(0, i) + ' ';
    i--;
    if (i < 0) {
      direcao = 1;
      setTimeout(efeitoDigitar, 1500); // Pausa antes de começar a digitar novamente
    } else {
      setTimeout(efeitoDigitar, 80); // Velocidade de apagamento
    }
  }
}

efeitoDigitar();
//janela aparecendo pela lateral
window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        var rect = section.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.top > -section.offsetHeight) {
            section.classList.add('show');
        }
    });
});

window.addEventListener('resize', adjustAnimation);

function adjustAnimation() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var cssAnimation = document.styleSheets[0].cssRules[0]; // Ajuste o índice conforme necessário
    cssAnimation.deleteRule('0%');
    cssAnimation.deleteRule('100%');
    cssAnimation.appendRule(`0% { transform: translateX(${-0.1 * width}px); }`);
    cssAnimation.appendRule(`100% { transform: translateX(${width}px); }`);
}
