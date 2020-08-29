$('.menu').on('click', function () {

    $('.menu-list').toggleClass('show')
})

$('.get-att').on('click', function () {



    let h1 = $(this).attr('data-forh');
    let p = $(this).attr('data-forp');

    $('.remh').empty();
    $('.remh').append(h1);
    $('.remp').empty();
    $('.remp').append(p);

})

$('.slider').slick({
    autoplay: true,
});