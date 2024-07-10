document.addEventListener('DOMContentLoaded', function() {
    const toggleMenu = document.getElementById('toggleMenu');
    const content = document.querySelector('.content');
    const desktopView = document.getElementById('desktopView');
    const mobileView = document.getElementById('mobileView');
    const iframe = document.getElementById('previewFrame');
    const selectedTemplate = document.getElementById('selectedTemplate');
    const templateList = document.getElementById('templateList');

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
    { id: 2, name: 'above-educational-bootstrap-responsive-template', url: 'https://learning-zone.github.io/website-templates/above-educational-bootstrap-responsive-template/' },
    { id: 3, name: 'add-life-health-fitness-free-bootstrap-html5-template', url: 'https://learning-zone.github.io/website-templates/add-life-health-fitness-free-bootstrap-html5-template/' },
    { id: 4, name: 'aerosky-real-estate-html-responsive-website-template', url: 'https://learning-zone.github.io/website-templates/aerosky-real-estate-html-responsive-website-template/' },
    { id: 5, name: 'agile-agency-free-bootstrap-web-template', url: 'https://learning-zone.github.io/website-templates/agile-agency-free-bootstrap-web-template/' },
    { id: 6, name: 'amaze-photography-bootstrap-html5-template', url: 'https://learning-zone.github.io/website-templates/amaze-photography-bootstrap-html5-template/' },
    { id: 7, name: 'aroma-beauty-and-spa-responsive-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/aroma-beauty-and-spa-responsive-bootstrap-template/' },
    { id: 8, name: 'avenger-multi-purpose-responsive-html5-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/avenger-multi-purpose-responsive-html5-bootstrap-template/' },
    { id: 9, name: 'b-school-free-education-html5-website-template', url: 'https://learning-zone.github.io/website-templates/b-school-free-education-html5-website-template/' },
    { id: 10, name: 'basic-free-html5-template-for-multi-purpose', url: 'https://learning-zone.github.io/website-templates/basic-free-html5-template-for-multi-purpose/' },
    { id: 11, name: 'beauty-salon-bootstrap-html5-template', url: 'https://learning-zone.github.io/website-templates/beauty-salon-bootstrap-html5-template/' },
    { id: 12, name: 'bestro-restaurant-bootstrap-html5-template', url: 'https://learning-zone.github.io/website-templates/bestro-restaurant-bootstrap-html5-template/' },
    { id: 13, name: 'businessline-corporate-portfolio-bootstrap-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/businessline-corporate-portfolio-bootstrap-responsive-web-template/' },
    { id: 14, name: 'cloud-hosting-free-bootstrap-responsive-website-template', url: 'https://learning-zone.github.io/website-templates/cloud-hosting-free-bootstrap-responsive-website-template/' },
    { id: 15, name: 'coffee-shop-free-html5-template', url: 'https://learning-zone.github.io/website-templates/coffee-shop-free-html5-template/' },
    { id: 16, name: 'creative-bee-corporate-free-html5-web-template', url: 'https://learning-zone.github.io/website-templates/creative-bee-corporate-free-html5-web-template/' },
    { id: 17, name: 'creative-free-responsive-html5-business-template', url: 'https://learning-zone.github.io/website-templates/creative-free-responsive-html5-business-template/' },
    { id: 18, name: 'delight-multi-purpose-free-html5-website-template', url: 'https://learning-zone.github.io/website-templates/delight-multi-purpose-free-html5-website-template/' },
    { id: 19, name: 'delite-music-html5-bootstrap-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/delite-music-html5-bootstrap-responsive-web-template/' },
    { id: 20, name: 'eat-restaurant-bootstrap-html5-template', url: 'https://learning-zone.github.io/website-templates/eat-restaurant-bootstrap-html5-template/' },
    { id: 21, name: 'elegant-free-multi-purpose-bootstrap-responsive-template', url: 'https://learning-zone.github.io/website-templates/elegant-free-multi-purpose-bootstrap-responsive-template/' },
    { id: 22, name: 'enlive-corporate-free-html5-bootstrap-web-template', url: 'https://learning-zone.github.io/website-templates/enlive-corporate-free-html5-bootstrap-web-template/' },
    { id: 23, name: 'everest-corporate-business-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/everest-corporate-business-bootstrap-template/' },
    { id: 24, name: 'fit-healthy-fitness-and-gym-html5-bootstrap-theme', url: 'https://learning-zone.github.io/website-templates/fit-healthy-fitness-and-gym-html5-bootstrap-theme/' },
    { id: 25, name: 'fitness-zone-html5-bootstrap-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/fitness-zone-html5-bootstrap-responsive-web-template/' },
    { id: 26, name: 'foodz-mobile-app-bootstrap-landing-page', url: 'https://learning-zone.github.io/website-templates/foodz-mobile-app-bootstrap-landing-page/' },
    { id: 27, name: 'frames-corporate-bootstrap-free-html5-template', url: 'https://learning-zone.github.io/website-templates/frames-corporate-bootstrap-free-html5-template/' },
    { id: 28, name: 'free-bootstrap-admin-template-dream', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-admin-template-dream/' },
    { id: 29, name: 'free-bootstrap-template-real-estate-my-home', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-real-estate-my-home/' },
    { id: 30, name: 'free-bootstrap-template-restaurant-website-treehut', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-restaurant-website-treehut/' },
    { id: 31, name: 'free-bootstrap-template-rockline-business', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-rockline-business/' },
    { id: 32, name: 'free-bootstrap-template-for-multi-purpose-ladder', url: 'https://learning-zone.github.io/website-templates/free-bootstrap-template-for-multi-purpose-ladder/' },
    { id: 33, name: 'free-portfolio-html5-responsive-website-sam', url: 'https://learning-zone.github.io/website-templates/free-portfolio-html5-responsive-website-sam/' },
    { id: 34, name: 'getdoctor-free-bootstrap-responsive-website-template', url: 'https://learning-zone.github.io/website-templates/getdoctor-free-bootstrap-responsive-website-template/' },
    { id: 35, name: 'golden-hotel-free-html5-bootstrap-web-template', url: 'https://learning-zone.github.io/website-templates/golden-hotel-free-html5-bootstrap-web-template/' },
    { id: 36, name: 'grand-free-bootstrap-responsive-website-template', url: 'https://learning-zone.github.io/website-templates/grand-free-bootstrap-responsive-website-template/' },
    { id: 37, name: 'html5-responsive-coming-soon-page', url: 'https://learning-zone.github.io/website-templates/html5-responsive-coming-soon-page/' },
    { id: 38, name: 'hybrid-bootstrap-admin-template', url: 'https://learning-zone.github.io/website-templates/hybrid-bootstrap-admin-template/' },
    { id: 39, name: 'iam-html5-responsive-portfolio-resume-template', url: 'https://learning-zone.github.io/website-templates/iam-html5-responsive-portfolio-resume-template/' },
    { id: 40, name: 'icon-real-estate-developers-free-responsive-html-template', url: 'https://learning-zone.github.io/website-templates/icon-real-estate-developers-free-responsive-html-template/' },
    { id: 41, name: 'ideal-interior-design-free-bootstrap-website-template', url: 'https://learning-zone.github.io/website-templates/ideal-interior-design-free-bootstrap-website-template/' },
    { id: 42, name: 'indus-free-coming-soon-bootstrap-responsive-template', url: 'https://learning-zone.github.io/website-templates/indus-free-coming-soon-bootstrap-responsive-template/' },
    { id: 43, name: 'insight-free-bootstrap-html5-admin-template', url: 'https://learning-zone.github.io/website-templates/insight-free-bootstrap-html5-admin-template/' },
    { id: 44, name: 'john-bootstrap-one-page-html5-free-resume-template', url: 'https://learning-zone.github.io/website-templates/john-bootstrap-one-page-html5-free-resume-template/' },
    { id: 45, name: 'johndoe-portfolio-resume-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/johndoe-portfolio-resume-bootstrap-template/' },
    { id: 46, name: 'light-coming-soon-html-responsive-template', url: 'https://learning-zone.github.io/website-templates/light-coming-soon-html-responsive-template/' },
    { id: 47, name: 'lovely-wedding-bootstrap-free-website-template', url: 'https://learning-zone.github.io/website-templates/lovely-wedding-bootstrap-free-website-template/' },
    { id: 48, name: 'matrix-free-bootstrap-admin-template', url: 'https://learning-zone.github.io/website-templates/matrix-free-bootstrap-admin-template/' },
    { id: 49, name: 'me-resume-personal-portfolio-responsive-template', url: 'https://learning-zone.github.io/website-templates/me-resume-personal-portfolio-responsive-template/' },
    { id: 50, name: 'mentor-free-html5-bootstrap-coming-soon-template', url: 'https://learning-zone.github.io/website-templates/mentor-free-html5-bootstrap-coming-soon-template/' },
    { id: 51, name: 'midway-free-html5-website-template-for-multi-purpose', url: 'https://learning-zone.github.io/website-templates/midway-free-html5-website-template-for-multi-purpose/' },
    { id: 52, name: 'mobile-app-landing-page-html5-template', url: 'https://learning-zone.github.io/website-templates/mobile-app-landing-page-html5-template/' },
    { id: 53, name: 'mobile-app-free-one-page-responsive-html5-landing-page', url: 'https://learning-zone.github.io/website-templates/mobile-app-free-one-page-responsive-html5-landing-page/' },
    { id: 54, name: 'moon-free-bootstrap-coming-soon-template', url: 'https://learning-zone.github.io/website-templates/moon-free-bootstrap-coming-soon-template/' },
    { id: 55, name: 'moto-business-html5-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/moto-business-html5-responsive-web-template/' },
    { id: 56, name: 'next-responsive-coming-soon-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/next-responsive-coming-soon-bootstrap-template/' },
    { id: 57, name: 'orange-coming-soon-html-responsive-template', url: 'https://learning-zone.github.io/website-templates/orange-coming-soon-html-responsive-template/' },
    { id: 58, name: 'park-city-bootstrap-html-real-estate-responsive-template', url: 'https://learning-zone.github.io/website-templates/park-city-bootstrap-html-real-estate-responsive-template/' },
    { id: 59, name: 'real-estate-builders-free-responsive-website-templates-adesign', url: 'https://learning-zone.github.io/website-templates/real-estate-builders-free-responsive-website-templates-adesign/' },
    { id: 60, name: 'relax-interior-free-bootstrap-responsive-website-template', url: 'https://learning-zone.github.io/website-templates/relax-interior-free-bootstrap-responsive-website-template/' },
    { id: 61, name: 'retro-free-consulting-responsive-html5-website-template', url: 'https://learning-zone.github.io/website-templates/retro-free-consulting-responsive-html5-website-template/' },
    { id: 62, name: 'rider-free-multi-purpose-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/rider-free-multi-purpose-bootstrap-template/' },
    { id: 63, name: 'rocket-business-bootstrap-free-responsive-web-theme', url: 'https://learning-zone.github.io/website-templates/rocket-business-bootstrap-free-responsive-web-theme/' },
    { id: 64, name: 'simply-bootstrap-coming-soon-template', url: 'https://learning-zone.github.io/website-templates/simply-bootstrap-coming-soon-template/' },
    { id: 65, name: 'speed-hosting-bootstrap-free-html5-template', url: 'https://learning-zone.github.io/website-templates/speed-hosting-bootstrap-free-html5-template/' },
    { id: 104, name: 'css3-seascape', url: 'https://learning-zone.github.io/website-templates/css3-seascape/' },
    { id: 105, name: 'darktouch-corporate-portfolio-bootstrap-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/darktouch-corporate-portfolio-bootstrap-responsive-web-template/' },
    { id: 106, name: 'dreamy', url: 'https://learning-zone.github.io/website-templates/dreamy/' },
  { id: 107, name: 'drifting', url: 'https://learning-zone.github.io/website-templates/drifting/' },
    { id: 108, name: 'droll', url: 'https://learning-zone.github.io/website-templates/droll/' },
    { id: 109, name: 'endure-html5-responsive-coming-soon-template', url: 'https://learning-zone.github.io/website-templates/endure-html5-responsive-coming-soon-template/' },
    { id: 110, name: 'extent', url: 'https://learning-zone.github.io/website-templates/extent/' },
    { id: 111, name: 'fiber-hosting-bootstrap-website-template', url: 'https://learning-zone.github.io/website-templates/fiber-hosting-bootstrap-website-template/' },
    { id: 112, name: 'full-slider', url: 'https://learning-zone.github.io/website-templates/full-slider/' },
    { id: 113, name: 'funky-cool-blue', url: 'https://learning-zone.github.io/website-templates/funky-cool-blue/' },
    { id: 114, name: 'gila', url: 'https://learning-zone.github.io/website-templates/gila/' },
    { id: 115, name: 'glips-responsive-free-coming-soon-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/glips-responsive-free-coming-soon-bootstrap-template/' },
    { id: 116, name: 'grandure-bootstrap-free-coming-soon-template', url: 'https://learning-zone.github.io/website-templates/grandure-bootstrap-free-coming-soon-template/' },
    { id: 117, name: 'grass-stains', url: 'https://learning-zone.github.io/website-templates/grass-stains/' },
    { id: 118, name: 'green-corp-flat-free-responsive-mobile-website', url: 'https://learning-zone.github.io/website-templates/green-corp-flat-free-responsive-mobile-website/' },
    { id: 119, name: 'greenery', url: 'https://learning-zone.github.io/website-templates/greenery/' },
    { id: 120, name: 'gunmetal-portal', url: 'https://learning-zone.github.io/website-templates/gunmetal-portal/' },
    { id: 121, name: 'half-slider', url: 'https://learning-zone.github.io/website-templates/half-slider/' },
    { id: 122, name: 'html5-portfolio', url: 'https://learning-zone.github.io/website-templates/html5-portfolio/' },
    { id: 123, name: 'iclick-photography-bootstrap-free-website-template', url: 'https://learning-zone.github.io/website-templates/iclick-photography-bootstrap-free-website-template/' },
    { id: 124, name: 'idata-hosting-free-bootstrap-responsive-website-template', url: 'https://learning-zone.github.io/website-templates/idata-hosting-free-bootstrap-responsive-website-template/' },
    { id: 125, name: 'interio', url: 'https://learning-zone.github.io/website-templates/interio/' },
    { id: 126, name: 'internet-portal', url: 'https://learning-zone.github.io/website-templates/internet-portal/' },
    { id: 127, name: 'kavin-corporate-bootstrap-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/kavin-corporate-bootstrap-responsive-web-template/' },
    { id: 128, name: 'lazydays', url: 'https://learning-zone.github.io/website-templates/lazydays/' },
    { id: 129, name: 'learn-educational-free-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/learn-educational-free-responsive-web-template/' },
    { id: 130, name: 'line-free-app-landing-page-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/line-free-app-landing-page-responsive-web-template/' },
    { id: 131, name: 'medplus-medical', url: 'https://learning-zone.github.io/website-templates/medplus-medical/' },
    { id: 132, name: 'metropolis', url: 'https://learning-zone.github.io/website-templates/metropolis/' },
    { id: 133, name: 'missunderstood', url: 'https://learning-zone.github.io/website-templates/missunderstood/' },
    { id: 134, name: 'my-portfolio-two', url: 'https://learning-zone.github.io/website-templates/my-portfolio-two/' },
    { id: 135, name: 'ninja-business-consulting-html-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/ninja-business-consulting-html-responsive-web-template/' },
    { id: 136, name: 'one-page-wonder', url: 'https://learning-zone.github.io/website-templates/one-page-wonder/' },
    { id: 137, name: 'photo-art', url: 'https://learning-zone.github.io/website-templates/photo-art/' },
    { id: 138, name: 'photo-style-two', url: 'https://learning-zone.github.io/website-templates/photo-style-two/' },
    { id: 139, name: 'plain', url: 'https://learning-zone.github.io/website-templates/plain/' },
    { id: 140, name: 'portfolio-item', url: 'https://learning-zone.github.io/website-templates/portfolio-item/' },
    { id: 141, name: 'prosimii', url: 'https://learning-zone.github.io/website-templates/prosimii/' },
    { id: 142, name: 'relic-portal', url: 'https://learning-zone.github.io/website-templates/relic-portal/' },
    { id: 143, name: 'sample_site', url: 'https://learning-zone.github.io/website-templates/sample_site/' },
    { id: 144, name: 'sb-admin-2', url: 'https://learning-zone.github.io/website-templates/sb-admin-2/' },
    { id: 145, name: 'sb-admin', url: 'https://learning-zone.github.io/website-templates/sb-admin/' },
    { id: 146, name: 'scenic-photo', url: 'https://learning-zone.github.io/website-templates/scenic-photo/' },
    { id: 147, name: 'school-educational-html5-template', url: 'https://learning-zone.github.io/website-templates/school-educational-html5-template/' },
    { id: 148, name: 'simple-sidebar', url: 'https://learning-zone.github.io/website-templates/simple-sidebar/' },
    { id: 149, name: 'sinorca', url: 'https://learning-zone.github.io/website-templates/sinorca/' },
    { id: 150, name: 'skytouch-onepage-bootstrap-responsive-web-template', url: 'https://learning-zone.github.io/website-templates/skytouch-onepage-bootstrap-responsive-web-template/' },
    { id: 151, name: 'smart-interior-designs-html5-bootstrap-web-template', url: 'https://learning-zone.github.io/website-templates/smart-interior-designs-html5-bootstrap-web-template/' },
    { id: 152, name: 'smartapp-free-html5-landing-page', url: 'https://learning-zone.github.io/website-templates/smartapp-free-html5-landing-page/' },
    { id: 153, name: 'startbootstrap-agency-1.0.2', url: 'https://learning-zone.github.io/website-templates/startbootstrap-agency-1.0.2/' },
    { id: 154, name: 'startbootstrap-clean-blog-1.0.2', url: 'https://learning-zone.github.io/website-templates/startbootstrap-clean-blog-1.0.2/' },
    { id: 155, name: 'startbootstrap-grayscale-1.0.3', url: 'https://learning-zone.github.io/website-templates/startbootstrap-grayscale-1.0.3/' },
    { id: 156, name: 'startbootstrap-sb-admin-2-1.0.5', url: 'https://learning-zone.github.io/website-templates/startbootstrap-sb-admin-2-1.0.5/' },
    { id: 157, name: 'startbootstrap-stylish-portfolio-1.0.2', url: 'https://learning-zone.github.io/website-templates/startbootstrap-stylish-portfolio-1.0.2/' },
    { id: 158, name: 'street-life', url: 'https://learning-zone.github.io/website-templates/street-life/' },
    { id: 159, name: 'style-blog-template', url: 'https://learning-zone.github.io/website-templates/style-blog-template/' },
    { id: 160, name: 'stylish-bootstrap-coming-soon-template', url: 'https://learning-zone.github.io/website-templates/stylish-bootstrap-coming-soon-template/' },
    { id: 161, name: 'stylish-portfolio', url: 'https://learning-zone.github.io/website-templates/stylish-portfolio/' },
    { id: 162, name: 'thin-green-line', url: 'https://learning-zone.github.io/website-templates/thin-green-line/' },
    { id: 163, name: 'travel-agency-bootstrap-template', url: 'https://learning-zone.github.io/website-templates/travel-agency-bootstrap-template/' },
    { id: 164, name: 'trendy-bootstrap-portfolio-template', url: 'https://learning-zone.github.io/website-templates/trendy-bootstrap-portfolio-template/' },
    { id: 165, name: 'vcare-free-html5-template-hospital-website', url: 'https://learning-zone.github.io/website-templates/vcare-free-html5-template-hospital-website/' },
    { id: 166, name: 'vone-free-business-html5-responsive-website', url: 'https://learning-zone.github.io/website-templates/vone-free-business-html5-responsive-website/' },
    { id: 167, name: 'vteam-a-corporate-multipurpose-free-bootstrap-responsive-template', url: 'https://learning-zone.github.io/website-templates/vteam-a-corporate-multipurpose-free-bootstrap-responsive-template/' },
    { id: 168, name: 'wallpaper', url: 'https://learning-zone.github.io/website-templates/wallpaper/' },
    { id: 169, name: 'wedding-bootstrap-free-website-template', url: 'https://learning-zone.github.io/website-templates/wedding-bootstrap-free-website-template/' },
    { id: 170, name: 'wow-portfolio-multi-purpose-html5-template', url: 'https://learning-zone.github.io/website-templates/wow-portfolio-multi-purpose-html5-template/' },
];
templates.forEach(template => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${template.id}</td>
        <td>${template.name}</td>
        <td><a href="#" class="previewLink" data-url="${template.url}" data-name="${template.name}" data-id="${template.id}">Preview</a></td>
    `;
    templateList.appendChild(tr);
});

templateList.addEventListener('click', function(event) {
    if (event.target.classList.contains('previewLink')) {
        event.preventDefault();
        const url = event.target.dataset.url;
        const name = event.target.dataset.name;
        const id = event.target.dataset.id;

        // Remove 'selected' class from all links
        document.querySelectorAll('.previewLink').forEach(link => {
            link.classList.remove('selected');
        });

        // Add 'selected' class to the clicked link
        event.target.classList.add('selected');

        iframe.src = url;
        selectedTemplate.textContent = `Selected Template: ${name} (#${id})`;
    }
});
});