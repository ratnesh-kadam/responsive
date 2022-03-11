<?php
/**
 * Header Customizer Options
 *
 * @package Responsive WordPress theme
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Responsive_Mobile_Cart_Customizer' ) ) :
	/**
	 * Header Footer Builder Customizer Options */
	class Responsive_Mobile_Cart_Customizer {

		/**
		 * Setup class.
		 *
		 * @since 1.0
		 */
		public function __construct() {

			add_action( 'customize_register', array( $this, 'customizer_options' ) );

		}

		/**
		 * Customizer options
		 *
		 * @since 0.2
		 *
		 * @param  object $wp_customize WordPress customization option.
		 */
		public function customizer_options( $wp_customize ) {
			if ( ! class_exists( 'WooCommerce' ) ) {
				return;
			}
			/**
			 * Header Builder options
			 */

			$wp_customize->add_section(
				'responsive_customizer_mobile_cart',
				array(
					'title'    => esc_html__( 'Mobile Cart', 'responsive' ),
					'panel'    => 'responsive_header',
					'priority' => 250,
				)
			);

			// Header Cart.
			$header_mobile_cart_label = __( 'Cart Label', 'responsive' );
			responsive_text_control( $wp_customize, 'header_mobile_cart_label', $header_mobile_cart_label, 'responsive_customizer_mobile_cart', 10, '', null, 'sanitize_text_field', 'text' );

			$header_mobile_cart_show_total = __( 'Show Cart Total', 'responsive' );
			responsive_checkbox_control( $wp_customize, 'header_mobile_cart_show_total', $header_mobile_cart_show_total, 'responsive_customizer_mobile_cart', 15, 1 );

			// Header cart Icon.
			$header_mobile_cart_icon_choices = array(
				'shopping-cart' => __( 'Icon 1', 'responsive' ),
				'shopping-bag'  => __( 'Icon 2', 'responsive' ),
			);
			$header_mobile_cart_icon         = __( 'Cart Icon', 'responsive' );
			responsive_select_control( $wp_customize, 'header_mobile_cart_icon', $header_mobile_cart_icon, 'responsive_customizer_mobile_cart', 20, $header_mobile_cart_icon_choices, 'shopping-cart', null );

			// Header cart style.
			$header_mobile_cart_style_choices = array(
				'link'     => __( 'Link', 'responsive' ),
				'slide'    => __( 'Slide', 'responsive' ),
				'dropdown' => __( 'Dropdown', 'responsive' ),
			);
			$header_mobile_cart_style         = __( 'Cart Click Action', 'responsive' );
			responsive_select_control( $wp_customize, 'header_mobile_cart_style', $header_mobile_cart_style, 'responsive_customizer_mobile_cart', 25, $header_mobile_cart_style_choices, 'link', null );

			$header_mobile_cart_popup_side_choices = array(
				'left'  => __( 'Left', 'responsive' ),
				'right' => __( 'Right', 'responsive' ),
			);
			$header_mobile_cart_popup_side         = __( 'Cart Popup Side', 'responsive' );
			responsive_select_control( $wp_customize, 'header_mobile_cart_popup_side', $header_mobile_cart_popup_side, 'responsive_customizer_mobile_cart', 30, $header_mobile_cart_popup_side_choices, 'left', 'responsive_header_mobile_cart_style' );

			$mobile_cart_icon_size_label = esc_html__( 'Icon Size', 'responsive' );
			responsive_drag_number_control( $wp_customize, 'mobile_cart_icon_size', $mobile_cart_icon_size_label, 'responsive_customizer_mobile_cart', 35, 20, null, 200, 1, 'postMessage' );


			$mobile_cart_color_label = __( 'Cart Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart', $mobile_cart_color_label, 'responsive_customizer_mobile_cart', 40, '#333', null );

			$mobile_cart_hover_color_label = __( 'Cart Hover Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart_hover', $mobile_cart_hover_color_label, 'responsive_customizer_mobile_cart', 40, '#333', null );

			$mobile_cart_background_color_label = __( 'Background Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart_background', $mobile_cart_background_color_label, 'responsive_customizer_mobile_cart', 40, '', null );

			$mobile_cart_background_hover_color_label = __( 'Background Hover Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart_background_hover', $mobile_cart_background_hover_color_label, 'responsive_customizer_mobile_cart', 40, '', null );

			$mobile_cart_total_color_label = __( 'Cart Total Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart_total', $mobile_cart_total_color_label, 'responsive_customizer_mobile_cart', 50, '#333', null );

			$mobile_cart_total_hover_color_label = __( 'Cart Total Hover Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart_total_hover', $mobile_cart_total_hover_color_label, 'responsive_customizer_mobile_cart', 50, '#333', null );

			$mobile_cart_total_background_color_label = __( 'Cart Total Background Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart_total_background', $mobile_cart_total_background_color_label, 'responsive_customizer_mobile_cart', 50, '#e9e9e9', null );

			$mobile_cart_total_background_hover_color_label = __( 'Cart Total Background Hover Color', 'responsive' );
			responsive_color_control( $wp_customize, 'mobile_cart_total_background_hover', $mobile_cart_total_background_hover_color_label, 'responsive_customizer_mobile_cart', 50, '#e9e9e9', null );

		}

	}

endif;

return new Responsive_Mobile_Cart_Customizer();