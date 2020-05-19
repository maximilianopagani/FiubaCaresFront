$(document).ready(function () {
    $('.circle').hover(
        function () {
            $(this).css('background-color', 'rgb(45,45,59)');
            $(this).css('color', '#ffffff');
            $(this).css('font-weight', 'bold');
            $(this).find('.view-more').show();
            $(this).find('.tip-content').hide();
    },
        function () {
            $(this).find('.view-more').hide();
            $(this).find('.tip-content').show();
            $(this).removeAttr('style');
        })

});