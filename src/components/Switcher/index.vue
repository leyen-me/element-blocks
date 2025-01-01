<script setup lang="ts">
defineProps<{
    modelValue: string
    options: Option[]
}>()
const emit = defineEmits(['update:modelValue'])
export type Option = {
    name: string
    code: string
}
</script>

<template>
    <div class="flex items-center gap-2 bg-[var(--btn-box-background)] rounded-full p-1.5">
        <li class="cursor-pointer text-[var(--btn-color)] px-3 py-1.5 rounded-full text-sm" v-for="option in options"
            :key="option.code"
            :class="{ '!text-[var(--btn-background)] bg-[var(--btn-active-color)]': modelValue === option.code }"
            @click="emit('update:modelValue', option.code)">{{
                option.name }}</li>
    </div>
</template>