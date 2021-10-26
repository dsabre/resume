<template>
	<section id="home" class="page-section">
		<div class="md:grid md:grid-cols-2 md:gap-0">
			<div>
				<img src="https://picsum.photos/570/740"
					 alt=""
					 class="w-full sm:w-3/4 mb-3 mx-auto md:mr-3 md:mb-0"
				>
			</div>
			<div class="md:pl-3">
				<h1 v-html="$t('home.h1')"></h1>

				<Typer class="my-3"/>

				<p class="my-3">{{ $t('home.teaser') }}</p>

				<div class="text-center md:text-left">
					<a href="#"
					   target="_blank"
					   title="Facebook"
					   class="text-facebook md:text-gray-600 md:hover:text-facebook"
					>
						<i class="fab fa-facebook-f fa-2x"></i>
					</a>

					<a href="#"
					   target="_blank"
					   class="ml-3 text-linkedin md:text-gray-600 md:hover:text-linkedin"
					   title="LinkedIn"
					>
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>

					<a href="#"
					   target="_blank"
					   class="ml-3 text-twitter md:text-gray-600 md:hover:text-twitter"
					   title="Twitter"
					>
						<i class="fab fa-twitter fa-2x"></i>
					</a>

					<a href="#"
					   target="_blank"
					   class="ml-3 text-instagram md:text-gray-600 md:hover:text-instagram"
					   title="Instagram"
					>
						<i class="fab fa-instagram fa-2x"></i>
					</a>

					<a href="#"
					   target="_blank"
					   class="ml-3 text-github md:text-gray-600 md:hover:text-github"
					   title="GitHub"
					>
						<i class="fab fa-github fa-2x"></i>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Typer from "../Typer";

export default {
	name: "Home",
	components: {Typer}
}
</script>
