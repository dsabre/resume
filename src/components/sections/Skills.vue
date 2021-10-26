<template>
	<section id="skills" class="page-section">
		<h1 class="mb-3">{{ $t('skills.title') }}</h1>

		<div class="grid grid-cols-1 md:grid-cols-1 md:gap-5">
			<div v-for="(item, index) in skills" :key="index" class="mt-2 md:mt-0">
				<span class="font-2" v-html="item[0]"></span>
				<div class="relative">
					<div class="overflow-hidden h-4 md:h-6 text-xs flex rounded-full bg-purple-200 shadow-sm border">
						<div ref="skill" :data-index="index" :style="'width:0%;transition-delay: ' + (delay + delay * index) + 'ms;'"
							 class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 transition-all duration-1000 ease-in-out"
						>
							<span class="font-2">{{ item[1] }}%</span>
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
			delay: 50,
			skills: [
				['PHP', 95],
				['HTML', 95],
				['CSS', 70],
				['MySQL', 70],
				['jQuery', 100],
				['Symphony', 100],
				['Angular', 70],
				['React', 30],
				['Vue', 80]
			]
		}
	},
	mounted() {
		this.valuesAnimation();
	},
	methods: {
		valuesAnimation: function () {
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
