<script setup lang="ts">
import { supabase } from "../supabase"
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');
const name = ref('');

const handleSubmit = async () => {
	console.log('Name:', name.value);
	console.log('Email:', email.value);
	console.log('Password:', password.value);
	try {
		const { error, data } = await supabase.auth.signUp({
			email: email.value,
			password: password.value,
			options: {
				data: {
					userName: name.value,
				},
			},
		});

		if (error !== null) {
			throw error;
		}

		if (data) {
			router.push({
				name: 'about',
			});
		}
	} catch (error) {
		console.error('Sign-up error:', error);
		alert(error);
	}
};

// onMounted(async () => {
// 	const { data, error } = await supabase
// 		.from('auth.users')
// 		.select()
// 	console.log(data);

// })

</script>

<template>
	<main class="w-full max-w-2xl mx-auto p-6">
		<div class="mt-40 bg-white border border-gray-300 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
			<div class="p-4 sm:p-7">
				<div class="text-center">
					<h1 class="block text-2xl font-bold text-gray-800 dark:text-white">Sign Up</h1>
					<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
						Already registered?
						<a class="text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
							href="../examples/html/signup.html">
							Sign in here
						</a>
					</p>
				</div>

				<div class="mt-5">
					<!-- Form -->
					<form @submit.prevent="handleSubmit">
						<div class="grid gap-y-4">
							<div>
								<label for="name" class="block text-sm mb-2 dark:text-white">Your Name</label>
								<div class="relative">
									<input type="name" id="name" name="name" v-model="name"
										class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm" required
										aria-describedby="name-error">
								</div>
								<p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email
									address so we can get back to you</p>
							</div>
							<!-- End Form Group -->
							<!-- Form Group -->
							<div>
								<label for="email" class="block text-sm mb-2 dark:text-white">Email address</label>
								<div class="relative">
									<input type="email" id="email" name="email" v-model="email"
										class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm" required
										aria-describedby="email-error">
								</div>
								<p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email
									address so we can get back to you</p>
							</div>
							<!-- End Form Group -->
							<!-- Form Group -->
							<div>
								<div class="flex justify-between items-center">
									<label for="password" class="block text-sm mb-2 dark:text-white">Password</label>
								</div>
								<div class="relative">
									<input type="password" id="password" name="password" v-model="password"
										class="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm" required
										aria-describedby="password-error">
								</div>
								<p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
							</div>
							<!-- End Form Group -->
							<button type="submit"
								class="mt-12 w-1/2 mx-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Sign
								up</button>
						</div>
					</form>
					<!-- End Form -->
				</div>
			</div>
		</div>
	</main>
</template>
