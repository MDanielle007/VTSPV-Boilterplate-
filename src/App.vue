<template>
	<Toast />
	<ConfirmDialog pt:headerActions:style="display:none"></ConfirmDialog>
	<div class="w-screen min-h-screen bg-slate-50 dark:bg-slate-950">
		<router-view></router-view>
	</div>
</template>
<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { useThemeStore } from '@/stores/themeStore'

const themeStore = useThemeStore()

onBeforeMount(() => {
	themeStore.initializeTheme()

	// Handle system preference changes only in "auto" mode
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
		const storedTheme = localStorage.getItem('theme') || 'auto'
		if (storedTheme === 'auto') {
			themeStore.darkTheme = e.matches
			document.documentElement.classList.toggle('p-dark', e.matches)
		}
	})
})
</script>
