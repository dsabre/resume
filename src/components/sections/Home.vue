<template>
	<section id="home" class="page-section">
		<div class="md:grid md:grid-cols-2 md:gap-0">
			<div>
				<img src="https://picsum.photos/570/740"
					 alt=""
					 class="w-full sm:w-9/12 md:w-full mb-3 mx-auto md:mr-3 md:mb-0"
				>
			</div>
			<div class="md:pl-3">
				<h1 v-html="$t('home.h1')"></h1>

				<Typer class="my-3"/>

				<p class="my-3">{{ $t('home.teaser') }}</p>

				<div class="text-center md:text-left">
					<a id="facebook"
					   href="#"
					   target="_blank"
					   title="Facebook"
					>
						<i class="fab fa-facebook-f fa-2x"></i>
					</a>

					<a id="linkedin"
					   href="#"
					   target="_blank"
					   class="ml-3"
					   title="LinkedIn"
					>
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>

					<a id="twitter"
					   href="#"
					   target="_blank"
					   class="ml-3"
					   title="Twitter"
					>
						<i class="fab fa-twitter fa-2x"></i>
					</a>

					<a id="instagram"
					   href="#"
					   target="_blank"
					   class="ml-3"
					   title="Instagram"
					>
						<i class="fab fa-instagram fa-2x"></i>
					</a>

					<a id="github"
					   href="#"
					   target="_blank"
					   class="ml-3"
					   title="GitHub"
					>
						<i class="fab fa-github fa-2x"></i>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import Typer from "@/components/Typer.vue";

export default {
	name: "Home",
	components: {Typer}
}
</script>

<style scoped>

</style>
