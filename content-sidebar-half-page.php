<?php
/**
 * Exit if accessed directly.
 *
 * @package Responsive
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Content/Sidebar Half Template
 *
Template Name:  Content/Sidebar Half Page (Deprecated)
 *
 * @file           content-sidebar-half-page.php
 * @package        Responsive
 * @author         Emil Uzelac
 * @copyright      2003 - 2014 CyberChimps
 * @license        license.txt
 * @version        Release: 1.0
 * @filesource     wp-content/themes/responsive/content-sidebar-half-page.php
 * @link           http://codex.wordpress.org/Theme_Development#Pages_.28page.php.29
 * @since          available since Release 1.0
 */

get_header(); ?>
<?php responsive_wrapper_top(); // before wrapper content hook. ?>
<div id="wrapper" class="site-content clearfix">

	<div class="content-outer container">
		<div class="row">
			<?php responsive_in_wrapper(); // wrapper hook. ?>
			<main id="primary" class="content-area grid col-460" role="main">

				<?php get_template_part( 'loop-header', get_post_type() ); ?>
				<?php if ( have_posts() ) : ?>

					<?php
					while ( have_posts() ) :
						the_post();
						?>

						<?php responsive_entry_before(); ?>
						<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<?php responsive_entry_top(); ?>

							<?php get_template_part( 'post-meta-page', get_post_type() ); ?>

							<div class="post-entry">
								<?php responsive_page_featured_image(); ?>
								<?php the_content( __( 'Read more &#8250;', 'responsive' ) ); ?>
								<?php
								wp_link_pages(
									array(
										'before' => '<div class="pagination">' . __( 'Pages:', 'responsive' ),
										'after'  => '</div>',
									)
								);
								?>
							</div><!-- end of .post-entry -->

							<?php get_template_part( 'post-data', get_post_type() ); ?>

							<?php responsive_entry_bottom(); ?>
						</div><!-- end of #post-<?php the_ID(); ?> -->
						<?php responsive_entry_after(); ?>

						<?php responsive_comments_before(); ?>
						<?php comments_template( '', true ); ?>
						<?php responsive_comments_after(); ?>

						<?php
					endwhile;

					get_template_part( 'loop-nav', get_post_type() );

					else :

						get_template_part( 'loop-no-posts', get_post_type() );

				endif;
					?>

			</main><!-- end of #primary -->

			<?php get_sidebar( 'main-sidebar' ); ?>
		</div>
	</div>
<?php responsive_wrapper_bottom(); // after wrapper content hook. ?>
</div> <!-- end of #wrapper -->
<?php responsive_wrapper_end(); // after wrapper hook. ?>
<?php get_footer(); ?>
