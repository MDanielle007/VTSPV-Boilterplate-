<template>
	<div
		class="fixed top-0 left-0 right-0 z-50 w-screen h-14 bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex justify-between items-center px-4 gap-4 drop-shadow-md"
	>
		<div class="flex gap-4 justify-center items-center">
			<i
				class="pi pi-bars hover:cursor-pointer"
				style="font-size: 2rem"
				@click="layoutStore.toggleSideBar"
			></i>
		</div>
		<div class="flex gap-4 items-center">
			<ThemeSwitcher />

			<!-- User Profile with Dropdown -->
			<div class="relative profile-menu">
				<button @click="toggleProfileMenu" class="flex items-center focus:outline-none">
					<Avatar
						label="U"
						class="mr-2 cursor-pointer"
						size="medium"
						style="background-color: #ece9fc; color: #2a1261"
						shape="circle"
					/>
				</button>
				<div
					v-show="showProfileMenu"
					class="absolute right-0 mt-2 w-60 bg-white text-gray-800 shadow-lg rounded-lg overflow-hidden z-50 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50"
				>
					<Menu :model="items">
						<template #submenulabel="{ item }">
							<span class="text-primary font-bold">{{ item.label }}</span>
						</template>
						<template #item="{ item, props }">
							<a v-ripple class="flex items-center" v-bind="props.action">
								<span :class="item.icon" />
								<span>{{ item.label }}</span>
								<Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
								<span
									v-if="item.shortcut"
									class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
									>{{ item.shortcut }}</span
								>
							</a>
						</template>
						<template #end>
							<button
								v-ripple
								class="relative overflow-hidden w-full border-0 bg-transparent flex items-start p-2 pl-4 hover:bg-surface-100 dark:hover:bg-surface-800 rounded-none cursor-pointer transition-colors duration-200"
							>
								<Avatar label="U" class="mr-2" shape="circle" />
								<span class="inline-flex flex-col items-start">
									<span class="font-bold">Username</span>
									<span class="text-sm">User role</span>
								</span>
							</button>
						</template>
					</Menu>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import { useLayoutStore } from '@/stores/layoutStore'

const layoutStore = useLayoutStore()

const showProfileMenu = ref(false)

const items = ref([
	{
		label: 'Profile',
		items: [
			{
				label: 'Settings',
				icon: 'pi pi-cog',
				shortcut: '⌘+O',
			},
			{
				label: 'Messages',
				icon: 'pi pi-inbox',
				badge: 2,
			},
			{
				label: 'Logout',
				icon: 'pi pi-sign-out',
				shortcut: '⌘+Q',
			},
		],
	},
	{
		separator: true,
	},
])

const toggleProfileMenu = () => {
	showProfileMenu.value = !showProfileMenu.value
}
</script>
