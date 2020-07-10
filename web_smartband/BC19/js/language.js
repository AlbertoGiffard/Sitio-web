$(document).ready(function() {
    const txtEs = $('.txt-es');
    const txtEn = $('.txt-en');
    const txtPt = $('.txt-pt');
    const select = $('#btnLanguage');
    const carrouselOne = $('#carousel-1');
    const carrouselTwo = $('#carousel-2');
    const carrouselThree = $('#carousel-3');
    const carrouselFour = $('#carousel-4');
    const carrouselFive = $('#carousel-5');
    const carrouselSix = $('#carousel-6');
    const carrouselSeven = $('#carousel-7');
    const carrouselEight = $('#carousel-8');
    const carrouselNine = $('#carousel-9');
    const ptBtn = $('.nav-language .nav-link');
    const pbBtn = $('.nav-language .nav-link div');
    const expand = $('.navbar-toggler');
    const firstBlock = $('.main-first-block');
    const titleSize = $('#bigTitle');
    const btnLanguage = $('#spanLanguage');

    $(window).resize(function() {
        if ($(window).width() >= 991) {
            firstBlock.removeClass('changes-first-block');
            titleSize.removeClass('changes-first-block-title');
        }
    })

    navButton = () => {
        if ($(window).width() < 991) {
            if (expand.attr('aria-expanded') === "true") {
                firstBlock.removeClass('changes-first-block');
                titleSize.removeClass('changes-first-block-title');
            } else {
                firstBlock.addClass('changes-first-block');
                titleSize.addClass('changes-first-block-title');
            }
        } else {
            firstBlock.removeClass('changes-first-block');
            titleSize.removeClass('changes-first-block-title');
        }
    }

    select.click(function() {
        if (btnLanguage.html() === 'English') {
            txtEn.fadeOut();
            txtPt.fadeOut();
            ptBtn.css('padding-top', '0.2em');
            pbBtn.css('padding-bottom', '0em');
            txtEs.fadeIn(1000).css("display", "block");
            carrouselTwo.removeClass('active');
            carrouselThree.removeClass('active');
            carrouselFour.removeClass('active');
            carrouselFive.removeClass('active');
            carrouselSix.removeClass('active');
            carrouselSeven.removeClass('active');
            carrouselEight.removeClass('active');
            carrouselNine.removeClass('active');
            carrouselOne.addClass('active');
        }
        if (btnLanguage.html() === 'Español') {
            txtEs.fadeOut();
            txtPt.fadeOut();
            ptBtn.css('padding-top', '0em');
            pbBtn.css('padding-bottom', '1em');
            txtEn.fadeIn(1000).css("display", "block");
            carrouselTwo.removeClass('active');
            carrouselThree.removeClass('active');
            carrouselFive.removeClass('active');
            carrouselOne.removeClass('active');
            carrouselSix.removeClass('active');
            carrouselSeven.removeClass('active');
            carrouselEight.removeClass('active');
            carrouselNine.removeClass('active');
            carrouselFour.addClass('active');
        }
        /*         if ($('select[name="language"] option:selected').text() === 'Pt') {
                    txtEn.fadeOut();
                    txtEs.fadeOut();
                    ptBtn.css('padding-top', '0em');
                    pbBtn.css('padding-bottom', '1em');
                    txtPt.fadeIn(1000).css("display","block");
                    carrouselTwo.removeClass('active');
                    carrouselThree.removeClass('active');
                    carrouselFour.removeClass('active');
                    carrouselOne.removeClass('active');
                    carrouselSix.removeClass('active');
                    carrouselFive.removeClass('active');
                    carrouselEight.removeClass('active');
                    carrouselNine.removeClass('active');
                    carrouselSeven.addClass('active');
                } */
    });
})