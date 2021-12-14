<template>
	<section id="skills" class="page-section">
		<h1 class="mb-3 dark:text-gray-100">{{ $t('skills.title') }}</h1>

		<div class="grid grid-cols-1 md:grid-cols-1 md:gap-5">
			<div v-for="(item, index) in skills" :key="index" class="mt-2 md:mt-0">
				<a v-if="!!item[2]"
				   :href="item[2]"
				   target="_blank"
				   class="hidden md:inline dark:text-gray-100"
				>
					<span v-html="item[0]"></span>
					<i class="ml-2 fas fa-external-link-alt"></i>
				</a>

				<span v-bind:class="{'inline md:hidden': !!item[2]}"
					  v-html="item[0]"
					  class="dark:text-gray-100"
				></span>

				<div class="relative">
					<div class="overflow-hidden h-4 md:h-6 text-xs flex rounded-full bg-gray-200 dark:bg-gray-600 shadow border">
						<div ref="skill" :data-index="index" :style="'width:0%;transition-delay: ' + (delay + delay * index) + 'ms;'"
							 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-blue-500 to-green-500 dark:from-red-400 dark:to-pink-500 transition-all duration-1000 ease-in-out"
						>
							<span>{{ item[1] }}%</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Skills",
	data() {
		return {
			delay:  0,
			skills: [
				['PHP', 95, 'https://www.php.net/'],
				['HTML', 100],
				['Javascript', 100],
				['CSS, SCSS, SASS', 70],
				['MySQL', 70, 'https://www.mysql.com/it/'],
				['jQuery', 100, 'https://jquery.com/'],
				['Symfony', 100, 'https://symfony.com/'],
				['Angular', 80, 'https://angular.io/'],
				['React', 30, 'https://it.reactjs.org/'],
				['Vue', 90, 'https://vuejs.org/']
			]
		}
	},
	mounted() {
		this.sortSkills();
		this.manageAnimations();
	},
	methods: {
		sortSkills: function () {
			this.skills.sort((a, b) => {
				if (a[1] < b[1]) {
					return 1;
				}

				if (a[1] > b[1]) {
					return -1;
				}

				return 0;
			})
		},
		manageAnimations: function () {
			const observer = new IntersectionObserver(entries => {
				if (entries[0].isIntersecting === true) {
					let index;
					for (let i = 0; i < entries.length; i++) {
						index = parseInt(entries[i].target.dataset.index.trim());

						entries[i].target.style.width = this.skills[index][1] + '%';
					}
				} else {
					for (let i = 0; i < entries.length; i++) {
						entries[i].target.style.width = '0%';
					}
				}
			}, {threshold: [0]});

			for (let i = 0; i < this.$refs.skill.length; i++) {
				observer.observe(this.$refs.skill[i]);
			}
		}
	}
}
</script>
