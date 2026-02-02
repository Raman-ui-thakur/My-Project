// Page loadinmg animation

if ((".loader").length) {
    // show Preloader until the website ist loaded
    $(window).on('load', function () {
    $(".loader").fadeOut("slow");
    });
}

/* Onpage linkng smooth effect */

/* Onpage linking smooth effect (FIXED) */

$('a[href^="#"]').on('click', function (event) {
    var href = $(this).attr('href');

    // 🚫 ignore empty or "#" links
    if (href === "#" || href === "") {
        return;
    }

    var target = $(href);

    if (target.length) {
        event.preventDefault();
        $('html, body').animate(
            {
                scrollTop: target.offset().top
            },
            1000
        );
    }
});

// Sticky Header
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $(".top-nav").addClass("light-header");
    } else {
        $(".top-nav").removeClass("light-header");
    }
});

// Year for copy content
$(function(){
var theYear = new Date().getFullYear();
$('#year').html(theYear);
});



function initHeaderFeatures() {

  /* ===== ACTIVE ON CLICK ===== */
  $(document).on("click", ".navbar-nav .nav-link", function () {
    $(".navbar-nav .nav-link").removeClass("active");
    $(this).addClass("active");
  });

  /* ===== ACTIVE ON SCROLL ===== */
  var sections = $("section");
  var navLinks = $(".navbar-nav .nav-link");

  $(window).on("scroll", function () {
    var scrollPos = $(this).scrollTop() + 120;

    sections.each(function () {
      var top = $(this).offset().top;
      var bottom = top + $(this).outerHeight();

      if (scrollPos >= top && scrollPos <= bottom) {
        navLinks.removeClass("active");
        $('.navbar-nav .nav-link[href="#' + this.id + '"]').addClass("active");
      }
    });
  });

}

window.addEventListener("load", () => {
  fetch("common/header/header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("header").innerHTML = data;
      initHeaderFeatures(); // 🔥 MUST
    });
});


  function initHeaderFeatures() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll(".navbar .nav-link").forEach(link => {
    const linkPage = link.getAttribute("href").replace("/", "");

    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

  fetch("common/footer/footer.html")
    .then(res => res.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });


    

    document.addEventListener("DOMContentLoaded", function () {
  // Ignore index page
  const isIndex =
    location.pathname === "/" ||
    location.pathname.endsWith("index.html");

  if (isIndex) return;

  const container = document.getElementById("banner-container");
  if (!container) return;

  // Fetch banner file
  fetch("common/banner/banner.html")
    .then((res) => res.text())
    .then((html) => {
      container.innerHTML = html;
      initBanner(); // start dynamic banner after load
    })
    .catch((err) => console.error("Banner load failed", err));

  function initBanner() {
    const banner = document.querySelector(".hero-banner");
    const title = document.getElementById("hero-title");
    const text = document.getElementById("hero-text");

    if (!banner || !title || !text) return;

    const slides = [
      {
        img: "assets/img/intro-bg-01-697b08708e328.webp",
        title: "It's not really hard<br>to stand out in crowd",
        text: "Professional grooming, modern styles, and confidence."
      },
      {
        img: "assets/img/intro-bg-01-697b08708e328.webp",
        title: "Style That Defines You",
        text: "Precision cuts and premium beard styling."
      },
      {
        img: "assets/img/intro-bg-01-697b08708e328.webp",
        title: "Experience Premium Grooming",
        text: "Where skill meets style and comfort."
      }
    ];

    let current = 0;

    function changeBanner() {
      banner.style.backgroundImage = `url(${slides[current].img})`;
      title.innerHTML = slides[current].title;
      text.textContent = slides[current].text;
      current = (current + 1) % slides.length;
    }

    changeBanner();
    setInterval(changeBanner, 5000);
  }
});
