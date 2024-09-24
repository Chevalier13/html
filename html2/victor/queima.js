function createImpactChart() {
    const ctx = document.getElementById('impactChart').getContext('2d');
    const impactChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Destruição de Habitat', 'Emissões de CO2', 'Qualidade do Ar', 'Saúde Pública'],
            datasets: [{
                label: 'Impactos das Queimadas',
                data: [65, 59, 80, 81],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.querySelector('body');

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const footerForm = document.getElementById('footer-contact-form');
footerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const footerName = document.getElementById('footer-name').value.trim();
    const footerEmail = document.getElementById('footer-email').value.trim();
    const footerMessage = document.getElementById('footer-message').value.trim();

    if (!footerName || !footerEmail || !footerMessage) {
        alert('Preencha todos os campos.');
        return;
    }

    if (!validateEmail(footerEmail)) {
        alert('E-mail inválido.');
        return;
    }

    alert('Mensagem enviada com sucesso!');
    footerForm.reset();
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function closeGallery() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
    }
}

document.querySelectorAll('.close-btn').forEach(button => {
    button.addEventListener('click', closeGallery);
});

document.addEventListener('DOMContentLoaded', createImpactChart);
