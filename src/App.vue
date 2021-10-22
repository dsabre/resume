<template>
	<div id="app" class="d-flex">
		<Sidebar/>

		<div id="content-wrapper" class="d-flex flex-column w-100">
			<Navbar/>

			<Init/>
		</div>
	</div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import 'bootstrap';
import Sidebar from "@/components/Sidebar.vue";
import Navbar from "@/components/Navbar.vue";
import Init from "@/components/sections/Init.vue";

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
		Init,
		Navbar,
		Sidebar
	}
})
export default class App extends Vue {
}
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
