<template>
	<div class="flex flex-col">
		<div>
			<div class="mx-auto mb-6 w-full h-12">
				<PlaceholderItem title="image" />
			</div>
			<h2 class="mt-6 text-3xl font-extrabold text-slate-900 dark:text-slate-100">
				Create an account
			</h2>
			<p class="text-slate-800 dark:text-slate-400">
				Enter your details below to create your account
			</p>
		</div>

		<!-- Error Alert -->
		<div
			v-if="error"
			class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
			role="alert"
		>
			<span class="block sm:inline">{{ error }}</span>
		</div>

		<div class="mt-6">
			<div>
				<label class="block text-gray-700 dark:text-gray-400">Username</label>
				<IconField fluid>
					<InputIcon>
						<i class="pi pi-user" />
					</InputIcon>
					<InputText type="text" v-model="username" fluid placeholder="myUsername123" />
				</IconField>
			</div>
			<div>
				<label class="block mt-4 text-gray-700 dark:text-gray-400">Email address</label>
				<IconField fluid>
					<InputIcon>
						<i class="pi pi-envelope" />
					</InputIcon>
					<InputText type="text" v-model="email" fluid placeholder="name@company.com" />
				</IconField>
			</div>
			<div>
				<label class="block mt-4 text-gray-700 dark:text-gray-400">Password</label>
				<IconField fluid>
					<InputIcon>
						<i class="pi pi-lock" />
					</InputIcon>
					<Password
						v-model="password"
						fluid
						toggleMask
						placeholder="Enter your password"
					/>
				</IconField>
			</div>
			<Button fluid @click="handleSubmit" label="Sign Up" class="mt-6 dark:text-white" />
		</div>
		<div class="text-sm text-gray-600 dark:text-gray-400 mt-4">
			Already have an account?

			<router-link :to="{ name: 'login' }"
				><span class="text-slate-950 dark:text-slate-100 font-bold"
					>Sign In</span
				></router-link
			>
		</div>
	</div>
</template>
<script lang="ts" setup>
import { useToast } from 'primevue'
import { ref } from 'vue'
import PlaceholderItem from '@/components/PlaceholderItem.vue'

const toast = useToast()

const username = ref('')
const email = ref('')
const password = ref('')
const error = ref('')

const handleSubmit = async () => {
	error.value = '' // Clear previous errors

	console.log({
		username: username.value,
		email: email.value,
		password: password.value,
	})

	toast.add({
		severity: 'info',
		summary: 'Login Attempt',
		detail: `Email: ${email.value}, Password: ${password.value}`,
		life: 3000,
	})
}
</script>
<style></style>
