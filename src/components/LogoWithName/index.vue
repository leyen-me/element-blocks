<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const handleClick = () => {
    router.push('/')
}
</script>

<template>
    <div class="flex items-center gap-2 cursor-pointer" @click="handleClick">
        <img src="@/assets/logo.svg" alt="logo" class="size-8" />
        <span class="text-lg font-bold text-[var(--btn-color)]">Blocks Element</span>
    </div>
</template>