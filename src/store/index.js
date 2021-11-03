import Cookies from "js-cookie";
import Vue     from 'vue';
import Vuex    from 'vuex';
import i18n    from '../i18n';

Vue.use(Vuex);

export default new Vuex.Store({
    state:     {
        theme:       Cookies.get('theme') || 'light',
        locale:      Cookies.get('locale') || i18n.fallbackLocale,
        sidebarOpen: false
    },
    mutations: {
        changeTheme(state, theme) {
            this.state.theme = theme;

            // save theme in cookie
            Cookies.set('theme', theme);
        },
        changeLocale(state, locale) {
            this.state.locale = locale;

            // save locale in cookie
            Cookies.set('locale', locale);
        }
    },
    actions:   {
        toggleSidebar() {
            this.state.sidebarOpen = !this.state.sidebarOpen;
        },
        closeSidebar() {
            this.state.sidebarOpen = false;
        },
        openSidebar() {
            this.state.sidebarOpen = true;
        }
    },
    modules:   {}
})
