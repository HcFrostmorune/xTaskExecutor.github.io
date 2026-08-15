/*!
 * Clean Blog v1.0.0 (http://startbootstrap.com)
 * Copyright 2015 Start Bootstrap
 * Licensed under Apache 2.0 (https://github.com/IronSummitMedia/startbootstrap/blob/gh-pages/LICENSE)
 */

 /*!
 * Hux Blog v1.6.0 (http://startbootstrap.com)
 * Copyright 2016 @huxpro
 * Licensed under Apache 2.0 
 */

// Tooltip Init
// Unuse by Hux since V1.6: Titles now display by default so there is no need for tooltip
// $(function() {
//     $("[data-toggle='tooltip']").tooltip();
// });


// make all images responsive
/* 
 * Unuse by Hux
 * actually only Portfolio-Pages can't use it and only post-img need it.
 * so I modify the _layout/post and CSS to make post-img responsive!
 */
// $(function() {
//  $("img").addClass("img-responsive");
// });

// responsive tables
$(document).ready(function() {
    $("table").wrap("<div class='table-responsive'></div>");
    $("table").addClass("table");
});

// responsive embed videos
$(document).ready(function() {
    $('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="youtube.com"]').addClass('embed-responsive-item');
    $('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
    $('iframe[src*="vimeo.com"]').addClass('embed-responsive-item');
});

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var $nav = $('.navbar-custom'),
            headerHeight = $nav.outerHeight(),
            bannerHeight  = $('.intro-header .container').height();
        $(window).on('scroll', {
                previousTop: 0
            },
            function() {
                var currentTop = $(window).scrollTop(),
                    $catalog = $('.side-catalog');

                //check if user is scrolling up by mouse or keyborad
                if (currentTop < this.previousTop) {
                    //if scrolling up...
                    if (currentTop > 0 && $nav.hasClass('is-fixed')) {
                        $nav.addClass('is-visible');
                    } else {
                        $nav.removeClass('is-visible is-fixed');
                    }
                } else {
                    //if scrolling down...
                    $nav.removeClass('is-visible');
                    if (currentTop > headerHeight && !$nav.hasClass('is-fixed')) $nav.addClass('is-fixed');
                }
                this.previousTop = currentTop;


                //adjust the appearance of side-catalog
                $catalog.show()
                if (currentTop > (bannerHeight + 41)) {
                    $catalog.addClass('fixed')
                } else {
                    $catalog.removeClass('fixed')
                }
            });
    }
});

// Smooth theme interactions.
jQuery(function($) {
    var $nav = $('.navbar-custom');
    var $toggle = $('.navbar-toggle');
    var $menu = $('#huxblog_navbar');
    var $search = $('.search-page');
    var $searchInput = $('#search-input');
    var $searchClose = $('.search-icon-close');

    function setMenu(open) {
        $menu.toggleClass('in', open);
        $toggle.attr('aria-expanded', open ? 'true' : 'false');
        $('body').toggleClass('menu-open', open);
    }

    function setSearch(open) {
        $search.toggleClass('search-active', open).attr('aria-hidden', open ? 'false' : 'true');
        $('body').toggleClass('search-open', open);
        if (open) {
            window.setTimeout(function() { $searchInput.trigger('focus'); }, 220);
        }
    }

    $toggle.on('click', function() { setMenu(!$menu.hasClass('in')); });
    $('.search-icon a').on('click', function(event) {
        event.preventDefault();
        setMenu(false);
        setSearch(true);
    });
    $searchClose.on('click keydown', function(event) {
        if (event.type === 'click' || event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setSearch(false);
        }
    });
    $(document).on('keydown', function(event) {
        if (event.key === 'Escape') {
            setMenu(false);
            setSearch(false);
        }
    });
    $(window).on('resize', function() {
        if ($(window).width() >= 768) setMenu(false);
    });
});
