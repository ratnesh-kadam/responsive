/**
 * This file makes customizer preview of margin control faster
 */
// phpcs:ignoreFile
( function( $ ) {
    var api = wp.customize;

    function responsive_dynamic_margin(control, selector) {

        var mobile_menu_breakpoint = api( 'responsive_mobile_menu_breakpoint' ).get();

        if( !responsiveBuilder.is_header_footer_builder && 0 == api( 'responsive_disable_mobile_menu').get() ){
            mobile_menu_breakpoint = 0;
        }
        
        jQuery( 'style#responsive-'+control+'-margin' ).remove();
        var desktopMargin = 'margin-top:'+ api('responsive_'+control+'_top_margin').get()+'px; '+'margin-bottom:'+ api('responsive_'+control+'_bottom_margin').get()+'px; '+'margin-left:'+ api('responsive_'+control+'_left_margin').get()+'px; '+'margin-right:'+ api('responsive_'+control+'_right_margin').get()+'px;';
        var tabletMargin = 'margin-top:'+ api('responsive_'+control+'_tablet_top_margin').get()+'px; '+'margin-bottom:'+ api('responsive_'+control+'_tablet_bottom_margin').get()+'px; '+'margin-left:'+ api('responsive_'+control+'_tablet_left_margin').get()+'px; '+'margin-right:'+ api('responsive_'+control+'_tablet_right_margin').get()+'px;';
        var mobileMargin = 'margin-top:'+ api('responsive_'+control+'_mobile_top_margin').get()+'px; '+'margin-bottom:'+ api('responsive_'+control+'_mobile_bottom_margin').get()+'px; '+'margin-left:'+ api('responsive_'+control+'_mobile_left_margin').get()+'px; '+'margin-right:'+ api('responsive_'+control+'_mobile_right_margin').get()+'px;';
        jQuery( 'head' ).append(
            '<style id="responsive-'+control+'-margin">'
            + selector + '	{ ' + desktopMargin +' }'
            + '@media (max-width: ' + mobile_menu_breakpoint +'px) {' + selector + '	{ ' + tabletMargin + ' } }'
            + '@media (max-width: 544px) {' + selector + '	{ ' + mobileMargin + ' } }'
            + '</style>'
        );

    }

    //Search Margin
    api( 'responsive_search_right_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );
    api( 'responsive_search_left_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );
    api( 'responsive_search_top_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );
    api( 'responsive_search_bottom_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_tablet_right_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_tablet_left_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_tablet_top_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_tablet_bottom_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_mobile_right_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_mobile_left_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_mobile_top_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    api( 'responsive_search_mobile_bottom_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('search', '.search-toggle-open-container .search-toggle-open');
        } );
    } );

    // Footer HTML Margin
    api( 'responsive_footer_html_right_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );
    api( 'responsive_footer_html_left_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );
    api( 'responsive_footer_html_top_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );
    api( 'responsive_footer_html_bottom_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_tablet_right_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_tablet_left_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_tablet_top_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_tablet_bottom_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_mobile_right_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_mobile_left_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_mobile_top_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );

    api( 'responsive_footer_html_mobile_bottom_margin', function( value ) {
        value.bind( function( newval ) {
            responsive_dynamic_margin('footer_html', '#colophon .footer-html');
        } );
    } );
} )( jQuery );