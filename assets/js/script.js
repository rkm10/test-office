// When the user scrolls the page, execute myFunction
window.onscroll = function () {
    pageHeader();
    backToTop();
    if (document.getElementById("rightSidebarContent")) {
        stickySidebar();
    }
};
// ---------------------------------------------------------------- //

// ---Sticky Sidebar Starts---------------------------------------- //

let pageHeaderEl = document.getElementById("header");
let bannerForm = document.getElementById("bannerFloatingForm");

// Function to check if the element is in or below the header
function isElementInHeader() {
    const elementRect = bannerForm.getBoundingClientRect();
    const headerRect = pageHeaderEl.getBoundingClientRect();

    // Check if the element's bottom edge is above or at the same level as the header's top edge
    return elementRect.bottom <= headerRect.top;
}


// Add the sticky class to the sidebar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickySidebar() {
    var sidebar = document.getElementById("rightSidebarContent");
    var sticky = sidebar.offsetTop;
    sticky -= 70;
    if (isElementInHeader()) {
        sidebar.classList.add("stickySidebar")
    } else {
        sidebar.classList.remove("stickySidebar");
    }
}
// ----Sticky Sidebar Ends----------------------------------------------//

// ---Back To Top Starts----------------------------------------------- //
var backToTopBtn = document.getElementById("backToTop");
function backToTop() {
    if (window.pageYOffset >= 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
}
// ---Back To Top Ends----------------------------------------------- //

var header = document.getElementById("header");

function pageHeader() {
    if (window.pageYOffset >= 100) {
        header.classList.add("headerSticky")
    } else {
        header.classList.remove("headerSticky");
    }
}

// Floating Form Button ------------------------------------------------//
const triggerBtn = document.getElementById("floating-lead-btn");
const floatForm = document.getElementsByClassName("floating-lead-form")[0];
const floatFormClose = document.getElementsByClassName("floating-form-close")[0];
triggerBtn.addEventListener("mouseover", function () {
    floatForm.style.right = "0px";
});
floatFormClose.addEventListener("click", function () {
    floatForm.style.right = "-500px";
});


//  Initialize Swiper -----------------------------------------//

// ------ Hero Slider Starts----------------------------------//

var heroSwiper = new Swiper(".heroSwiper", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: true
    },
    pagination: false,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // }
});
// ------ Hero Slider Ends------------------------------------//

// ------ Gallery Slider Starts-------------------------------//
var gallerySwiper = new Swiper(".gallerySwiper", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 3,
        }
    },
});
// ------ Gallery Slider Ends---------------------------------//

// ------ Amenities Slider Starts-----------------------------//
var amenitiesSwiper = new Swiper(".amenitiesSwiper", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 3,
        }
    },
});
// ------ Amenities Slider Ends-------------------------------//

// ------ Client Slider Starts------------------------------//
var clientSwiper1 = new Swiper(".clientSwiper1", {
    slidesPerView: 7,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    grabCursor: 'true',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    },
    breakpoints: {
        // when window width is >= 0px
        0: {
            slidesPerView: 2,
        },
        500: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 7,
        }
    },
});
// ------ Client Slider Ends---------------------------------//

// ------ Our Presence Slider Starts----------------------------//
var clientSwiper2 = new Swiper(".ourPresenceSwiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        prevEl: '.swiper-button-prev',
    }
});
// ------ Our Presence Ends-------------------------------------//

// ------ Whatsapp icon Animation starts -----------------------//
// $(function () {
//     $('.bodymovin').each(function () {
//         var element = $(this);
//         var animation = bodymovin.loadAnimation({
//             container: element[0],
//             renderer: 'svg',
//             loop: true,
//             autoplay: true,
//             path: element.data('icon')
//         });
//     });
// });
// ------ Whatsapp icon Animation Ends -------------------------//

// ------ Form Popup Script Starts -----------------------------//
$(document).ready(function () {
    $('.popup_btn').click(function () {
        $('.popup_form').addClass('show_popup');
        $('.close_popup').show();
    });
    $('.close').click(function () {
        $('.popup_form').removeClass('show_popup');
        $('.close_popup').hide();
    });
    $('.close_popup').click(function () {
        $('.popup_form').removeClass('show_popup');
        $(this).hide();
    });
});


//------carousel script------//
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstslideWidth = carousel.querySelector(".slide").offsetWidth;
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of slides that can fit in the carousel at once
let slidePerView = Math.round(carousel.offsetWidth / firstslideWidth);

// Insert copies of the last few slides to beginning of carousel for infinite scrolling
carouselChildrens.slice(-slidePerView).reverse().forEach(slide => {
    carousel.insertAdjacentHTML("afterbegin", slide.outerHTML);
});

// Insert copies of the first few slides to end of carousel for infinite scrolling
carouselChildrens.slice(0, slidePerView).forEach(slide => {
    carousel.insertAdjacentHTML("beforeend", slide.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate slides on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstslideWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
