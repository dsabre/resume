<template>
	<section id="contact" class="page-section">
		<h1 class="mb-3 dark:text-gray-100">{{ $t('contact.title') }}</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-2 h-4/5">
			<div class="hidden md:block">
				<iframe :src="mapUrl"
						class="border-0 w-full h-full ring-2 ring-green-500 dark:ring-pink-500"
						allowfullscreen=""
						loading="lazy"
				></iframe>
			</div>
			<div>
				<h2 class="hidden md:block dark:text-gray-100">{{ $t('contact.form.title') }}</h2>
				<form v-on:submit="sendMessage"
					  v-bind:class="{'cursor-wait': sending}"
				>
					<input v-model="name"
						   type="text"
						   :placeholder="$t('contact.form.name.placeholder')"
						   class="py-3 px-4 bg-gray-50 dark:bg-gray-300 border dark:border-0 placeholder-gray-500 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-pink-500"
						   required
						   :disabled="sending"
						   v-bind:class="{'cursor-wait': sending}"
					>
					<textarea v-model="message"
							  rows="10"
							  class="py-3 px-4 bg-gray-50 dark:bg-gray-300 border dark:border-0 placeholder-gray-500 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-pink-500 mt-3"
							  :placeholder="$t('contact.form.message.placeholder')"
							  required
							  :disabled="sending"
							  v-bind:class="{'cursor-wait': sending}"
					></textarea>

					<button type="submit"
							class="styled font-2 w-full mt-3"
							:disabled="!canSubmit"
							v-bind:class="{'hover:from-blue-600 hover:to-green-600 dark:hover:from-red-500 dark:hover:to-pink-600': canSubmit, 'cursor-wait': sending}"
					>
						<i v-show="sending" class="fas fa-circle-notch fa-spin"></i>
						{{ $t('contact.form.submit') }}
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script>
import {toastr}           from '../../utils/toastr';
import * as axios         from 'axios';
import {urlContactServer} from "../../../site.config";

export default {
	name: "Contact",
	data() {
		return {
			name:               '',
			message:            '',
			sending:            false,
			showMessageSuccess: false,
			showMessageError:   false,
			hideMessageTimeout: 5000
		};
	},
	computed: {
		canSubmit: function () {
			return this.name.trim() !== '' && this.message.trim() !== '' && !this.sending;
		},
		mapUrl:    function () {
			if (this.$store.state.theme === 'dark') {
				return 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3489.4399787023744!2d7.5314866!3d45.0059065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478815a4f1bd244d%3A0x22db17216066c657!2sVia%20Cesare%20Cervetti%2C%206%2C%2010043%20Orbassano%20TO!5e1!3m2!1sit!2sit!4v1635271588047!5m2!1sit!2sit';
			}
			return 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.9300148607927!2d7.530606815922572!3d45.00604307909828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478815a4f1bd244d%3A0x22db17216066c657!2sVia%20Cesare%20Cervetti%2C%206%2C%2010043%20Orbassano%20TO!5e0!3m2!1sit!2sit!4v1635266936944!5m2!1sit!2sit';
		}
	},
	methods:  {
		sendMessage(event) {
			event.preventDefault();

			this.sending = true;

			window.grecaptcha.ready(() => {
				window.grecaptcha.execute(process.env.VUE_APP_RECAPTCHA_SITE_KEY, {action: 'sendMessage'}).then(token => {
					axios.post(urlContactServer + '/send-message', {
						name:            this.name.trim(),
						message:         this.message.trim(),
						grecaptchaToken: token,
						siteKey:         process.env.VUE_APP_TELEGRAMBOT_SITE_KEY,
						extraData:       {
							theme:  this.$store.state.theme,
							locale: this.$store.state.locale
						}
					}).then(() => {
						this.name    = '';
						this.message = '';
						this.sending = false;

						toastr.success(this.$t('contact.form.messages.success'));
					}).catch(() => {
						this.sending = false;

						toastr.error(this.$t('contact.form.messages.error'));
					});
				});
			});
		}
	}
}
</script>
