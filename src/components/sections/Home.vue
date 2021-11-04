<template>
	<section id="home" class="page-section">
		<div class="md:grid md:grid-cols-2 md:gap-0">
			<div>
				<img :src="image1"
					 alt=""
					 class="w-full sm:w-3/4 mb-3 mx-auto md:mr-3 md:mb-0 shadow-lg border-2 border-green-500 dark:border-pink-500 md:transform md:rotate-2"
				>
			</div>
			<div class="md:pl-3">
				<h1 class="dark:text-gray-100" v-html="$t('home.title')"></h1>

				<span class="font-invaders text-red-500">B</span>
				<Typer class="my-3 dark:text-gray-100"/>

				<p class="my-3 dark:text-gray-100" v-html="$t('home.teaser')"></p>

				<div class="text-center dark:bg-gray-300 py-2 md:text-left md:dark:bg-transparent">
					<a href="https://www.facebook.com/daniele.sabre"
					   target="_blank"
					   title="Facebook"
					   class="text-facebook md:text-gray-600 md:dark:text-gray-400 md:hover:text-facebook md:dark:hover:text-facebook"
					>
						<i class="fab fa-facebook-f fa-2x"></i>
					</a>

					<a href="https://www.linkedin.com/in/danielesabre/"
					   target="_blank"
					   class="ml-3 text-linkedin md:text-gray-600 md:dark:text-gray-400 md:hover:text-linkedin md:dark:hover:text-linkedin"
					   title="LinkedIn"
					>
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>

					<a href="https://twitter.com/raniel86"
					   target="_blank"
					   class="ml-3 text-twitter md:text-gray-600 md:dark:text-gray-400 md:hover:text-twitter md:dark:hover:text-twitter"
					   title="Twitter"
					>
						<i class="fab fa-twitter fa-2x"></i>
					</a>

					<a href="https://www.instagram.com/raniel_86/"
					   target="_blank"
					   class="ml-3 text-instagram md:text-gray-600 md:dark:text-gray-400 md:hover:text-instagram md:dark:hover:text-instagram"
					   title="Instagram"
					>
						<i class="fab fa-instagram fa-2x"></i>
					</a>

					<a href="https://github.com/raniel86"
					   target="_blank"
					   class="ml-3 text-github md:text-gray-600 md:dark:text-gray-400 md:hover:text-github md:dark:hover:text-github"
					   title="GitHub"
					>
						<i class="fab fa-github fa-2x"></i>
					</a>

					<a href="https://www.npmjs.com/~raniel"
					   target="_blank"
					   class="ml-3 text-npm md:text-gray-600 md:dark:text-gray-400 md:hover:text-npm md:dark:hover:text-npm"
					   title="GitHub"
					>
						<i class="fab fa-npm fa-2x"></i>
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
	components: {Typer},
	data(){
		return {
			image1: require('../../assets/images/home1.png')
		};
	}
}
</script>
