$(document).ready(function () {
    $('.projects').animate({ opacity: 0 }, 0);
    $('.testimonials').animate({ opacity: 0 }, 0);
    $('.experience').animate({ opacity: 0 }, 0);
    $('.skills').animate({ opacity: 0 }, 0);
    $('.contact').animate({ opacity: 0 }, 0);
    $('.home01').animate({ opacity: 1 }, 1500);

    $(window).on('load resize scroll', function () {

        if ($(window).scrollTop() >= 220) {
            $('.projects').animate({ opacity: 1 }, 2000);
            $('.skills').animate({ opacity: 1 }, 2000);
            $('.contact').animate({ opacity: 1 }, 3000);
            $('.testimonials').animate({ opacity: 1 }, 3000);
            $('.experience').animate({ opacity: 1 }, 3500);

        }


        if ($(window).scrollTop() >= 1150) {
            $('.skill').css({ 'box-shadow': 'rgba(0, 0, 0, 0.2) 0px 10px 15px' }, 4000);
            $('.skill').css({ 'background-color': 'var(--lightBlue)' }, 4000);
            $('.skill').css({ 'color': 'var(--primaryColor)' }, 4000);
        }

    });


    $("#hiddenSection").hide();

    $("#more").click(function () {
        $("#hiddenSection").slideDown(2000);
        $("#more").hide();
    });
});

$(document).ready(function () {
    $('.accordion-item-header').click(function () {
        // Close all other accordion bodies
        $('.accordion-item-body').not($(this).siblings('.accordion-item-body')).slideUp();
        $(this).toggleClass('active');
        $(this).siblings('.accordion-item-body').slideToggle();
    });

    // Set initial state for all bodies (closed)
    $('.accordion-item-body').attr('data-closed-message', 'Click to see full testimonial').hide();

    // Show the first testimonial by default
    // $('.accordion-item:first-child .accordion-item-body').show();
});


$(document).ready(function () {
    // Check for mobile device using media query
    if ($(window).width() < 500) { // Adjust screen size as needed
        $("#expanded01").hide();
        $("#expanded02").hide();
        // Click event handler for animation
        $(".testimonialExpand").click(function () {
            $("#expanded01").slideToggle(1500); // Toggle expanded class
        });

        $(".experienceExpand").click(function () {
            $("#expanded02").slideToggle(1500); // Toggle expanded class
        });

    }
});




