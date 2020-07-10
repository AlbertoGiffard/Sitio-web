$(document).ready(function() {
    const select = $('.selectpicker');
    const fontOne = $('#firstI');
    const hrOne = $('#hrOne');
    const hrOneEn = $('#hrOneEn');
    const hrOnePt = $('#hrOnePt');
    const txtOne = $('#textOneDrop');
    const txtOneEn = $('#textOneDropEn');
    const txtOnePt = $('#textOneDropPt');
    const fontTwo = $('#secondI');
    const hrTwo = $('#hrTwo');
    const hrTwoEn = $('#hrTwoEn');
    const hrTwoPt = $('#hrTwoPt');
    const txtTwo = $('#textTwoDrop');
    const txtTwoEn = $('#textTwoDropEn');
    const txtTwoPt = $('#textTwoDropPt');
    const fontThree = $('#thirdI');
    const hrThree = $('#hrThree');
    const hrThreeEn = $('#hrThreeEn');
    const hrThreePt = $('#hrThreePt');
    const txtThree = $('#textThreeDrop');
    const txtThreeEn = $('#textThreeDropEn');
    const txtThreePt = $('#textThreeDropPt');
    const fontFour = $('#fourthI');
    const hrFour = $('#hrFour');
    const hrFourEn = $('#hrFourEn');
    const hrFourPt = $('#hrFourPt');
    const txtFour = $('#textFourDrop');
    const txtFourEn = $('#textFourDropEn');
    const txtFourPt = $('#textFourDropPt');
    const btnLanguage = $('#spanLanguage');

    language = () => {
        if (btnLanguage.html() === 'English') {
            btnLanguage.html('Español');
            console.log(btnLanguage.html());
        } else {
            btnLanguage.html('English');
            console.log(btnLanguage.html());
        }
    }

    () => {
        select.selectpicker();
    }
    showOne = () => {
        if (btnLanguage.html() === 'English') {
            if (hrOne.css('display') == 'none') {
                fontOne.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrOne.fadeIn(300);
                txtOne.fadeIn(300);
            } else {
                fontOne.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrOne.fadeOut(300);
                txtOne.fadeOut(300);
            }
        }
        if (btnLanguage.html() === 'Español') {
            if (hrOneEn.css('display') == 'none') {
                fontOne.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrOneEn.fadeIn(300);
                txtOneEn.fadeIn(300);
            } else {
                fontOne.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrOneEn.fadeOut(300);
                txtOneEn.fadeOut(300);
            }
        }
        /*         if ($('select[name="language"] option:selected').text() === 'Pt') {
                    if (hrOnePt.css('display') == 'none') {
                        fontOne.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                        hrOnePt.fadeIn(300);
                        txtOnePt.fadeIn(300);
                    } else {
                        fontOne.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                        hrOnePt.fadeOut(300);
                        txtOnePt.fadeOut(300);
                    }
                } */
    }

    showTwo = () => {
        if (btnLanguage.html() === 'English') {
            if (hrTwo.css('display') == 'none') {
                fontTwo.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrTwo.fadeIn(300);
                txtTwo.fadeIn(300);
            } else {
                fontTwo.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrTwo.fadeOut(300);
                txtTwo.fadeOut(300);
            }
        }
        if (btnLanguage.html() === 'Español') {
            if (hrTwoEn.css('display') == 'none') {
                fontTwo.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrTwoEn.fadeIn(300);
                txtTwoEn.fadeIn(300);
            } else {
                fontTwo.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrTwoEn.fadeOut(300);
                txtTwoEn.fadeOut(300);
            }
        }
        /*         if ($('select[name="language"] option:selected').text() === 'Pt') {
                    if (hrTwoPt.css('display') == 'none') {
                        fontTwo.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                        hrTwoPt.fadeIn(300);
                        txtTwoPt.fadeIn(300);
                    } else {
                        fontTwo.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                        hrTwoPt.fadeOut(300);
                        txtTwoPt.fadeOut(300);
                    }
                } */
    }

    showThree = () => {
        if (btnLanguage.html() === 'English') {
            if (hrThree.css('display') == 'none') {
                fontThree.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrThree.fadeIn(300);
                txtThree.fadeIn(300);
            } else {
                fontThree.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrThree.fadeOut(300);
                txtThree.fadeOut(300);
            }
        }
        if (btnLanguage.html() === 'Español') {
            if (hrThreeEn.css('display') == 'none') {
                fontThree.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrThreeEn.fadeIn(300);
                txtThreeEn.fadeIn(300);
            } else {
                fontThree.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrThreeEn.fadeOut(300);
                txtThreeEn.fadeOut(300);
            }
        }
        /*         if ($('select[name="language"] option:selected').text() === 'Pt') {
                    if (hrThreePt.css('display') == 'none') {
                        fontThree.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                        hrThreePt.fadeIn(300);
                        txtThreePt.fadeIn(300);
                    } else {
                        fontThree.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                        hrThreePt.fadeOut(300);
                        txtThreePt.fadeOut(300);
                    }
                } */
    }

    showFour = () => {
        if (btnLanguage.html() === 'English') {
            if (hrFour.css('display') == 'none') {
                fontFour.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrFour.fadeIn(300);
                txtFour.fadeIn(300);
            } else {
                fontFour.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrFour.fadeOut(300);
                txtFour.fadeOut(300);
            }
        }
        if (btnLanguage.html() === 'Español') {
            if (hrFourEn.css('display') == 'none') {
                fontFour.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                hrFourEn.fadeIn(300);
                txtFourEn.fadeIn(300);
            } else {
                fontFour.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                hrFourEn.fadeOut(300);
                txtFourEn.fadeOut(300);
            }
        }
        /*         if ($('select[name="language"] option:selected').text() === 'Pt') {
                    if (hrFourPt.css('display') == 'none') {
                        fontFour.removeClass("fa-plus-circle").addClass("fa-minus-circle")
                        hrFourPt.fadeIn(300);
                        txtFourPt.fadeIn(300);
                    } else {
                        fontFour.removeClass("fa-minus-circle").addClass("fa-plus-circle")
                        hrFourPt.fadeOut(300);
                        txtFourPt.fadeOut(300);
                    }
                } */
    }
})