<template>
	<div id="app">
		<div class="flex" :class="theme">
			<Sidebar/>

			<div id="content-wrapper" class="flex flex-col w-full dark:bg-gray-700 pb-3">
				<Navbar/>

				<Home/>
				<hr class="my-3 md:hidden dark:border-gray-600">
				<About/>
				<hr class="my-3 md:hidden dark:border-gray-600">
				<Resume/>
				<hr class="my-3 md:hidden dark:border-gray-600">
				<Skills/>
				<hr class="my-3 md:hidden dark:border-gray-600">
				<Contact/>
			</div>
		</div>
	</div>
</template>

<script>
import AOS     from 'aos';
import Navbar  from "./components/Navbar";
import About   from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Home    from "./components/sections/Home";
import Resume  from "./components/sections/Resume";
import Skills  from "./components/sections/Skills";
import Sidebar from "./components/Sidebar";

// https://tailwindcss.com/
// https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free
// https://startbootstrap.github.io/startbootstrap-sb-admin-2/
// https://templates.iqonic.design/profyl/html/gradient-color/index.html
// http://edinareact.ibthemespro.com/home-light
// https://html5up.net/hyperspace
// https://bslthemes.site/myour/
// https://bslthemes.site/cvio/
// https://michalsnik.github.io/aos/

AOS.init();

export default {
	name:       'App',
	components: {
		Contact,
		Skills,
		Resume,
		About,
		Home,
		Navbar,
		Sidebar
	},
	computed:   {
		theme: function () {
			return this.$store.state.theme;
		}
	},
	mounted() {
		this.createInvadersFont();
		this.$i18n.locale = this.$store.state.locale;
	},
	methods: {
		createInvadersFont: function () {
			const newStyle = document.createElement('style');
			newStyle.appendChild(document.createTextNode(`
				@font-face {
					font-family: 'Invaders';
					src: url('./fonts/invaders_from_space/invaders.from.space.[fontvir.us].ttf') format('truetype');
				}
			`));
			document.head.appendChild(newStyle);
		}
	}
}
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
