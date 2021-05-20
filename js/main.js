$(document).ready(function() {
    handleMobileHeaderNavbar();
})

// handle mobile header navbar
function handleMobileHeaderNavbar() {
    $('.nav-left-item, .nav-right-item').click(function(e) {  
        if ($(this).children('.dropdown-menu').hasClass('dropdown-menu-up') && !e.target.closest('.dropdown-menu')) {
            $(this).children('.dropdown-menu').removeClass('dropdown-menu-up');
        } else {
            $('.nav-left-item, .nav-right-item').find('.dropdown-menu-up').removeClass('dropdown-menu-up');
            $(this).children('.dropdown-menu').addClass('dropdown-menu-up');
        }
    })

    $(document).click(function(e) {
        if (!e.target.closest('.nav-left-item, .nav-right-item, .dropdown-menu')) {
            $('.nav-left-item, .nav-right-item').find('.dropdown-menu-up').removeClass('dropdown-menu-up');
        }
    })
    
    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.dropdown-menu-sub').slideUp();

        $('.dropdown-menu-item').click(function() {
            $(this).children('.dropdown-menu-sub').slideToggle(250);
            console.log('success');
        })
    }
}