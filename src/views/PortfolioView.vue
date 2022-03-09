<template>
	<main class="w-full">
		<div class="flex flex-col space-y-2 items-center justify-center text-lg text-center md:text-left md:mt-20"> 
			<label class="text-5xl font-semibold tracking-wider text-center">Portfolio</label>
			<label>My personal and team projects, always there if you need.</label>
		</div>

		<div class="grid gap-20 md:gap-28 my-20" v-for="portfolio in portfolios " v-bind:key="portfolio.id"  track-by="portfolio.id">			<Transition :duration="550">
			<div v-if="portfolio.id == 11" class="flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300">

				<div class="md:w-6/12 w-full relative">
					<img class="h-52 object-fill w-52 rounded-2xl mx-auto" v-bind:src=" portfolio.image ">
					<label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5  inset-x-0 mx-auto w-min absolute shadow-xl backdrop-blur dark:text-gray-700">{{ portfolio.date }}</label>
				</div>

				<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:py-4 py-2 px-4 md:px-4">
					<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
						<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">{{ portfolio.title }}</h1>
						<label class="md:text-lg text-base" v-html="portfolio.desc"></label>
					</div>
					
					<div class="flex flex-col space-y-4">
						<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
						<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" >
							<div v-for="techStack in portfolio.tech">
								
								<img v-if="'laravel' == techStack" src="../assets/laravel.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'tailwind'" src="../assets/tailwind.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'bootstrap'" src="../assets/bootstrap.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'mysql'" src="../assets/mysql.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'alpine'" src="../assets/alpine.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'gcp'" src="../assets/gcp.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'html'" src="../assets/html.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'gcp'" src="../assets/gcp.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'jetstream'" src="../assets/jetstream.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'php'" src="../assets/php.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'vue'" src="../assets/vue.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'firebase'" src="../assets/firebase.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else src="../assets/node.png" class="object-contain w-12 snap-center shrink-0">
							</div>
						</div>

					</div>

				</div>			
			</div>
			<div v-else-if="portfolio.id %2!=0 " class="h-auto md:max-h-96 flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300">
				<div class="md:w-6/12 w-full relative">
					<img class="h-full object-cover w-full rounded-2xl" v-bind:src=" portfolio.image ">
					<label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700">{{ portfolio.date }}</label>
				</div>

				<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:py-4 py-2 px-4 md:px-4">
					<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
						<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">{{ portfolio.title }}</h1>
						<label class="md:text-lg text-base" v-html="portfolio.desc"></label>
					</div>
					
					<div class="flex flex-col space-y-4">
						<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
						<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" >
							<div v-for="techStack in portfolio.tech">
								
								<img v-if="'laravel' == techStack" src="../assets/laravel.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'tailwind'" src="../assets/tailwind.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'bootstrap'" src="../assets/bootstrap.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'mysql'" src="../assets/mysql.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'alpine'" src="../assets/alpine.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'gcp'" src="../assets/gcp.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'html'" src="../assets/html.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'gcp'" src="../assets/gcp.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'jetstream'" src="../assets/jetstream.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'php'" src="../assets/php.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else src="../assets/node.png" class="object-contain w-12 snap-center shrink-0">
							</div>
						</div>

					</div>

				</div>			
			</div>
			
			<div v-else class="h-auto md:max-h-96 flex flex-col md:flex-row-reverse space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300 md:space-x-reverse">
				<div class="md:w-6/12 w-full relative">
					<img class="h-full w-full object-cover rounded-2xl" v-bind:src=" portfolio.image ">
					<label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700">{{ portfolio.date }}</label>
				</div>

				<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-6 p-2 ">
					<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0 ">
						<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">{{ portfolio.title }}</h1>
						<label class="md:text-lg text-base" v-html="portfolio.desc"></label>
					</div>
					<div class="flex flex-col space-y-4">
						<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
						<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto" >
							<div v-for="techStack in portfolio.tech">
								
								<img v-if="'laravel' == techStack" src="../assets/laravel.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'tailwind'" src="../assets/tailwind.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'bootstrap'" src="../assets/bootstrap.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'mysql'" src="../assets/mysql.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'alpine'" src="../assets/alpine.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'gcp'" src="../assets/gcp.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'html'" src="../assets/html.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'gcp'" src="../assets/gcp.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'jetstream'" src="../assets/jetstream.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else-if="techStack == 'php'" src="../assets/php.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else src="../assets/node.png" class="object-contain w-12 snap-center shrink-0">
							</div>
						</div>

					</div>
				</div>			
			</div>
			</Transition>


		</div>

		
		
		
	</main>	
</template>



<script >
	import { useLoadPortfolios } from '@/firebase'
	export default{
		name : "portfolio",
		data : function() {
			const portfolios = useLoadPortfolios()
			return { 
				portfolios        		
			}			
		},
		components: {}
	}

</script>

<style scoped>

	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
	main{
		font-family: Poppins, serif;
	}
	/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>