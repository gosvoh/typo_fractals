$("a").click(function (e) {
    e.preventDefault()
    let active = $("body").find('.active')
    active.removeClass('active')
    active.attr("hidden", true)
    let element = $($(this).attr('href').toString())
    element.removeAttr("hidden")
    element.addClass("active")

});