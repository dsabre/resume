<template>
	<section id="home" class="page-section">
		<div class="md:grid md:grid-cols-2 md:gap-0">
			<div>
				<img :src="image1"
					 alt=""
					 class="w-full sm:w-3/4 mb-3 mx-auto md:mr-3 md:mb-0 shadow-lg border-2 border-green-500 dark:border-pink-500 md:transform md:rotate-2"
					 @click="showImageCredits"
				>
			</div>
			<div class="md:pl-3">
				<h1 class="dark:text-gray-100" v-html="$t('home.title')"></h1>

				<Typer class="my-3 dark:text-gray-100"/>

				<p class="my-3 dark:text-gray-100" v-html="$t('home.teaser')"></p>

				<div class="text-center dark:bg-gray-300 py-2 md:text-left md:dark:bg-transparent">
					<a v-for="(link, index) in links"
					   :key="index"
					   :href="link.href"
					   target="_blank"
					   :title="link.title"
					   :class="(index > 0 ? 'ml-3 ' : '') + 'text-' + link.color + ' md:text-gray-600 md:dark:text-gray-400 md:hover:text-' + link.color + ' md:dark:hover:text-' + link.color"
					>
						<i :class="link.icon"></i>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Typer    from "../Typer";
import {toastr} from '../../utils/toastr';

export default {
	name:       "Home",
	components: {Typer},
	data() {
		return {
			image1: require('../../assets/images/home1.jpg'),
			links:  [
				{
					title: 'Facebook',
					href:  'https://www.facebook.com/daniele.sabre',
					color: 'facebook',
					icon:  'fab fa-facebook-f fa-2x'
				},
				{
					title: 'LinkedIn',
					href:  'https://www.linkedin.com/in/danielesabre/',
					color: 'linkedin',
					icon:  'fab fa-linkedin-in fa-2x'
				},
				{
					title: 'Twitter',
					href:  'https://twitter.com/raniel86',
					color: 'twitter',
					icon:  'fab fa-twitter fa-2x'
				},
				{
					title: 'Instagram',
					href:  'https://www.instagram.com/raniel_86/',
					color: 'instagram',
					icon:  'fab fa-instagram fa-2x'
				},
				{
					title: 'GitHub',
					href:  'https://github.com/raniel86',
					color: 'github',
					icon:  'fab fa-github fa-2x'
				},
				{
					title: 'NPM',
					href:  'https://www.npmjs.com/~raniel',
					color: 'npm',
					icon:  'fab fa-npm fa-2x'
				},
				{
					title: 'stackoverflow',
					href:  'https://stackoverflow.com/users/2417027/raniel',
					color: 'stackoverflow',
					icon:  'fab fa-stack-overflow fa-2x'
				}
			]
		};
	},
	methods: {
		showImageCredits: function () {
			toastr.info(this.$t('home.image.credits'));
			// toastrOverrideOptions('info', this.$t('home.image.credits'), {
			// 	timeOut: 10000,
			// 	onclick: () => {
			// 		window.open('https://www.facebook.com/PinKodama', '_blank').focus();
			// 	}
			// });
		}
	}
}
</script>
