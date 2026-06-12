(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $('.testimonial-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

	/**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Porfolio isotope and filter
   */
  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item'
      });

      let portfolioFilters = select('#portfolio-flters li', true);

      on('click', '#portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        portfolioIsotope.on('arrangeComplete', function() {
          AOS.refresh()
        });
      }, true);
    }

  });

  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  const whatsappNumber = "918688778353";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  function openWhatsAppWithMessage(message) {
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank");
  }

  function setupWhatsAppForm(formId, fields) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const messageLines = [
        `New appointment request from ${fields.formLabel}:`,
        `Name: ${document.getElementById(fields.name).value.trim()}`,
        `Email: ${document.getElementById(fields.email).value.trim()}`,
        `Mobile: ${document.getElementById(fields.mobile).value.trim()}`,
        `Service: ${document.getElementById(fields.service).value.trim()}`,
        `Preferred Date: ${document.getElementById(fields.date).value.trim()}`,
        `Preferred Time: ${document.getElementById(fields.time).value.trim()}`,
        `Message: ${document.getElementById(fields.message).value.trim()}`
      ];

      openWhatsAppWithMessage(messageLines.join("\n"));
    });
  }

  setupWhatsAppForm("appointmentForm", {
    formLabel: "Home Page",
    name: "appointmentName",
    email: "appointmentEmail",
    mobile: "appointmentMobile",
    service: "appointmentService",
    date: "appointmentDate",
    time: "appointmentTime",
    message: "appointmentMessage"
  });

  setupWhatsAppForm("contactAppointmentForm", {
    formLabel: "Contact Page",
    name: "contactName",
    email: "contactEmail",
    mobile: "contactMobile",
    service: "contactService",
    date: "contactDate",
    time: "contactTime",
    message: "contactMessage"
  });

  if (!document.querySelector(".floating-whatsapp")) {
    const whatsappButton = document.createElement("a");
    whatsappButton.href = whatsappUrl;
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener";
    whatsappButton.className = "floating-whatsapp";
    whatsappButton.setAttribute("aria-label", "Chat on WhatsApp");
    whatsappButton.innerHTML = '<i class="fab fa-whatsapp"></i>';
    document.body.appendChild(whatsappButton);

    const style = document.createElement("style");
    style.textContent = `
      .floating-whatsapp {
        position: fixed;
        right: 24px;
        bottom: 24px;
        width: 58px;
        height: 58px;
        border-radius: 12px;
        background: #25d366;
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 31px;
        text-decoration: none;
        border: 2px solid #1daa53;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
        z-index: 1100;
      }
      .floating-whatsapp:hover {
        color: #ffffff;
        background: #1ebd5a;
      }
    `;
    document.head.appendChild(style);
  }

})(jQuery);

