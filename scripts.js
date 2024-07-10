document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.getElementById('toggleMenu');
    const content = document.querySelector('.content');
    const desktopView = document.getElementById('desktopView');
    const mobileView = document.getElementById('mobileView');
    const iframe = document.getElementById('previewFrame');
    const selectedTemplate = document.getElementById('selectedTemplate');
    const templateList = document.getElementById('templateList');
    const prevPageButton = document.getElementById('prevPage');
    const nextPageButton = document.getElementById('nextPage');

    toggleMenu.addEventListener('click', function() {
        content.classList.toggle('show-menu');
    });

    desktopView.addEventListener('click', function() {
        iframe.style.width = '100%';
        desktopView.classList.add('active');
        mobileView.classList.remove('active');
    });

    mobileView.addEventListener('click', function() {
        iframe.style.width = '375px'; // Common mobile width
        mobileView.classList.add('active');
        desktopView.classList.remove('active');
    });

const templates = [
    { id: 1, name: '3-col-portfolio', url: 'https://learning-zone.github.io/website-templates/3-col-portfolio/' },
    { id: 2, name: 'above-edu', url: 'https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/' },
    { id: 3, name: 'add-life', url: 'https://learning-zone.github.io/website-templates/add-life-health-fitness-free-bootstrap-html5-template/' },
    { id: 4, name: 'aerosky', url: 'https://learning-zone.github.io/website-templates/aerosky-real-estate-html-responsive-website-template/' },
    { id: 5, name: 'agile-agency', url: 'https://learning-zone.github.io/website-templates/agile-agency-free-bootstrap-web-template/' },
    { id: 6, name: 'amaze-photo', url: 'https://learning-zone.github.io/website-templates/amaze-photography-bootstrap-html5-template/' },
    { id: 7, name: 'aroma-beauty', url: 'https://learning-zone.github.io/website-templates/aroma-beauty-and-spa-responsive-bootstrap-template/' },
    { id: 8, name: 'avenger', url: 'https://learning-zone.github.io/website-templates/avenger-multi-purpose-responsive-html5-bootstrap-template/' },
    { id: 9, name: 'b-school', url: 'https://learning-zone.github.io/website-templates/b-school-free-education-html5-website-template/' },
    { id: 10, name: 'basic-free', url: 'https://learning-zone.github.io/website-templates/basic-free-html5-template-for-multi-purpose/' },
    { id: 11, name: 'beauty-salon', url: 'https://learning-zone.github.io/website-templates/beauty-salon-bootstrap-html5-template/' },
    { id: 12, name: 'bestro-restaurant', url: 'https://learning-zone.github.io/website-templates/bestro-restaurant-bootstrap-html5-template/' },
    { id: 13, name: 'businessline', url: 'https://learning-zone.github.io/website-templates/businessline-corporate-portfolio-bootstrap-responsive-web-template/' },
    { id: 14, name: 'cloud-hosting', url: 'https://learning-zone.github.io/website-templates/cloud-hosting-free-bootstrap-responsive-website-template/' },
    { id: 15, name: 'coffee-shop', url: 'https://learning-zone.github.io/website-templates/coffee-shop-free-html5-template/' },
    { id: 16, name: 'creative-bee', url: 'https://learning-zone.github.io/website-templates/creative-bee-corporate-free-html5-web-template/' },
    { id: 17, name: 'creative-free', url: 'https://learning-zone.github.io/website-templates/creative-free-responsive-html5-business-template/' },
    { id: 18, name: 'delight-multi', url: 'https://learning-zone.github.io/website-templates/delight-multi-purpose-free-html5-website-template/' },
    { id: 19, name: 'delite-music', url: 'https://learning-zone.github.io/website-templates/delite-music-html5-bootstrap-responsive-web-template/' },
    { id: 20, name: 'eat-restaurant', url: 'https://learning-zone.github.io/website-templates/eat-restaurant-bootstrap-html5-template/' },
    { id: 21, name: 'elegant-free', url: 'https://learning-zone.github.io/website-templates/elegant-free-multi-purpose-bootstrap-responsive-template/' },
    { id: 22, name: 'enlive-corporate', url: 'https://learning-zone.github.io/website-templates/enlive-corporate-free-html5-bootstrap-web-template/' },
    { id: 23, name: 'everest-corporate', url: 'https://learning-zone.github.io/website-templates/everest-corporate-business-bootstrap-template/' },
    { id: 24, name: 'fit-healthy', url: 'https://learning-zone.github.io/website-templates/fit-healthy-fitness-and-gym-html5-bootstrap-theme/' },
    { id: 25, name: 'fitness-zone', url: 'https://learning-zone.github.io/website-templates/fitness-zone-html5-bootstrap-responsive-web-template/' },
    { id: 26, name: 'foodz-mobile', url: 'https://learning-zone.github.io/website-templates/foodz-mobile-app-bootstrap-landing-page/' },
    { id: 27, name: 'frames-corporate', url: 'https://learning-zone.github.io/website-templates/frames-corporate-bootstrap-free-html5-template/' },
    { id: 28, name: 'free-bootstrap-admin', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-admin-template-dream/' },
    { id: 29, name: 'free-bootstrap-real', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-real-estate-my-home/' },
    { id: 30, name: 'free-bootstrap-restaurant', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-restaurant-website-treehut/' },
    { id: 31, name: 'free-bootstrap-rockline', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-rockline-business/' },
    { id: 32, name: 'free-bootstrap-ladder', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-for-multi-purpose-ladder/' },
    { id: 33, name: 'free-portfolio', url: 'https://learning-zone.github.io/website-templates/free-portfolio-html5-responsive-website-sam/' },
    { id: 34, name: 'getdoctor-free', url: 'https://learning-zone.github.io/website-templates/getdoctor-free-bootstrap-responsive-website-template/' },
    { id: 35, name: 'golden-hotel', url: 'https://learning-zone.github.io/website-templates/golden-hotel-free-html5-bootstrap-web-template/' },
    { id: 36, name: 'grand-free', url: 'https://learning-zone.github.io/website-templates/grand-free-bootstrap-responsive-website-template/' },
    { id: 37, name: 'html5-coming', url: 'https://learning-zone.github.io/website-templates/html5-responsive-coming-soon-page/' },
    { id: 38, name: 'hybrid-bootstrap-admin', url: 'https://learning-zone.github.io/website-templates/hybrid-bootstrap-admin-template/' },
    { id: 39, name: 'iam-html5', url: 'https://learning-zone.github.io/website-templates/iam-html5-responsive-portfolio-resume-template/' },
    { id: 40, name: 'icon-real', url: 'https://learning-zone.github.io/website-templates/icon-real-estate-developers-free-responsive-html-template/' },
    { id: 41, name: 'ideal-interior', url: 'https://learning-zone.github.io/website-templates/ideal-interior-design-free-bootstrap-website-template/' },
    { id: 42, name: 'indus-free', url: 'https://learning-zone.github.io/website-templates/indus-free-coming-soon-bootstrap-responsive-template/' },
    { id: 43, name: 'insight-free', url: 'https://learning-zone.github.io/website-templates/insight-free-bootstrap-html5-admin-template/' },
    { id: 44, name: 'john-bootstrap', url: 'https://learning-zone.github.io/website-templates/john-bootstrap-one-page-html5-free-resume-template/' },
    { id: 45, name: 'johndoe-portfolio', url: 'https://learning-zone.github.io/website-templates/johndoe-portfolio-resume-bootstrap-template/' },
    { id: 46, name: 'light-coming', url: 'https://learning-zone.github.io/website-templates/light-coming-soon-html-responsive-template/' },
    { id: 47, name: 'lovely-wedding', url: 'https://learning-zone.github.io/website-templates/lovely-wedding-bootstrap-free-website-template/' },
    { id: 48, name: 'matrix-free', url: 'https://learning-zone.github.io/website-templates/matrix-free-bootstrap-admin-template/' },
    { id: 49, name: 'me-resume', url: 'https://learning-zone.github.io/website-templates/me-resume-personal-portfolio-responsive-template/' },
    { id: 50, name: 'mentor-free', url: 'https://learning-zone.github.io/website-templates/mentor-free-html5-bootstrap-coming-soon-template/' },
    { id: 51, name: 'midway-free', url: 'https://learning-zone.github.io/website-templates/midway-free-html5-website-template-for-multi-purpose/' },
    { id: 52, name: 'mobile-app-landing', url: 'https://learning-zone.github.io/website-templates/mobile-app-landing-page-html5-template/' },
    { id: 53, name: 'mobile-app-free', url: 'https://learning-zone.github.io/website-templates/mobile-app-free-one-page-responsive-html5-landing-page-template/' },
    { id: 54, name: 'modern-corporate', url: 'https://learning-zone.github.io/website-templates/modern-corporate-responsive-web-template/' },
    { id: 55, name: 'modest-free', url: 'https://learning-zone.github.io/website-templates/modest-free-bootstrap-template/' },
    { id: 56, name: 'more-coffee', url: 'https://learning-zone.github.io/website-templates/more-coffee-free-html5-website-template/' },
    { id: 57, name: 'mosh-dance', url: 'https://learning-zone.github.io/website-templates/mosh-dance-education-responsive-html-template/' },
    { id: 58, name: 'music-school', url: 'https://learning-zone.github.io/website-templates/music-school-free-html5-bootstrap-website-template/' },
    { id: 59, name: 'mybiz-business', url: 'https://learning-zone.github.io/website-templates/mybiz-business-html5-responsive-website-template/' },
    { id: 60, name: 'nugget-education', url: 'https://learning-zone.github.io/website-templates/nugget-education-free-bootstrap-template/' },
    { id: 61, name: 'ocean-free', url: 'https://learning-zone.github.io/website-templates/ocean-free-html5-bootstrap-template/' },
    { id: 62, name: 'online-cv', url: 'https://learning-zone.github.io/website-templates/online-cv-resume-html5-template/' },
    { id: 63, name: 'ourteam-bootstrap', url: 'https://learning-zone.github.io/website-templates/ourteam-bootstrap-template/' },
    { id: 64, name: 'perfect-event', url: 'https://learning-zone.github.io/website-templates/perfect-event-free-html5-responsive-template/' },
    { id: 65, name: 'personify-cv', url: 'https://learning-zone.github.io/website-templates/personify-cv-simple-responsive-html-template/' },
    { id: 66, name: 'photogenic-free', url: 'https://learning-zone.github.io/website-templates/photogenic-free-html5-photography-website-template/' },
    { id: 67, name: 'photography-free', url: 'https://learning-zone.github.io/website-templates/photography-free-bootstrap-template/' },
    { id: 68, name: 'photomedia', url: 'https://learning-zone.github.io/website-templates/photomedia-free-html5-photography-website-template/' },
    { id: 69, name: 'planner-free', url: 'https://learning-zone.github.io/website-templates/planner-free-html5-bootstrap-template/' },
    { id: 70, name: 'power-free', url: 'https://learning-zone.github.io/website-templates/power-free-html5-template/' },
    { id: 71, name: 'presentation-free', url: 'https://learning-zone.github.io/website-templates/presentation-free-html5-bootstrap-template/' },
    { id: 72, name: 'prime-cv', url: 'https://learning-zone.github.io/website-templates/prime-cv-responsive-bootstrap-html-template/' },
    { id: 73, name: 'profile-free', url: 'https://learning-zone.github.io/website-templates/profile-free-bootstrap-4-template/' },
    { id: 74, name: 'puzzle-free', url: 'https://learning-zone.github.io/website-templates/puzzle-free-bootstrap-template/' },
    { id: 75, name: 'quick-access', url: 'https://learning-zone.github.io/website-templates/quick-access-education-free-html5-bootstrap-web-template/' },
    { id: 76, name: 'real-estate', url: 'https://learning-zone.github.io/website-templates/real-estate-free-bootstrap-template/' },
    { id: 77, name: 'realstate-onepage', url: 'https://learning-zone.github.io/website-templates/realstate-onepage-free-bootstrap-html5-template/' },
    { id: 78, name: 'reside-estate', url: 'https://learning-zone.github.io/website-templates/reside-estate-free-bootstrap-4-html5-real-estate-website-template/' },
    { id: 79, name: 'resto-free', url: 'https://learning-zone.github.io/website-templates/resto-free-html5-responsive-restaurant-website-template/' },
    { id: 80, name: 'restaurant', url: 'https://learning-zone.github.io/website-templates/restaurant-free-restaurant-html5-bootstrap-template/' },
    { id: 81, name: 'robust-education', url: 'https://learning-zone.github.io/website-templates/robust-education-free-html5-bootstrap-4-responsive-web-template/' },
    { id: 82, name: 'rockband-free', url: 'https://learning-zone.github.io/website-templates/rockband-free-bootstrap-template/' },
    { id: 83, name: 'saad-cv', url: 'https://learning-zone.github.io/website-templates/saad-cv-free-bootstrap-theme/' },
    { id: 84, name: 'simple-portfolio', url: 'https://learning-zone.github.io/website-templates/simple-portfolio-free-bootstrap-4-portfolio-template/' },
    { id: 85, name: 'simpler', url: 'https://learning-zone.github.io/website-templates/simpler-free-bootstrap-4-portfolio-template/' },
    { id: 86, name: 'simplex', url: 'https://learning-zone.github.io/website-templates/simplex-free-bootstrap-4-portfolio-template/' },
    { id: 87, name: 'spa-resort', url: 'https://learning-zone.github.io/website-templates/spa-resort-html5-bootstrap-web-template/' },
    { id: 88, name: 'sports', url: 'https://learning-zone.github.io/website-templates/sports-club-free-bootstrap-template/' },
    { id: 89, name: 'sportz-free', url: 'https://learning-zone.github.io/website-templates/sportz-free-bootstrap-html5-website-template/' },
    { id: 90, name: 'start-bootstrap', url: 'https://learning-zone.github.io/website-templates/start-bootstrap/' },
    { id: 91, name: 'startup', url: 'https://learning-zone.github.io/website-templates/startup-free-html5-bootstrap-4-website-template/' },
    { id: 92, name: 'steady-cv', url: 'https://learning-zone.github.io/website-templates/steady-cv-free-responsive-html5-bootstrap-template/' },
    { id: 93, name: 'store-free', url: 'https://learning-zone.github.io/website-templates/store-free-bootstrap-html5-e-commerce-website-template/' },
    { id: 94, name: 'story', url: 'https://learning-zone.github.io/website-templates/story-free-html5-bootstrap-template-for-personal-blog/' },
    { id: 95, name: 'studio', url: 'https://learning-zone.github.io/website-templates/studio-bootstrap-template/' },
    { id: 96, name: 'superior-cv', url: 'https://learning-zone.github.io/website-templates/superior-cv/' },
    { id: 97, name: 'sushi-restaurant', url: 'https://learning-zone.github.io/website-templates/sushi-restaurant/' },
    { id: 98, name: 'tattoo-studio', url: 'https://learning-zone.github.io/website-templates/tattoo-studio/' },
    { id: 99, name: 'travel-club', url: 'https://learning-zone.github.io/website-templates/travel-club/' },
    { id: 100, name: 'treehouse', url: 'https://learning-zone.github.io/website-templates/treehouse/' },
    { id: 101, name: 'under-wear', url: 'https://learning-zone.github.io/website-templates/under-wear/' },
    { id: 102, name: 'update-portfolio', url: 'https://learning-zone.github.io/website-templates/update-portfolio/' },
    { id: 103, name: 'vip-corporate', url: 'https://learning-zone.github.io/website-templates/vip-corporate/' },
    { id: 104, name: 'vino-restaurant', url: 'https://learning-zone.github.io/website-templates/vino-restaurant/' },
    { id: 105, name: 'vogue-restaurant', url: 'https://learning-zone.github.io/website-templates/vogue-restaurant/' },
    { id: 106, name: 'wave-multipurpose', url: 'https://learning-zone.github.io/website-templates/wave-multipurpose/' },
    { id: 107, name: 'we-watch', url: 'https://learning-zone.github.io/website-templates/we-watch/' },
    { id: 108, name: 'wedding-planner', url: 'https://learning-zone.github.io/website-templates/wedding-planner/' },
    { id: 109, name: 'winter-tour', url: 'https://learning-zone.github.io/website-templates/winter-tour/' },
    { id: 110, name: 'write-blog', url: 'https://learning-zone.github.io/website-templates/write-blog/' },
    { id: 111, name: 'x-corporate', url: 'https://learning-zone.github.io/website-templates/x-corporate/' },
    { id: 112, name: 'xmas-free', url: 'https://learning-zone.github.io/website-templates/xmas-free/' },
    { id: 113, name: 'your-coffee', url: 'https://learning-zone.github.io/website-templates/your-coffee/' },
    { id: 114, name: 'your-shop', url: 'https://learning-zone.github.io/website-templates/your-shop/' },
    { id: 115, name: 'yummy-restaurant', url: 'https://learning-zone.github.io/website-templates/yummy-restaurant/' },
    { id: 116, name: 'zenith-free', url: 'https://learning-zone.github.io/website-templates/zenith-free/' },
    { id: 117, name: 'zodiac-corporate', url: 'https://learning-zone.github.io/website-templates/zodiac-corporate/' },
];
let currentPage = 1;
    const templatesPerPage = 10;

    function displayTemplates(page) {
        templateList.innerHTML = '';

        const startIndex = (page - 1) * templatesPerPage;
        const endIndex = startIndex + templatesPerPage;
        const paginatedTemplates = templates.slice(startIndex, endIndex);

        paginatedTemplates.forEach(template => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${template.id}</td>
                <td>${template.name}</td>
                <td><a href="#" class="previewLink" data-url="${template.url}" data-name="${template.name}" data-id="${template.id}">Preview</a></td>
            `;
            templateList.appendChild(tr);
        });
    }

    function updatePaginationButtons() {
        if (currentPage === 1) {
            prevPageButton.disabled = true;
        } else {
            prevPageButton.disabled = false;
        }

        const totalPages = Math.ceil(templates.length / templatesPerPage);
        if (currentPage === totalPages) {
            nextPageButton.disabled = true;
        } else {
            nextPageButton.disabled = false;
        }
    }

    prevPageButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            displayTemplates(currentPage);
            updatePaginationButtons();
        }
    });

    nextPageButton.addEventListener('click', function() {
        const totalPages = Math.ceil(templates.length / templatesPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            displayTemplates(currentPage);
            updatePaginationButtons();
        }
    });

    displayTemplates(currentPage);
    updatePaginationButtons();

    templateList.addEventListener('click', function(event) {
        if (event.target.classList.contains('previewLink')) {
            event.preventDefault();
            const url = event.target.dataset.url;
            const name = event.target.dataset.name;
            const id = event.target.dataset.id;

            document.querySelectorAll('.previewLink').forEach(link => {
                link.classList.remove('selected');
            });

            event.target.classList.add('selected');

            iframe.src = url;
            selectedTemplate.textContent = `Selected Template: ${name} (#${id})`;
        }
    });
});