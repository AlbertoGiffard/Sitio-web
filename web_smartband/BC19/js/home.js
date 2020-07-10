$(document).ready(function() {
    var orderBtn = $('.btn-details');
    var orderSpan = $('.span-hr');
    var orderHr = $('.hr-white-list');
    const btnLanguage = $('#spanLanguage');

    $(window).on('resize', function() {
        if ($(window).width() < 770) {
            orderSpan.addClass("order-1");
            orderBtn.addClass("order-2");
            orderHr.addClass("order-3");
        }
    });

    $(window).on('resize', function() {
        if ($(window).width() > 770) {
            orderSpan.removeClass("order-1");
            orderBtn.removeClass("order-2");
            orderHr.removeClass("order-3");
        }
        if ($(window).height() < 530) {
            $('#vh').removeClass("vh-100");
        } else {
            $('#vh').addClass("vh-100");
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) { //condición a cumplirse cuando el usuario haya bajado 301px a más.
            $("#js_up").slideDown(300); //se muestra el botón en 300 mili segundos
        } else {
            $("#js_up").slideUp(300); //se oculta el botón en 300 mili segundos
        }
    });

    //creamos una función accediendo a la etiqueta i en su evento click
    $("#js_up i").on('click', function(e) {
        e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
        $("body,html").animate({ // aplicamos la función animate a los tags body y html
            scrollTop: 0 //al colocar el valor 0 a scrollTop me volverá a la parte inicial de la página
        }, 700); //el valor 700 indica que lo hara en 700 mili segundos
        return false; //rompe el bucle
    });

    send = () => {
        if (btnLanguage.html() === 'English') {
            swal({
                title: "Se ha enviado satisfactoriamente!",
                icon: "success",
                button: "Ok",
            });
        }
        if (btnLanguage.html() === 'Español') {
            swal({
                title: "It has been sent successfully!",
                icon: "success",
                button: "Ok",
            });
        }
        /*         if ($('select[name="language"] option:selected').text() === 'Pt') {
                    swal({
                        title: "Foi enviado com sucesso!",
                        icon: "success",
                        button: "Ok",
                    });
                } */
        var files = new Array;
        files.push(
            $('#messageField').val(),
            $('.number-form').val(),
            $('#code').val(),
            $('#email').val(),
            $('#surname').val(),
            $('#name').val()
        )
        state = {
            Nombre: $('#name').val(),
            Apellido: $('#surname').val(),
            email: $('#email').val(),
            codigo: $('#code').val(),
            numero: $('.number-form').val(),
            Mensaje: $('#messageField').val()
        }
        console.log(state);
        $('#messageField').val('');
        $('.number-form').val('');
        $('#code').val('');
        $('#email').val('');
        $('#surname').val('');
        $('#name').val('');
    }

    $("#firstForm").submit(function() {
        event.preventDefault();
        if ($("#name").val().length < 1) {
            if (btnLanguage.html() === 'English') {
                swal({
                    title: "Falta al menos un nombre",
                    icon: "error",
                    button: "Ok",
                });
            }
            if (btnLanguage.html() === 'Español') {
                swal({
                    title: "At least one name is missing",
                    icon: "error",
                    button: "Ok",
                });
            }
            /*             if ($('select[name="language"] option:selected').text() === 'Pt') {
                            swal({
                                title: "Falta pelo menos um nome",
                                icon: "error",
                                button: "Ok",
                            });
                        } */
            return false;
        }
        if ($("#email").val().length < 1) {
            if (btnLanguage.html() === 'English') {
                swal({
                    title: "Colocar un correo electrónico válido",
                    icon: "error",
                    button: "Ok",
                });
            }
            if (btnLanguage.html() === 'Español') {
                swal({
                    title: "Place a valid email",
                    icon: "error",
                    button: "Ok",
                });
            }
            /*    if ($('select[name="language"] option:selected').text() === 'Pt') {
                   swal({
                       title: "Coloque um email válido",
                       icon: "error",
                       button: "Ok",
                   });
               } */
            return false;
        }
        if ($("#email").val().indexOf('@', 0) == -1 || $("#email").val().indexOf('.', 0) == -1) {
            if (btnLanguage.html() === 'English') {
                swal({
                    title: "Colocar un correo electrónico válido",
                    icon: "error",
                    button: "Ok",
                });
            }
            if (btnLanguage.html() === 'Español') {
                swal({
                    title: "Place a valid email",
                    icon: "error",
                    button: "Ok",
                });
            }
            /*  if ($('select[name="language"] option:selected').text() === 'Pt') {
                 swal({
                     title: "Coloque um email válido",
                     icon: "error",
                     button: "Ok",
                 });
             } */
            return false;
        }
        /* if ($(".number-form").val().length <= 5) {
            swal({
                title: "Colocar un número teléfonico válido",
                icon: "error",
                button: "Ok",
            });
            return false;
        } */
        if (isNaN($(".number-form").val())) {
            if (btnLanguage.html() === 'English') {
                swal({
                    title: "Debe contener solo números",
                    icon: "error",
                    button: "Ok",
                });
            }
            if (btnLanguage.html() === 'Español') {
                swal({
                    title: "Must contain only numbers",
                    icon: "error",
                    button: "Ok",
                });
            }
            /*     if ($('select[name="language"] option:selected').text() === 'Pt') {
                    swal({
                        title: "Deve conter apenas números",
                        icon: "error",
                        button: "Ok",
                    });
                } */
            return false;
        }
        if ($("#messageField").val().length < 1) {
            if (btnLanguage.html() === 'English') {
                swal({
                    title: "No has escrito nada aún",
                    icon: "error",
                    button: "Ok",
                });
            }
            if (btnLanguage.html() === 'Español') {
                swal({
                    title: "You haven't written anything yet",
                    icon: "error",
                    button: "Ok",
                });
            }
            /*        if ($('select[name="language"] option:selected').text() === 'Pt') {
                       swal({
                           title: "Você ainda não escreveu nada",
                           icon: "error",
                           button: "Ok",
                       });
                   } */
            return false;
        }
        return send();
    });
    $("#btnSend").on("click", function(event) {

    });

});