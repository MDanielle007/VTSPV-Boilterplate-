<template>
	<button
		type="button"
		class="inline-flex w-8 h-8 p-0 items-center justify-center surface-0 dark:surface-800 border border-white rounded"
		@click="themeChange"
	>
		<i :class="`text-white pi ${iconClass}`" />
	</button>
</template>

<script lang="ts">
import { useThemeStore } from '@/stores/themeStore'
import { mapActions, mapState } from 'pinia'

export default {
	methods: {
		...mapActions(useThemeStore, ['themeChange']),
	},
	computed: {
		rippleActive() {
			return this.$primevue.config.ripple
		},
		...mapState(useThemeStore, ['iconClass']),
	},
}
</script>
