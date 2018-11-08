<?php /*
Template Name: Homepage
Description: A Page Template for custom page.
*/
get_header(); ?>

			<?php if(have_posts()) : while(have_posts()) : the_post(); ?>

	<div id="main-content" class="visual-container">

		<div class="trysiseiles-wrapper">
			<div class="container">
				<div class="row">
                    <div class="owl-carousel owl-theme">
                        <?php
                        $i = 0;
                        $args = array( 'post_type' => 'tainuotrauka', 'posts_per_page' => 9999 );
                        $loop = new WP_Query( $args );
                        while ( $loop->have_posts() ) : $loop->the_post(); ?>

                            <div class="item">
                                <?php the_post_thumbnail(); ?>
                            </div>

                            <?php $i++; endwhile; wp_reset_postdata(); ?>

                    </div>
				</div>
			</div>
		</div>



	</div>

    <div class="custom-post-type-wrapper">
        <div class="container">
            <div class="row">
                <?php
                $i = 0;
                $args = array( 'post_type' => 'tainuotrauka', 'posts_per_page' => 9999 );
                $loop = new WP_Query( $args );
                while ( $loop->have_posts() ) : $loop->the_post(); ?>
                    <div class="col-md-4">
                        <a href="<?php the_permalink(); ?>">
                            <h2><?php the_title(); ?></h2>
                            <?php the_post_thumbnail('home-list'); ?>
                            <div class="aprasymas">
                                <?php the_content(); ?>
                            </div>
                            <span>Plačiau</span>
                        </a>
                    </div>
                    <?php $i++; endwhile; wp_reset_postdata(); ?>
            </div>
        </div>
    </div>

				
			<?php endwhile; endif; ?>

<?php get_footer(); ?>