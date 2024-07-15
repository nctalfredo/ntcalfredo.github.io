
    document.addEventListener("DOMContentLoaded", function() {
        const courses = [
            {
                title: "Curso de JavaScript",
                description: "Aprende JavaScript desde cero.",
                price: "$49.99",
            },
            {
                title: "Curso de HTML y CSS",
                description: "Domina el desarrollo web front-end.",
                price: "$39.99",
            },
            {
                title: "Curso de Java",
                description: "Crea aplicaciones web modernas con React.",
                price: "$59.99",
            },
            {
                title: "Curso de Python",
                description: "Crea aplicaciones web modernas con React.",
                price: "$69.99",
            },
            {
                title: "Curso de C++",
                description: "Crea aplicaciones web modernas con React.",
                price: "$29.99",
            },
            {
                title: "Curso de Base de Datos",
                description: "Crea aplicaciones web modernas con React.",
                price: "$49.99",
            }
        ];

        const courseList = document.querySelector('.course-list');

        courses.forEach(course => {
            const courseItem = document.createElement('div');
            courseItem.className = 'course-item';

            courseItem.innerHTML = `
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <p><strong>Precio: ${course.price}</strong></p>
                <button>Comprar</button>
            `;

            courseList.appendChild(courseItem);
        });

        document.querySelectorAll('nav ul li a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetID = this.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetID);
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    });

