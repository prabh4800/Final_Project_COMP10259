$(document).ready(function () {
    // Fix the navigation bar
    $('.header').css({
        position: 'fixed',
        top: '0',
        width: '100%',
        'z-index': '1000'
    });
    $('body').css('padding-top', $('.header').outerHeight() + 'px');

    // Create a lightbox overlay
    $('body').append('<div id="lightbox" style="display:none;"><span id="close">×</span><img id="lightbox-img" src=""><video id="lightbox-video" controls style="display:none;"></video></div>');
    $('#lightbox').css({
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.8)',
        'z-index': '2000',
        'text-align': 'center',
        'line-height': '100vh',
        'justify-content': 'center',
        'align-items': 'center'
    });
    $('#lightbox img, #lightbox video').css({
        'max-width': '90%',
        'max-height': '90%',
        'vertical-align': 'middle'
    });
    $('#lightbox span#close').css({
        position: 'absolute',
        top: '10px',
        right: '20px',
        color: 'white',
        'font-size': '2rem',
        cursor: 'pointer'
    });

    // Show image or video in the lightbox
    $('img#imggallery, video').click(function () {
        $('#lightbox').show();
        if ($(this).is('img')) {
            $('#lightbox-img').attr('src', $(this).attr('src')).show();
            $('#lightbox-video').hide();
        } else {
            $('#lightbox-video').attr('src', $(this).attr('src')).show();
            $('#lightbox-img').hide();
        }
    });

    // Close lightbox
    $('#lightbox, #lightbox span#close').click(function (e) {
        if (e.target !== this) return;
        $('#lightbox').hide();
    });
});