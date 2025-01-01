<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
    <div class="w-full h-full flex items-center justify-center">
        <div>
            Home | <el-button class="ml-2" @click="router.push('/blocks/auth/login')">Blocks</el-button>
        </div>
    </div>
</template>