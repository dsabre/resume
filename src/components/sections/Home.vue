<template>
	<section id="home"
			 class="md:tw-pt-16 md:tw-pl-8 md:tw-h-screen"
	>
		<div class="md:tw-grid md:tw-grid-cols-2 md:tw-gap-0">
			<div>
				<img src="https://picsum.photos/570/740"
					 alt=""
					 class="tw-w-full sm:tw-w-9/12 md:tw-w-full tw-mb-3 tw-mx-auto md:tw-mr-3 md:tw-mb-0"
				>
			</div>
			<div class="md:tw-pl-3">
				<h1 v-html="$t('home.h1')"></h1>

				<Typer class="tw-hidden"/>

				<p class="tw-my-3">{{ $t('home.teaser') }}</p>

				<div class="tw-text-center md:tw-text-left">
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
					   class="tw-ml-3"
					   title="LinkedIn"
					>
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>

					<a id="twitter"
					   href="#"
					   target="_blank"
					   class="tw-ml-3"
					   title="Twitter"
					>
						<i class="fab fa-twitter fa-2x"></i>
					</a>

					<a id="instagram"
					   href="#"
					   target="_blank"
					   class="tw-ml-3"
					   title="Instagram"
					>
						<i class="fab fa-instagram fa-2x"></i>
					</a>

					<a id="github"
					   href="#"
					   target="_blank"
					   class="tw-ml-3"
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
import * as bootstrap from "bootstrap";

export default {
	name: "Home",
	components: {Typer},
	mounted(): void {
		const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
		tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}
}
</script>

<style scoped>

</style>
