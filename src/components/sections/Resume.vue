<template>
	<section id="resume" class="page-section">
		<h1 class="mb-3 dark:text-gray-100">{{ $t('resume.title') }}</h1>

		<div class="grid grid-cols-1 md:grid-cols-2">
			<div class="md:pr-12">
				<h2 class="dark:text-gray-100">{{ $t('resume.experiences.title') }}</h2>
				<ul>
					<li v-for="(item, index) in $t('resume.experiences.items')" :key="index" class="bg-gray-50 border mb-3">
						<div class="flex justify-start">
							<div class="p-3">
								<i class="fa fa-briefcase"></i>
							</div>
							<div class="p-3">
								<span class="uppercase bg-gray-300 py-1 px-2 rounded-full text-xs" v-html="item.period"></span>
								<h5 class="mt-1" v-html="item.name"></h5>
								<p v-html="item.text"></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
			<div class="md:pr-12">
				<hr class="my-3 md:hidden">

				<h2 class="dark:text-gray-100">{{ $t('resume.education.title') }}</h2>
				<ul>
					<li v-for="(item, index) in $t('resume.education.items')" :key="index" class="bg-gray-50 border mb-3">
						<div class="flex justify-start">
							<div class="p-3">
								<i class="fas fa-book"></i>
							</div>
							<div class="p-3">
								<span class="uppercase bg-gray-300 py-1 px-2 rounded-full text-xs" v-html="item.period"></span>
								<h5 class="mt-1" v-html="item.name"></h5>
								<p v-html="item.text"></p>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "Resume"
}
</script>
