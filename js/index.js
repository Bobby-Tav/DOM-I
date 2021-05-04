const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM \nIs \nAwesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street \nSomewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//My work

const header = document.querySelector('header');
const navi = header.querySelector('nav');
const docTitle = document.querySelector('title');
const cta = document.querySelector('cta');
const h1Title = document.querySelector('h1')
const photo = document.querySelector('#cta-img')

const butt = document.querySelector('button');
const topContent1 = document.querySelector(".text-content:nth-of-type(1)");
const topContent2 = document.querySelector(".text-content:nth-of-type(2)");
const topContent3 = document.querySelector(".bottom-content div:nth-of-type(1)");
const topContent4 = document.querySelector(".bottom-content div:nth-of-type(2)");
const topContent5 = document.querySelector(".bottom-content div:nth-of-type(3)");
const middleImg = document.querySelector("#middle-img");

const contact = document.querySelector(".contact"); 

const footer = document.querySelector("footer p");




//title
docTitle.textContent = "Great Idea!";

//Nav
navi.children[0].textContent = siteContent["nav"]["nav-item-1"];
navi.children[1].textContent = siteContent["nav"]['nav-item-2'];
navi.children[2].textContent = siteContent["nav"]['nav-item-3'];
navi.children[3].textContent = siteContent["nav"]['nav-item-4'];
navi.children[4].textContent = siteContent["nav"]['nav-item-5'];
navi.children[5].textContent = siteContent["nav"]['nav-item-6'];

//h1
h1Title.innerText = siteContent['cta']['h1'];

//photo
photo.src = siteContent["cta"]["img-src"];

//Button goes here i guess
butt.textContent = siteContent["cta"]["button"];


//Top contact
topContent1.children[0].textContent = siteContent["main-content"]["features-h4"];
topContent1.children[1].textContent = siteContent["main-content"]["features-content"];

topContent2.children[0].textContent = siteContent["main-content"]["about-h4"];
topContent2.children[1].textContent = siteContent["main-content"]["about-content"];


//bottom Content
topContent3.children[0].textContent = siteContent["main-content"]["services-h4"];
topContent3.children[1].textContent = siteContent["main-content"]["services-content"];


topContent4.children[0].textContent = siteContent["main-content"]["product-h4"];
topContent4.children[1].textContent = siteContent["main-content"]["product-content"];

topContent5.children[0].textContent = siteContent["main-content"]["vision-h4"];
topContent5.children[1].textContent = siteContent["main-content"]["vision-content"];


middleImg.src = siteContent["main-content"]["middle-img-src"];

//contact

contact.children[0].innerText = siteContent["contact"]["contact-h4"];
contact.children[1].innerText = siteContent["contact"]["address"];
contact.children[2].innerText = siteContent["contact"]["phone"];
contact.children[3].innerText = siteContent["contact"]["email"];

//Footer

footer.innerText = siteContent["footer"]["copyright"];
