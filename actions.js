<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mohammed Siddiq - Portfolio</title>
    <meta name="description" content="Portfolio of Mohammed Siddiq, an aspiring AI-ML/Data Scientist Developer">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&family=Raleway:wght@700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#">Mohammed Siddiq</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#welcome-section">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="open_source.html">Open-source</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                    <li class="nav-item">
                        <a class="btn btn-custom" href="Resume.pdf" download>Download Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section id="welcome-section" class="py-5 text-center d-flex align-items-center min-vh-100">
        <div class="container">
            <h1 class="display-2 mb-4" data-aos="fade-up">Hey, I'm <span class="fw-bold">Sidd</span></h1>
            <p class="lead mb-5" data-aos="fade-up" data-aos-delay="100">An aspiring AI-ML/Data Scientist Developer</p>
            <a href="#projects" class="btn btn-lg btn-custom" data-aos="fade-up" data-aos-delay="200">View My Work</a>
        </div>
    </section>

    <section id="projects" class="py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-5 display-4" data-aos="fade-up">My Projects</h2>
            <div class="swiper-container" data-aos="fade-up" data-aos-delay="100">
                <div class="swiper-wrapper">
                    <!-- Project cards here -->
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
            </div>
            <div class="text-center mt-5">
                <a href="https://github.com/MohdSiddiq12?tab=repositories" class="btn btn-lg btn-custom" target="_blank" data-aos="fade-up">
                    Show All Projects <i class="fas fa-chevron-right ms-2"></i>
                </a>
            </div>
            <div class="text-center mt-3">
                <a href="open_source.html" class="btn btn-lg btn-custom" data-aos="fade-up">
                    Show Open-Source Projects <i class="fas fa-chevron-right ms-2"></i>
                </a>
            </div>
        </div>
    </section>

    <section id="contact" class="py-5">
        <div class="container">
            <h2 class="text-center mb-5" data-aos="fade-up">Let's Connect</h2>
            <div class="row justify-content-center g-4">
                <div class="col-6 col-md-2" data-aos="fade-up" data-aos-delay="100">
                    <a href="https://www.linkedin.com/in/mohd-siddiq-3516471b0/" class="btn btn-outline-light btn-block" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a>
                </div>
                <div class="col-6 col-md-2" data-aos="fade-up" data-aos-delay="200">
                    <a href="https://github.com/MohdSiddiq12" class="btn btn-outline-light btn-block" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                </div>
                <div class="col-6 col-md-2" data-aos="fade-up" data-aos-delay="300">
                    <a href="https://twitter.com/@MohdSiddiq_12" class="btn btn-outline-light btn-block" target="_blank"><i class="fab fa-twitter"></i> Twitter</a>
                </div>
                <div class="col-6 col-md-2" data-aos="fade-up" data-aos-delay="400">
                    <a href="https://www.instagram.com/iam_sidddd/?hl=en" class="btn btn-outline-light btn-block" target="_blank"><i class="fab fa-instagram"></i> Instagram</a>
                </div>
                <div class="col-6 col-md-2" data-aos="fade-up" data-aos-delay="500">
                    <a href="mailto:MohammedSiddiq1235@gmail.com" class="btn btn-outline-light btn-block"><i class="fas fa-at"></i> Email</a>
                </div>
            </div>
        </div>
    </section>

    <footer class="bg-dark text-light text-center py-3">
        <p class="mb-0">&copy; 2023 Mohammed Siddiq. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js"></script>
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    <script>
        AOS.init({
            duration: 1000,
            once: true
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                },
                1024: {
                    slidesPerView: 3,
                },
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        });
    </script>
</body>
</html>