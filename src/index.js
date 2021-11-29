const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')

const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const logoImg = document.querySelector('#logo-img');
const linksArray = Array.from(navLinks);


//header section//
const services = linksArray[0];
services.textContent = siteContent['nav']['nav-item-1']
services.className = 'italic';
const product = linksArray[1];
product.textContent = siteContent['nav']['nav-item-2']
product.className = 'italic';
const vision = linksArray[2];
vision.textContent = siteContent['nav']['nav-item-3']
vision.className = 'italic';
const features = linksArray[3];
features.textContent = siteContent['nav']['nav-item-4']
features.className = 'italic';
const about = linksArray[4];
about.textContent = siteContent['nav']['nav-item-5']
about.className = 'italic';
const contact = linksArray[5];
contact.textContent = siteContent['nav']['nav-item-6']
contact.className = 'italic';

logoImg.src = 'mocks/img/logo.png';

const bigHeading = document.querySelector('h1');
bigHeading.textContent = 'DOM IS AWESOME';

const ctaButton = document.querySelector('.cta button');
ctaButton.textContent = 'Get Started';

const ctaImg = document.querySelector('#cta-img');
ctaImg.src = 'mocks/img/cta.png';
//end of header section//


//main content section//

//top content
const topHeaders = document.querySelectorAll('.top-content h4');
const topParas = document.querySelectorAll('.top-content p');
const topFirstHeader = topHeaders[0];
const topSecondHeader = topHeaders[1];
const topFirstPara = topParas[0];
const topSecondPara = topParas[1];
topFirstHeader.textContent = siteContent['main-content']['features-h4'];
topSecondHeader.textContent = siteContent['main-content']['about-h4'];
topFirstPara.textContent = siteContent['main-content']['features-content'];
topSecondPara.textContent = siteContent['main-content']['about-content'];



//middle content
const middleImg = document.querySelector('#middle-img');
middleImg.src = 'mocks/img/accent.png';

//bottom content
const bottomHeaders = document.querySelectorAll('.bottom-content h4');
const bottomParas = document.querySelectorAll('.bottom-content p');
const firstBottomHeader = bottomHeaders[0];
const secondBottomHeader = bottomHeaders[1];
const thirdBottomHeader = bottomHeaders[2];
const firstBottomPara = bottomParas[0];
const secondBottomPara = bottomParas[1];
const thirdBottomPara = bottomParas[2];

firstBottomHeader.textContent = siteContent['main-content']['services-h4'];
secondBottomHeader.textContent = siteContent['main-content']['product-h4'];
thirdBottomHeader.textContent = siteContent['main-content']['vision-h4'];
firstBottomPara.textContent = siteContent['main-content']['services-content'];
secondBottomPara.textContent = siteContent['main-content']['product-content'];
thirdBottomPara.textContent = siteContent['main-content']['vision-content'];




//contact section//
const contactH4 = document.querySelector('.contact h4');
const contactInfo = document.querySelectorAll('.contact p');

const address = contactInfo[0];
const phone = contactInfo[1];
const email = contactInfo[2];

contactH4.textContent = siteContent['contact']['contact-h4'];
address.textContent = siteContent['contact']['address'];
phone.textContent = siteContent['contact']['phone'];
email.textContent = siteContent['contact']['email'];


//footer section//
const footerLink = document.querySelector('footer a');
footerLink.textContent = 'Copyright Great Idea! 2021';
footerLink.className = 'bold';


