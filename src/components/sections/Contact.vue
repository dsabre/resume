<template>
	<section id="contact" class="page-section">
		<h1 class="mb-3 dark:text-gray-100">Contact</h1>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-2 h-4/5">
			<div class="hidden md:block">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2820.9300148607927!2d7.530606815922572!3d45.00604307909828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478815a4f1bd244d%3A0x22db17216066c657!2sVia%20Cesare%20Cervetti%2C%206%2C%2010043%20Orbassano%20TO!5e0!3m2!1sit!2sit!4v1635266936944!5m2!1sit!2sit"
						class="border w-full h-full"
						allowfullscreen=""
						loading="lazy"
				></iframe>
			</div>
			<div>
				<h2 class="dark:text-gray-100">Get in touch</h2>
				<form v-on:submit="sendMessage"
					  v-bind:class="{'cursor-wait': sending}"
				>
					<input v-model="name"
						   type="text"
						   placeholder="Name *"
						   class="py-3 px-4 bg-gray-50 dark:bg-gray-300 border rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-pink-500"
						   required
						   :disabled="sending"
						   v-bind:class="{'cursor-wait': sending}"
					>
					<textarea v-model="message"
							  rows="10"
							  class="py-3 px-4 bg-gray-50 dark:bg-gray-300 border rounded-lg placeholder-gray-400 text-gray-900 appearance-none inline-block w-full shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 dark:focus:ring-pink-500 mt-3"
							  placeholder="Message *"
							  required
							  :disabled="sending"
							  v-bind:class="{'cursor-wait': sending}"
					></textarea>

					<button type="submit"
							class="bg-gradient-to-r from-blue-500 to-green-500 dark:from-red-400 dark:to-pink-500 disabled:opacity-50 text-white p-3 rounded-lg w-full mt-3"
							:disabled="!canSubmit"
							v-bind:class="{'hover:from-blue-600 hover:to-green-600 dark:hover:from-red-500 dark:hover:to-pink-600': canSubmit, 'cursor-wait': sending}"
					>
						<i v-show="sending" class="fas fa-circle-notch fa-spin"></i>
						Send message
					</button>
				</form>
			</div>
		</div>

<!--		<div ref="messageSuccess"-->
<!--			 class="bg-green-100 p-3 md:p-5 border border-green-500 text-green-700 rounded fixed inset-x-4 top-4 md:right-4 text-center shadow-lg"-->
<!--		>-->
<!--			<span>Successfully sended message</span>-->
<!--		</div>-->
	</section>
</template>

<script>
export default {
	name:     "Contact",
	data(){
		return {
			name: '',
			message: '',
			sending: false
		};
	},
	computed: {
		canSubmit: function () {
			return this.name.trim() !== '' && this.message.trim() !== '' && !this.sending;
		}
	},
	methods: {
		sendMessage(event){
			event.preventDefault();

			this.sending = true;

			console.log(this.name.trim(), this.message.trim());

			setTimeout(() => {
				this.name = '';
				this.message = '';
				this.sending = false;
			}, 5000);
		}
	}
}
</script>
