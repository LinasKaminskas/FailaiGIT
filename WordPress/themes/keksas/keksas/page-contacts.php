<?php /*
Template Name: Contacts
Description: A Page Template for custom page.
*/
get_header(); ?>

			<?php if(have_posts()) : while(have_posts()) : the_post(); ?>

	<div id="main-content" class="visual-container">
		<div class="container">
			<div class="row">
				<div class="col-md-8">
					<h1><?php the_title(); ?></h1>
					<div class="rte">
                        <?php the_content(); ?>
					</div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2305.9095063740474!2d25.276687315448623!3d54.69362008064356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94045eef6a05%3A0x10edf732d4dd0b5e!2sKonstitucijos+pr.+8%2C+Vilnius+09309!5e0!3m2!1sen!2slt!4v1540997510417" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>


				</div>
				<div class="col-md-4">
					<div class="kontaktas">
						<p>Konstitucijos pl. 8</p>
						<p>UAB keksas.lt</p>
						<p>+370 0000</p>
					</div>
				
				</div>
			</div>
		</div>
	</div>
				
			<?php endwhile; endif; ?>

<?php get_footer(); ?>