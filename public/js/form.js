$('.worker').show();
$('.client').hide();

$('#workerRad').on('click', () => {
    $('.worker').show();
    $('.client').hide();
})

$('#clientRad').on('click', () => {
    $('.worker').hide();
    $('.client').show();
})