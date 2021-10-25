<template>
	<div id="app">
		<div class="flex" :class="theme">
			<Sidebar/>

			<div id="content-wrapper" class="flex flex-col w-full">
				<Navbar/>

				<Home/>
				<About/>
				<Resume/>
				<Skills/>
				<Contact/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Cookies from 'js-cookie'
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/sections/Home.vue";
import About from "@/components/sections/About.vue";
import Resume from "@/components/sections/Resume.vue";
import Skills from "@/components/sections/Skills.vue";
import Contact from "@/components/sections/Contact.vue";

// https://tailwindcss.com/
// https://fontawesome.com/v5.15/icons?d=gallery&p=2&m=free
// https://startbootstrap.github.io/startbootstrap-sb-admin-2/
// https://templates.iqonic.design/profyl/html/gradient-color/index.html
// http://edinareact.ibthemespro.com/home-light
// https://html5up.net/hyperspace
// https://bslthemes.site/myour/
// https://bslthemes.site/cvio/

@Component({
	components: {
		Contact,
		Skills,
		Resume,
		About,
		Home,
		Navbar,
		Sidebar
	},
	data() {
		return {
			theme: 'light'
		}
	},
	mounted() {
		this.localeHandler();
		this.themeHandler();

		this.$root.$on('app-theme', this.themeHandler);
	},
	methods: {
		themeHandler: function (locale) {
			this.theme = Cookies.get('theme') || locale || this.theme;
		},
		localeHandler: function () {
			const prevLocale = Cookies.get('locale') || this.$i18n.fallbackLocale;
			this.$i18n.locale = prevLocale;
			this.$root.$emit('sidebar-locale', prevLocale);
		}
	}
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
