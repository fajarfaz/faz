<template>
	<main class="w-full">
		<div class="flex flex-col space-y-2 items-center justify-center text-lg text-center md:text-left md:mt-20"> 
			<label class="text-5xl font-semibold tracking-wider text-center">Portfolio</label>
			<label>My personal and team projects, always there if you need.</label>
		</div>

		<div class="grid gap-20 md:gap-28 my-20 " v-for="portfolio in portfolios " v-bind:key="portfolio.id"  track-by="portfolio.id">			
			<div v-if="portfolio.id %2!=0 " class="flex flex-col md:flex-row space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300">
				<div class="md:w-6/12 w-full relative">
					<img class="h-full object-fill w-full rounded-2xl" v-bind:src="'../src/assets/images/' + portfolio.image ">
					<label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700">2022</label>
				</div>

				<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:py-4 py-2 px-4 md:px-4">
					<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
						<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">{{ portfolio.title }}</h1>
						<label class="md:text-lg text-base" v-html="portfolio.desc"></label>
					</div>
					<div class="flex flex-col space-y-4">
						<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
						<div class="flex flex-row px-4 space-x-8 overflow-x-auto">
							<img src="../assets/laravel.png" class="object-contain w-12 snap-center shrink-0 ">
							<img src="../assets/tailwind.png" class="object-contain w-12 snap-center shrink-0 ">
							<img src="../assets/mysql.png" class="object-contain w-12 snap-center shrink-0 ">
							<img src="../assets/alpine.png" class="object-contain w-12 snap-center shrink-0 ">
							<img src="../assets/node.png" class="object-contain w-12 snap-center shrink-0 ">
						</div>
					</div>
				</div>			
			</div>
			
			<div v-else class="flex flex-col md:flex-row-reverse space-x-0 md:space-x-10 hover:shadow-md rounded-2xl duration-300 md:space-x-reverse">
				<div class="md:w-6/12 w-full relative">
					<img class="h-full w-full object-cover rounded-2xl" v-bind:src="'../src/assets/images/' + portfolio.image ">
					<label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700">2021</label>
				</div>

				<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
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
								<img  v-else-if="techStack == 'gcp'" src="../assets/gcp.png" class="object-contain w-12 snap-center shrink-0">
								<img v-else src="../assets/node.png" class="object-contain w-12 snap-center shrink-0">
							</div>
						</div>

					</div>
				</div>			
			</div>


		</div>



		<div class="flex flex-col md:flex-row space-x-0 md:space-x-10  hover:shadow-md rounded-2xl duration-300">
			<div class="md:w-6/12 w-full relative ">
				<img class="h-80 object-cover rounded-2xl" src="../assets/images/attendance.jpg">
				<label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700">2022</label>
			</div>

			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-4">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">24Slides Attendance App</h1>
					<label class="md:text-lg text-base">Work as a front end to help develop applications based on laravel, Tailwind, Livewire framework. This application is used to recap employee attendance</label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/laravel.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/tailwind.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/mysql.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/alpine.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/node.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/gcp.png" class="object-contain w-12 nap-center shrink-0">
					</div>
				</div>
			</div>			
		</div>

		<div class="flex flex-col md:flex-row space-x-0 md:space-x-10  hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse">
			<div class="md:w-6/12 w-full relative">
				<img class="h-80 object-cover rounded-2xl" src="../assets/images/catering.jpg">
				<label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700">2021</label>
			</div>
			
			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">24Slides Catering App</h1>
					<label class="md:text-lg text-base">Work as a front end to help develop applications based on laravel, Tailwind, Livewire. This application is used to order food by employees and is accepted by the caterer</label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/laravel.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/tailwind.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/mysql.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/alpine.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/node.png" class="object-contain w-12 nap-center shrink-0">
					</div>
				</div>
			</div>			
		</div>

		<div class="flex flex-col md:flex-row space-x-0 md:space-x-10  hover:shadow-md rounded-2xl duration-300">
			<div class="md:w-6/12 w-full relative">
				<img class="h-80 object-cover w-full rounded-2xl" src="../assets/images/ajt.jpg">
				<label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700">2020</label>
			</div>

			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-4">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">CV Anugerah Jaya Tekindo</h1>
					<label class="md:text-lg text-base">Work as full stack web developer for making 3 website including coffee shop cashier, printing cashier, and company profile</label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/html.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/php.png" class="object-contain w-12 nap-center shrink-0">	
						<img src="../assets/bootstrap.png" class="object-contain w-12 nap-center shrink-0">			
						<img src="../assets/mysql.png" class="object-contain w-12 nap-center shrink-0">														
					</div>
				</div>
			</div>			
		</div>

		<div class="flex space-x-10 flex-col md:flex-row hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse">
			<div class="md:w-6/12 w-full relative">
				<img class="h-full object-cover rounded-2xl" src="../assets/images/employee.jpg">
				<label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700">2019</label>
			</div>
			
			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">24Slides Employee App</h1>
					<label class="md:text-lg text-base">Work as a front end to help develop applications based on laravel & Bootstrap framework. This application is to calculate employee salaries based on attendance and other components</label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/laravel.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/bootstrap.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/mysql.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/alpine.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/jetstream.png" class="object-contain w-24">
					</div>
				</div>
			</div>			
		</div>


		<div class="flex flex-col md:flex-row space-x-0 md:space-x-10  hover:shadow-md rounded-2xl duration-300 flex-row space-x">
			<div class="md:w-6/12 w-full relative">
				<img class="h-full w-full object-cover rounded-2xl" src="../assets/images/cabai.jpg">
				<label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700">2019</label>
			</div>
			
			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">Chilies Decision Support System for BPTP</h1>
					<label class="md:text-lg text-base">Making thesis website as full stack web developer for making decission support system with Case Based Reasoning metode for BPTP JATIM, See here for detail <code><a href="http://eprints.itn.ac.id/3818/">e-Journal</a></code></label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/html.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/php.png" class="object-contain w-12 nap-center shrink-0">	
						<img src="../assets/bootstrap.png" class="object-contain w-12 nap-center shrink-0">			
						<img src="../assets/mysql.png" class="object-contain w-12 nap-center shrink-0">
					</div>
				</div>
			</div>			
		</div>

		<div class="flex space-x-10 flex-col md:flex-row hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse">
			<div class="md:w-6/12 w-full relative">
				<img class="h-full object-cover rounded-2xl w-full" src="../assets/images/kjm.jpg">
				<label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700">2018</label>
			</div>

			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-4">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">Decision Support System for KJM Trenggale</h1>
					<label class="md:text-lg text-base">Making thesis website as full stack web developer for making decission support system with Analytical Hierarchy Process metode, See here for detail <code><a href="http://eprints.itn.ac.id/3818/">e-Journal</a></code></label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/html.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/php.png" class="object-contain w-12 nap-center shrink-0">	
						<img src="../assets/bootstrap.png" class="object-contain w-12 nap-center shrink-0">			
						<img src="../assets/mysql.png" class="object-contain w-12 nap-center shrink-0">											
					</div>
				</div>
			</div>			
		</div>

		<div class="flex flex-col md:flex-row space-x-0 md:space-x-10  hover:shadow-md rounded-2xl duration-300 flex-row space-x">
			<div class="md:w-6/12 w-full relative">
				<img class="h-80 object-cover rounded-2xl w-full" src="../assets/images/adn.jpg">
				<label class="bg-white/30 font-semibold border px-4 py-2 rounded-lg bottom-5 left-5 absolute shadow-xl backdrop-blur dark:text-gray-700">2022</label>
			</div>
			
			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">ADN Homepage</h1>
					<label class="md:text-lg text-base">ADN dev. Homepage, See here for detail <a href="https://fajarfaz.github.io/adn-front/"><code>github.io</code></a></label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/laravel.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/tailwind.png" class="object-contain w-12 nap-center shrink-0">		
						<img src="../assets/alpine.png" class="object-contain w-12 nap-center shrink-0">				
					</div>
				</div>
			</div>			
		</div>

		<div class="flex space-x-10 flex-col md:flex-row hover:shadow-md rounded-2xl duration-300 flex-row-reverse space-x-reverse">
			<div class="md:w-6/12 w-full relative">
				<img class="h-80 object-cover rounded-2xl w-full" src="../assets/images/aim.jpg">
				<label class="bg-white/30 backdrop-blur shadow-lg font-semibold px-4 py-2 rounded-lg bottom-5 right-5 absolute dark:text-gray-700">2015</label>
			</div>

			<div class="md:w-6/12 w-full flex flex-col space-y-10 my-auto md:p-4 p-2">
				<div class="flex flex-col space-y-1 md:space-y-4 mt-2 md:mt-0">
					<h1 class="md:text-4xl text-3xl font-semibold tracking-wider">Agro Indonesia Machinery</h1>
					<label class="md:text-lg text-base">Web for product promotion, sales information and company profile, See here <a href="pusatmesinmalang.com"><code>pusatmesinmalang.com</code></a></label>
				</div>
				<div class="flex flex-col space-y-4">
					<h1 class="text-xl md:text-2xl font-semibold">Tech Stack</h1>
					<div class="flex flex-row px-4 space-x-8 snap-x overflow-x-auto">
						<img src="../assets/html.png" class="object-contain w-12 nap-center shrink-0">
						<img src="../assets/php.png" class="object-contain w-12 nap-center shrink-0">	
						<img src="../assets/bootstrap.png" class="object-contain w-12 nap-center shrink-0">			
						<img src="../assets/mysql.png" class="object-contain w-12 nap-center shrink-0">											
					</div>
				</div>
			</div>			
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
</style>