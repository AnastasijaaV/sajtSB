// Funkcija za otvaranje i zatvaranje menija
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); // Dodajemo ili uklanjamo klasu 'active' za prikazivanje menija
}



// Dodavanje event listenera za svaki link u meniju da zatvori meni nakon klika
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function() {
        const menu = document.querySelector('.menu');
        menu.classList.remove('active'); // Zatvara meni nakon klika na link
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const indicators = document.querySelectorAll('.carousel-indicators .indicator');
    
    let currentIndex = 0;

    // Funkcija za promenu slike
    function updateCarousel() {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;

        // Ažuriranje aktivnog indikatora
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }

    


    // Dugmadi za indikatore
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            updateCarousel();
        });
    });

    // Inicijalno ažuriranje galerije
    updateCarousel();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const onamaSection = document.getElementById('onama');
    
    // Funkcija koja proverava kada je sekcija u vidljivom delu ekrana
    function checkVisibility() {
        const rect = onamaSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            onamaSection.classList.add('visible');
        }
    }
    
    // Pozivamo funkciju odmah nakon učitavanja stranice
    checkVisibility();

    // Dodajemo listener za skrolovanje
    window.addEventListener('scroll', checkVisibility);
});
document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('nav ul li a');  // Svi meni linkovi
    const sections = document.querySelectorAll('section');  // Sve sekcije na stranici

    // Funkcija koja proverava koja sekcija je u vidljivom delu ekrana
    function setActiveLink() {
        let currentSection = null;
        
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                currentSection = section;
            }
        });

        menuLinks.forEach(link => {
            link.classList.remove('active');  // Uklanja "active" klasu sa svih linkova
            if (currentSection && link.getAttribute('href') === '#' + currentSection.id) {
                link.classList.add('active');  // Dodaje "active" klasu na odgovarajući link
            }
        });
    }

    // Pozivamo funkciju odmah pri učitavanju stranice
    setActiveLink();

    // Dodajemo listener za skrolovanje
    window.addEventListener('scroll', setActiveLink);

    // Dodajemo listener za klik na meni link
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Uklanjamo "active" klasu sa svih linkova
            menuLinks.forEach(link => link.classList.remove('active'));
            // Dodajemo "active" klasu na kliknuti link
            this.classList.add('active');
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('homeLink');  // ID linka "Početna"

    // Dodajemo event listener za klik na link "Početna"
    homeLink.addEventListener('click', function(e) {
        e.preventDefault();  // Sprečavamo podrazumevano ponašanje linka

        // Pomeramo stranicu na vrh
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Glatko skrolovanje do vrha
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const productImages = document.querySelectorAll('.product-image');

    // Funkcija koja proverava kada je slika u vidljivom delu ekrana
    function checkVisibility() {
        productImages.forEach(image => {
            const rect = image.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                image.classList.add('visible');  // Dodajemo klasu koja pokreće animaciju
            }
        });
    }

    // Pozivamo funkciju odmah nakon učitavanja stranice
    checkVisibility();

    // Dodajemo listener za skrolovanje
    window.addEventListener('scroll', checkVisibility);
});


document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Sprečava podrazumevano ponašanje

        const targetId = this.getAttribute('href').substring(1); // Dobija ID sekcije
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 100, // Pomera za 100px iznad sekcije
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const welcomeSection = document.getElementById('welcome');
    
    // Funkcija koja proverava kada je sekcija u vidljivom delu ekrana
    function checkVisibility() {
        const rect = welcomeSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            welcomeSection.classList.add('visible');
        }
    }
    
    // Pozivamo funkciju odmah nakon učitavanja stranice
    checkVisibility();

    // Dodajemo listener za skrolovanje
    window.addEventListener('scroll', checkVisibility);
});

document.addEventListener('scroll', function() {
    const welcomeSection = document.getElementById('welcome');
    const scrollPosition = window.scrollY;
    const offset = scrollPosition * 0.7;  // Podesi brzinu pomeranja

    // Menjaj pozadinsku poziciju na osnovu skrolovanja
    welcomeSection.style.backgroundPosition = `center ${offset}px`;
});


// Kada korisnik klikne na "Početna" link, ponovo pokreni animaciju sekcije #welcome
document.getElementById('homeLink').addEventListener('click', function(e) {
    e.preventDefault();  // Sprečava podrazumevano ponašanje (skakanje do sekcije)
    
    const welcomeSection = document.getElementById('welcome');
    
    // Ukloni klasu 'visible' (ako postoji) koja je možda već postavljena
    welcomeSection.classList.remove('visible');
    
    // Kratak timeout kako bi omogućili uklanjanje klasa pre ponovnog dodavanja
    setTimeout(() => {
        // Ponovno dodajemo klasu 'visible' koja pokreće animaciju
        welcomeSection.classList.add('visible');
        
        // Skroluj do sekcije sa glatkim pomeranjem
        window.scrollTo({
            top: welcomeSection.offsetTop - 100, // Pomera za 100px iznad sekcije
            behavior: 'smooth'  // Glatko skrolovanje
        });
    }, 1000);  // Odlaganje od 500ms kako bi efekat bio vidljiviji
});

function showPhoneNumber() {
    const phoneNumber = document.getElementById('phone-number');
    phoneNumber.style.display = 'block';  // Prikazuje broj telefona
}
