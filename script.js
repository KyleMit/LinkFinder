var $ids = $("[id]");

$ids.popover({
    html: true,
    title: function() {
        return '#' + this.id;
    },
	placement: 'auto left',
    content: function() {
        var href= '#' + this.id;
        var a = $('<a/>')
                  .attr("href", href)
                  .text(href)
				  .css("color","#0A61A0")
                  .addClass('scrollTo');
        return a;
    },
    template: '<div class="popover">' + 
                '<div class="arrow"></div>' + 
                '<div class="popover-inner">' + 
                  '<div class="popover-content">' + 
                    '<p></p>' + 
                  '</div>' + 
                '</div>' + 
              '</div>'
});

var $popovers = $(".popover.in")
if ($popovers.length == 0) {
	$ids.popover('show');
} else {
	$popovers.remove();
}


// when menu item clicked
$("a.scrollTo").click(function () {
    // scroll to position
    navigateToElement(this);
});

function navigateToElement(pageLink) {
    // get href attribute
    var idSelector = $(pageLink).attr('href');
    // make sure we have a valid id
    if ($(idSelector).length > 0) {
        // scroll down page
        scrollToElement(idSelector);
        // reset url hash
        setHash(idSelector);
        // return false so we don't refresh
        //return false;    
    }
}

function scrollToElement(idSelector) {
    $('html, body').animate({
        scrollTop: $(idSelector).offset().top
    }, 1000);
}

function setHash(hash) {
    window.location.hash = hash;
}
