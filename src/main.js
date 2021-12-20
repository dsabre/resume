import Vue              from 'vue';
import App              from './App.vue';
import i18n             from './i18n';
import './assets/css/tailwind.css';
import store            from './store';
import * as Sentry      from "@sentry/vue";
import {Integrations}   from "@sentry/tracing";
import * as packageJson from "../package.json";

Vue.config.productionTip = false;

Sentry.init({
	Vue,
	dsn:              "https://2bca6dc2f4d649bf9beb960566e16c0d@o312959.ingest.sentry.io/6114724",
	integrations:     [
		new Integrations.BrowserTracing({
			tracingOrigins: ["localhost", "dsabre.github.io", /^\//],
		}),
	],
	tracesSampleRate: process.env.NODE_ENV === 'development' ? 1.0 : 0.2,
	environment:      process.env.NODE_ENV,
	release:          packageJson.name + '@' + packageJson.version
});

new Vue({
	i18n,
	store,
	render: h => h(App)
}).$mount('#app');
