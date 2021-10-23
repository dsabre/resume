<template>
	<div id="app" class="d-flex">
		<Sidebar/>

		<div id="content-wrapper" class="d-flex flex-column w-100">
			<Navbar/>

			<Home/>
			<About/>
			<Resume/>
			<Skills/>
			<Contact/>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import 'bootstrap';
import Cookies from 'js-cookie'
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Home from "@/components/sections/Home.vue";
import About from "@/components/sections/About.vue";
import Resume from "@/components/sections/Resume.vue";
import Skills from "@/components/sections/Skills.vue";
import Contact from "@/components/sections/Contact.vue";

// https://getbootstrap.com/docs/5.1/getting-started/introduction/
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
	mounted() {
		const prevLocale = Cookies.get('locale') || this.$i18n.fallbackLocale;
		this.$i18n.locale = prevLocale;
		this.$root.$emit('sidebar-locale', prevLocale);
	}
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
