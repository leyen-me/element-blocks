<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="flex items-center justify-center">
    <button class="text-[var(--btn-color)]" @click="toggleDark()">切换主题</button>
  </div>
</template>