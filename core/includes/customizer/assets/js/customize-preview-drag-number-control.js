/**
 * This file makes customizer preview of responsive_drag_number_control faster
 */
// phpcs:ignoreFile
( function( $ ) {
    var api = wp.customize;
    var mobile_menu_breakpoint;
    var disable_mobile_menu_flag;

    //Theme Options Layout
    //Box Radius
    api( 'responsive_container_width', function( value ) {
        value.bind( function( newval ) {
            $('.container,[class*=\'__inner-container\'],.site-header-full-width-main-navigation:not(.responsive-site-full-width) .main-navigation-wrapper').css('max-width', newval+'px' );
            $('.site-header-row-layout-standard > .site-header-row-container-inner > .site-container').css('max-width', newval+'px' );
            if ( $(window).width() > 769 ) {
                $( '.floatingb-container' ).css( 'width', newval+'px' );
            } else {
                $( '.floatingb-container' ).css( 'width', '100%' );    
            }
            
        } );
    } );

    api( 'responsive_width', function( value ) {
      value.bind( function( newval ) {
        if(newval !== "contained")
          $('.container,[class*=\'__inner-container\'],.site-header-full-width-main-navigation:not(.responsive-site-full-width) .main-navigation-wrapper').css('max-width', 'none' );
        else
          $('.container,[class*=\'__inner-container\'],.site-header-full-width-main-navigation:not(.responsive-site-full-width) .main-navigation-wrapper').css('max-width', api( 'responsive_container_width' ).get()+'px' );
      } );
    } );

    //Footer Layout -> Footer Widgets
    //Number Of Columns
    api(
        "responsive_footer_widgets_columns",
        function( $swipe ) {

            $swipe.bind(
                function( newval ) {
                    // remove class regex expression function
                    $.fn.removeClassRegEx = function(regex) {
                        var classes = $(this).attr('class');
                        if (!classes || !regex) return false;
                        var classArray = [];
                        classes = classes.split(' ');
                        for (var i = 0, len = classes.length; i < len; i++)
                            if (!classes[i].match(regex)) classArray.push(classes[i]);
                        $(this).attr('class', classArray.join(' '));
                    };

                    $('body').removeClassRegEx('footer-widgets-columns-');
                    jQuery( 'body' ).addClass( "footer-widgets-columns-"+ newval );


                }
            );
        }
    );

    //Blog Layout
    //Main Content Width
    api( 'responsive_blog_content_width', function( value ) {
        value.bind( function( newval ) {
            function isDesktop(x) {
                if (x.matches) { // If media query matches
                    // document.body.style.backgroundColor = "yellow";
                    $('.search:not(.post-type-archive-product) .content-area,.archive:not(.post-type-archive-product):not(.post-type-archive-course) .content-area,.blog:not(.custom-home-page-active) .content-area').css('width', newval+'%' );
                    $('.search:not(.post-type-archive-product) aside.widget-area,.archive:not(.post-type-archive-product) aside.widget-area,.blog:not(.custom-home-page-active) aside.widget-area').css('width',  ( 100 - newval ) + '%' );
                }
            }

            var x = window.matchMedia("(min-width:992px)")
            isDesktop(x) // Call listener function at run time

            x.addListener(isDesktop)
        } );
    } );

    //Blog Post Layout
    //Main Content Width
    api( 'responsive_single_blog_content_width', function( value ) {
        value.bind( function( newval ) {
            function isDesktop(x) {
                if (x.matches) { // If media query matches
                    // document.body.style.backgroundColor = "yellow";
                    $('.single:not(.single-product) .content-area').css('width', newval+'%' );
                    $('.single:not(.single-product) aside.widget-area').css('width',( 100 - newval ) + '%' );
                }
            }
            var x = window.matchMedia("(min-width:992px)")
            isDesktop(x) // Call listener function at run time
            x.addListener(isDesktop)
        } );
    } );

    //Page Layout
    //Main Content Width
    api( 'responsive_page_content_width', function( value ) {
        value.bind( function( newval ) {
            function isDesktop(x) {
                if (x.matches) { // If media query matches
                    $('.page:not(.page-template-gutenberg-fullwidth):not(.page-template-full-width-page):not(.woocommerce-cart):not(.woocommerce-checkout):not(.front-page) .content-area ').css('width', newval+'%' );
                    $('.page aside.widget-area:not(.home-widgets)').css('width', ( 100 - newval ) + '%' );
                }
            }
            var x = window.matchMedia("(min-width:992px)")
            isDesktop(x) // Call listener function at run time
            x.addListener(isDesktop)
        } );
    } );

    //Main Menu Layout
    //Enable Mobile Menu
    api( 'responsive_disable_mobile_menu', function( setting ) {
        disable_mobile_menu_flag = setting.get();
        setting.bind( function (newval) {
            disable_mobile_menu_flag = newval;
            if( 0 == newval) {
                mobile_menu_breakpoint = 0;
            } else {
                mobile_menu_breakpoint = api( 'responsive_mobile_menu_breakpoint' ).get();
            }
        })
    });

    //Mobile Menu Breakpoint
    api( 'responsive_mobile_menu_breakpoint', function( setting ) {
        mobile_menu_breakpoint = setting.get();
        if( 0 == disable_mobile_menu_flag) {
            mobile_menu_breakpoint = 0;
        }
        setting.bind( function (newval) {
            mobile_menu_breakpoint = newval;
            if( 0 == disable_mobile_menu_flag) {
                mobile_menu_breakpoint = 0;
            }
        })
        // ...
    });

    //Hamburger Menu Font Size Preview
    api( 'responsive_hamburger_menu_label_font_size', function( value ) {
        value.bind( function( newval ) {
            $( '.hamburger-menu-label' ).css( 'font-size', newval+'px' );
        } );
    } );

    //Woocommerce Cart Layout
    //Main Content Width
    api( 'responsive_cart_content_width', function( value ) {
        value.bind( function( newval ) {
            function isDesktop(x) {
                if (x.matches) { // If media query matches
                    $('.page.woocommerce-cart .content-area').css('width', newval+'%' );
                }
            }
            var x = window.matchMedia("(min-width:992px)")
            isDesktop(x) // Call listener function at run time
            x.addListener(isDesktop)
        } );
    } );

    //Woocommerce Checkout
    //Main Content Width
    api( 'responsive_checkout_content_width', function( value ) {
        value.bind( function( newval ) {
            function isDesktop(x) {
                if (x.matches) { // If media query matches
                    $('.page.woocommerce-checkout .content-area').css('width', newval+'%' );
                }
            }
            var x = window.matchMedia("(min-width:992px)")
            isDesktop(x) // Call listener function at run time
            x.addListener(isDesktop)
        } );
    } );

    //Product Options Layout
    //Main Content Width
    api( 'responsive_single_product_content_width', function( value ) {
        value.bind( function( newval ) {
            function isDesktop(x) {
                if (x.matches) { // If media query matches
                    $('.single-product.woocommerce .content-area,.single-product.woocommerce .content-area').css('width', newval+'%' );
                    $('.single-product.woocommerce aside.widget-area,.single-product.woocommerce aside.widget-area').css('width', ( 100 - newval ) + '%' );
                }
            }
            var x = window.matchMedia("(min-width:992px)")
            isDesktop(x) // Call listener function at run time
            x.addListener(isDesktop)
        } );
    } );

    //Product Catalog Options Layout
    //Main Content Width
    api( 'responsive_shop_content_width', function( value ) {
        value.bind( function( newval ) {
            function isDesktop(x) {
                if (x.matches) { // If media query matches
                    $('.search.woocommerce .content-area,.archive.woocommerce .content-area').css('width', newval+'%' );
                    $('.search.woocommerce aside.widget-area,.archive.woocommerce aside.widget-area').css('width', ( 100 - newval ) + '%' );
                }
            }
            var x = window.matchMedia("(min-width:992px)")
            isDesktop(x) // Call listener function at run time
            x.addListener(isDesktop)
        } );
    } );

    //Scroll To Top
    //Icon Size
    api( 'responsive_scroll_to_top_icon_size', function( value ) {
        value.bind( function( newval ) {
            $('#scroll').css('height', newval+'px' );
            $('#scroll').css('width', newval+'px' );
        } );
    } );

    //Border Radius
    api( 'responsive_scroll_to_top_icon_radius', function( value ) {
        value.bind( function( newval ) {
            $('#scroll').css('border-radius', newval+'%' );
        } );
    } );

    api( 'responsive_paragraph_margin_bottom', function( value ) {
        value.bind( function( newval ) {
            $('p, .entry-content p').css('margin-bottom', newval+'em' );
        } );
    } );

    // Header -> Main Navigation
    // Main Menu Item Offset
    api( 'responsive_sub_menu_container_top_offset', function( value ) {
        value.bind( function( newval ) {
            var mobileMenuBreakpointValue = api( 'responsive_mobile_menu_breakpoint' ).get();
            if ( $(window).width() > mobileMenuBreakpointValue ) {
                jQuery( 'style#responsive-sub-menu-container-top-offset' ).remove();
                jQuery( 'head' ).append(
                    '<style id="responsive-sub-menu-container-top-offset">'
                    + '.main-navigation .menu.nav-menu > .menu-item-has-children:hover > ul::before, .main-navigation .menu.nav-menu > .page_item_has_children:hover > ul::before {position: absolute, content: "", top: 0, left: 0, width: 100%, transform: translateY(-100%), height: '+newval+'}'
                    + '.main-navigation .menu.nav-menu > li:hover > ul, .main-navigation .menu.nav-menu > li.focus > ul {margin-top: '+newval+'px}'
                    + '</style>'
                );
            }
        } );
    } );

	// Header
	// Header Height
	api( 'responsive_header_height', function( value ) {
		value.bind( function( newval ) {
			var headerHeightHalf = newval / 2;
			var mobileMenuBreakpointValue = api( 'responsive_mobile_menu_breakpoint' ).get();
			$('body:not(.res-transparent-header) .site-header').css({'padding-top':headerHeightHalf+'px', 'padding-bottom':headerHeightHalf+'px'});

			if ( window.matchMedia(`(max-width: ${mobileMenuBreakpointValue}px)`).matches ) {
				$('body.site-header-layout-vertical.site-mobile-header-layout-horizontal:not(.res-transparent-header) .site-header .main-navigation').css('border-top', 0);
			}
		} );
	} );

	// Header
	// Transparent Header Height
	api( 'responsive_transparent_header_height', function( value ) {
		value.bind( function( newval ) {
			var transparentHeaderHeightHalf = newval / 2;
			var mobileMenuBreakpointValue = api( 'responsive_mobile_menu_breakpoint' ).get();
			$('body.res-transparent-header .site-header').css({'padding-top':transparentHeaderHeightHalf+'px', 'padding-bottom':transparentHeaderHeightHalf+'px'});

			if ( window.matchMedia(`(max-width: ${mobileMenuBreakpointValue}px)`).matches ) {
				$('body.site-header-layout-vertical.site-mobile-header-layout-horizontal.res-transparent-header .site-header .main-navigation').css('border-top', 0);
			}
		} )
	} );

	// Header
	// Header Bottom Border
	api( 'responsive_bottom_border', function( value ) {
        value.bind( function( newval ) {
            $('.site-header').css('border-bottom-width', newval+'px' );
        } );
    } );

	// Header -> Transparent Header
	// Transparent Header Bottom Border
	api( 'responsive_transparent_bottom_border', function( value ) {
        value.bind( function( newval ) {
            $('.res-transparent-header .site-header').css('border-bottom-width', newval+'px' );
        } );
    } );

    api( 'responsive_header_popup_close_icon_size', function( value ) {
        value.bind( function( newval ) {
            $('#mobile-drawer .drawer-header .drawer-toggle').css('font-size', newval+'px' );
        } );
    } );

    api( 'responsive_header_icon_size', function( value ) {
        value.bind( function( newval ) {
            $('#main-header .social-icons').css('font-size', newval+'px' );
        } );
    } );

    api( 'responsive_top_row_min_height', function( value ) {
        value.bind( function( newval ) {
            $('#masthead .site-top-header-inner-wrap').css('min-height', newval+'px' );
        } );
    } );

    api( 'responsive_main_row_min_height', function( value ) {
        value.bind( function( newval ) {
            $('#masthead .site-main-header-inner-wrap').css('min-height', newval+'px' );
        } );
    } );

    api( 'responsive_bottom_row_min_height', function( value ) {
        value.bind( function( newval ) {
            $('#masthead .site-bottom-header-inner-wrap').css('min-height', newval+'px' );
        } );
    } );

    api( 'responsive_header_button_border_size', function( value ) {
        value.bind( function( newval ) {
            $('#main-header .header-button').css('border-width', newval+'px' );
        } );
    } );

    api( 'responsive_header_button_border_radius', function( value ) {
        value.bind( function( newval ) {
            newval =  api( 'responsive_header_button_border_style' ).get() === 'none' ? 'none' : newval;
            $('#main-header .header-button').css('border-radius', newval+'px' );
        } );
    } );

    api( 'responsive_mobile_button_border_size', function( value ) {
        value.bind( function( newval ) {
            $('.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button').css('border-width', newval+'px' );
        } );
    } );

    api( 'responsive_mobile_button_border_radius', function( value ) {
        value.bind( function( newval ) {
            $('.mobile-header-button-wrap .mobile-header-button-inner-wrap .mobile-header-button').css('border-radius', newval+'px' );
        } );
    } );

    // Footer row
    api( 'responsive_footer_top_row_min_height', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-top-footer-inner-wrap').css('min-height', newval+'px' );
        } );
    } );

    api( 'responsive_footer_main_row_min_height', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-middle-footer-inner-wrap').css('min-height', newval+'px' );
        } );
    } );

    api( 'responsive_footer_bottom_row_min_height', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-bottom-footer-inner-wrap').css('min-height', newval+'px' );
        } );
    } );

    api( 'responsive_footer_top_row_top_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-top-footer-inner-wrap').css('padding-top', newval+'px' );
        } );
    } );

    api( 'responsive_footer_top_row_bottom_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-top-footer-inner-wrap').css('padding-bottom', newval+'px' );
        } );
    } );

    api( 'responsive_footer_middle_row_top_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-middle-footer-inner-wrap').css('padding-top', newval+'px' );
        } );
    } );

    api( 'responsive_footer_middle_row_bottom_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-middle-footer-inner-wrap').css('padding-bottom', newval+'px' );
        } );
    } );

    api( 'responsive_footer_bottom_row_top_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-bottom-footer-inner-wrap').css('padding-top', newval+'px' );
        } );
    } );

    api( 'responsive_footer_bottom_row_bottom_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#colophon .site-bottom-footer-inner-wrap').css('padding-bottom', newval+'px' );
        } );
    } );

    api( 'responsive_header_search_border_size', function( value ) {
        value.bind( function( newval ) {
            $('.search-toggle-open-container .search-toggle-open.search-toggle-style-bordered').css('border-width', newval+'px' );
        } );
    } );

    api( 'responsive_header_search_border_radius', function( value ) {
        value.bind( function( newval ) {
            $('.search-toggle-open-container .search-toggle-open.search-toggle-style-bordered').css('border-radius', newval+'px' );
        } );
    } );

    api( 'responsive_header_search_icon_size_desktop', function( value ) {
        value.bind( function( newval ) {
            $('.search-toggle-open-container .search-toggle-open .search-toggle-icon').css('font-size', newval+'px' );
        } );
    } );
    api( 'responsive_header_search_icon_size_tablet', function( value ) {
		value.bind( function( to ) {
			var $child = $( '.customizer-responsive_header_search_icon_size_tablet' );
			if ( to ) {
				var style = `<style class="customizer-responsive_header_search_icon_size_tablet">@media screen and ( max-width: 768px ) {.search-toggle-open-container .search-toggle-open .search-toggle-icon {font-size: ${to}px !important;}}</style>`;
				if ( $child.length ) {
					$child.replaceWith( style );
				} else {
					$( 'head' ).append( style );
				}
			} else {
				$child.remove();
			}
		});
	});
    api( 'responsive_header_search_icon_size_mobile', function( value ) {
		value.bind( function( to ) {
			var $child = $( '.customizer-responsive_header_search_icon_size_mobile' );
			if ( to ) {
				var style = `<style class="customizer-responsive_header_search_icon_size_mobile">@media screen and ( max-width: 576px ) {.search-toggle-open-container .search-toggle-open .search-toggle-icon {font-size: ${to}px !important;}}</style>`;
				if ( $child.length ) {
					$child.replaceWith( style );
				} else {
					$( 'head' ).append( style );
				}
			} else {
				$child.remove();
			}
		});
	});
    api( 'responsive_mobile_trigger_icon_size', function( value ) {
        value.bind( function( newval ) {
            $('.mobile-toggle-open-container .menu-toggle-open .menu-toggle-icon').css('font-size', newval+'px' );
        } );
    } );

    api( 'responsive_header_cart_icon_size', function( value ) {
        value.bind( function( newval ) {
            $('.header-cart-wrap .header-cart-button .responsive-svg-iconset').css('font-size', newval+'px' );
        } );
    } );
    api( 'responsive_mobile_cart_icon_size', function( value ) {
        value.bind( function( newval ) {
            $('.header-mobile-cart-wrap .header-cart-button .responsive-svg-iconset').css('font-size', newval+'px' );
        } );
    } );

    api( 'responsive_header_social_border_size', function( value ) {
        value.bind( function( newval ) {
            $('#main-header .social-icons a').css('border-width', newval+'px' );
        } );
    } );

    api( 'responsive_header_social_border_radius', function( value ) {
        value.bind( function( newval ) {
            $('#main-header .social-icons a').css('border-radius', newval+'px' );
        } );
    } );
    api( 'responsive_header_icon_size_tablet', function( value ) {
		value.bind( function( to ) {
			var $child = $( '.customizer-responsive_header_icon_size_tablet' );
			if ( to ) {
				var style = `<style class="customizer-responsive_header_icon_size_tablet">@media screen and ( max-width: 768px ) {#mobile-header .social-icons {font-size: ${to}px !important;}}</style>`;
				if ( $child.length ) {
					$child.replaceWith( style );
				} else {
					$( 'head' ).append( style );
				}
			} else {
				$child.remove();
			}
		});
	});
    api( 'responsive_header_social_border_radius_tablet', function( value ) {
		value.bind( function( to ) {
			var $child = $( '.customizer-responsive_header_social_border_radius_tablet' );
			if ( to ) {
				var style = `<style class="customizer-responsive_header_social_border_radius_tablet">@media screen and ( max-width: 768px ) {#mobile-header .social-icons a {border-radius: ${to}px !important;}}</style>`;
				if ( $child.length ) {
					$child.replaceWith( style );
				} else {
					$( 'head' ).append( style );
				}
			} else {
				$child.remove();
			}
		});
	});
    api( 'responsive_header_social_border_size_tablet', function( value ) {
		value.bind( function( to ) {
			var $child = $( '.customizer-responsive_header_social_border_size_tablet' );
			if ( to ) {
				var style = `<style class="customizer-responsive_header_social_border_size_tablet">@media screen and ( max-width: 768px ) {#mobile-header .social-icons a {border-width: ${to}px !important;}}</style>`;
				if ( $child.length ) {
					$child.replaceWith( style );
				} else {
					$( 'head' ).append( style );
				}
			} else {
				$child.remove();
			}
		});
	});
    api( 'responsive_footer_icon_size', function( value ) {
        value.bind( function( newval ) {
            $('.site-footer-row-container-inner .social-icons').css('font-size', newval+'px' );
        } );
    } );
    api( 'responsive_footer_social_border_size', function( value ) {
        value.bind( function( newval ) {
            $('.site-footer-row-container-inner .social-icons a').css('border-width', newval+'px' );
        } );
    } );

    api( 'responsive_footer_social_border_radius', function( value ) {
        value.bind( function( newval ) {
            $('.site-footer-row-container-inner .social-icons a').css('border-radius', newval+'px' );
        } );
    } );

    api( 'responsive_trigger_border_width', function( value ) {
        value.bind( function( newval ) {
            $('.mobile-toggle-open-container .menu-toggle-open.menu-toggle-style-bordered').css('border-width', newval+'px' );
        } );
    } );

    api( 'responsive_header_social_item_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#main-header .social-icons').css('column-gap', newval+'px' );
        } );
    } );

    api( 'responsive_header_mobile_social_item_spacing', function( value ) {
        value.bind( function( newval ) {
            $('#mobile-header .social-icons').css('column-gap', newval+'px' );
        } );
    } );

    api( 'responsive_footer_social_item_spacing', function( value ) {
        value.bind( function( newval ) {
            $('.site-footer-row-container-inner .social-icons').css('column-gap', newval+'px' );
        } );
    } );

} )( jQuery );
