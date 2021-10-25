<template>
	<section id="home"
			 class="md:tw-pt-16 md:tw-pl-8 md:tw-h-screen"
	>
		<div class="row">
			<div class="col-md-5">
				<img src="https://picsum.photos/570/740"
					 alt=""
					 class="tw-w-full sm:tw-w-9/12 sm:tw-mx-auto md:tw-w-full"
				>
			</div>
			<div class="col-md-7">
<!--				<button class="tw-p-2 tw-text-white tw-rounded tw-bg-gradient-to-r tw-from-red-500 tw-to-pink-600 hover:tw-from-red-600 hover:tw-to-pink-700">-->
<!--					tailwind test-->
<!--				</button>-->

				<h1 v-html="$t('home.h1')"></h1>

				<Typer/>

				<p id="teaser">{{ $t('home.teaser') }}</p>

				<div id="social-icons">
					<a id="facebook"
					   href="#"
					   target="_blank"
					   data-bs-toggle="tooltip"
					   data-bs-placement="bottom"
					   title="Facebook"
					>
						<i class="fab fa-facebook-f fa-2x"></i>
					</a>

					<a id="linkedin"
					   href="#"
					   target="_blank"
					   class="ms-3"
					   data-bs-toggle="tooltip"
					   data-bs-placement="bottom"
					   title="LinkedIn"
					>
						<i class="fab fa-linkedin-in fa-2x"></i>
					</a>

					<a id="twitter"
					   href="#"
					   target="_blank"
					   class="ms-3"
					   data-bs-toggle="tooltip"
					   data-bs-placement="bottom"
					   title="Twitter"
					>
						<i class="fab fa-twitter fa-2x"></i>
					</a>

					<a id="instagram"
					   href="#"
					   target="_blank"
					   class="ms-3"
					   data-bs-toggle="tooltip"
					   data-bs-placement="bottom"
					   title="Instagram"
					>
						<i class="fab fa-instagram fa-2x"></i>
					</a>

					<a id="github"
					   href="#"
					   target="_blank"
					   class="ms-3"
					   data-bs-toggle="tooltip"
					   data-bs-placement="bottom"
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
