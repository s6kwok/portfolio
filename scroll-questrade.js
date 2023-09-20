document.getElementById("demo").innerHTML = '';

// cache the navigation links 
var $navigationLinks = $('#sidebar-questrade > ul > li > a');
// cache (in reversed order) the sections
var $sections = $($(".section").get().reverse());

// map each section id to their corresponding navigation link
var sectionIdTonavigationLink = {};
$sections.each(function() {
    var id = $(this).attr('id');
    sectionIdTonavigationLink[id] = $('#sidebar-questrade > ul > li > a[href=\\#' + id + ']');
});

function highlightNavigation() {
    // get the current vertical position of the scroll bar
    var scrollPosition = $(window).scrollTop();

    // iterate the sections
    $sections.each(function() {
        var currentSection = $(this);
        // get the position of the section
        var sectionTop = currentSection.offset().top;

        // if the user has scrolled over the top of the section  
        if (scrollPosition >= sectionTop - 200) {
            // get the section id
            var id = currentSection.attr('id');
            // get the corresponding navigation link
            var $navigationLink = sectionIdTonavigationLink[id];
            // if the link is not active
            if (!$navigationLink.hasClass('active')) {
                // remove .active class from all the links
                $navigationLinks.removeClass('active');
                // add .active class to the current link
                $navigationLink.addClass('active');
            }
            // we have found our section, so we return false to exit the each loop
            return false;
        }
    });
}

// $(window).scroll( throttle(highlightNavigation,100) );

// if you don't want to throttle the function use this instead:
$(window).scroll( highlightNavigation );