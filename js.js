$("a").click(function (e) {
    e.preventDefault()
    let body = $("body")

    body.find('.active-link').removeClass('active-link')
    $(this).addClass('active-link')

    let active = body.find('.active')
    active.removeClass('active')
    active.attr('hidden', true)

    let element = $($(this).attr('href').toString())
    element.removeAttr('hidden')
    element.addClass('active')

    window.scrollTo(0, 0)
});


// https://stackoverflow.com/a/49986758
function isIE() {
    const ua = window.navigator.userAgent; //Check the userAgent property of the window.navigator object
    const msie = ua.indexOf('MSIE '); // IE 10 or older
    const trident = ua.indexOf('Trident/'); //IE 11

    return (msie > 0 || trident > 0);
}

if (isIE()) {
    alert("Внимание!\n\n" +
        "Данный сайт не оптимизирован для Internet Explorer," +
        " рекомендуется сменить браузер на более современный.")
}
