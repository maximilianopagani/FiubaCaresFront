$(document).ready(function () {
    $('.circle').hover(
        function () {
            $(this).css('background-color', '#40e263');
            $(this).css('color', '#ffffff');
            $(this).css('font-weight', 'bold');
            $(this).find('.view-more').show();
            $(this).find('.tip-title').hide();
        },
        function () {
            $(this).find('.view-more').hide();
            $(this).find('.tip-title').show();
            $(this).removeAttr('style');
    });

    $('.circle').click(function () {
        $('#tipsModal').modal('show');
        $('#tipsWindow').html($(this).find('.tip-title').html());
    })

});