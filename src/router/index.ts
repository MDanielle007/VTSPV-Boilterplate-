import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/app/AppLayout.vue'
import AuthLayout from '@/layouts/auth/AuthLayout.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/auth',
			component: AuthLayout,
			children: [
				{
					path: 'login',
					name: 'login',
					component: () => import('../views/auth/LoginPage.vue'),
				},
				{
					path: 'register',
					name: 'register',
					component: () => import('../views/auth/RegisterPage.vue'),
				},
			],
		},
		{
			path: '/',
			component: AppLayout,
			children: [
				{
					path: '/',
					name: 'home',
					component: () => import('../views/HomeView.vue'),
				},
				{
					path: '/about',
					name: 'about',
					component: () => import('../views/AboutView.vue'),
				},
			],
		},
	],
})

export default router
