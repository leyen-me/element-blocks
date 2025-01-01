<script setup lang="ts">
import type { Route } from '@/views/blocks/index.vue';

defineProps<{
    routes: Route[]
}>()

const emit = defineEmits(['click'])
</script>

<template>
    <ul class="flex flex-col gap-4">
        <li v-for="route in routes" :key="route.path" :route="route">
            <span class="text-sm font-bold text-[var(--btn-color)]">{{ route.name }}</span>
            <ul class="mt-2 flex flex-col gap-1" v-if="route.children && route.children.length > 0">
                <li class="p-4 text-[var(--btn-color)] rounded-xl cursor-pointer flex items-center gap-2"
                    v-for="child in route.children" :key="route.path + child.path"
                    :class="{ 'bg-[var(--btn-background)]': $route.path === route.path + child.path }"
                    @click.stop="emit('click', route.path + child.path)">
                    <component v-if="child.icon" :is="child.icon" class="size-4" />
                    <RouterLink :class="{ 'text-[var(--btn-active-color)]': $route.path === route.path + child.path }"
                        :to="route.path + child.path">{{
                            child.name }}</RouterLink>
                </li>
            </ul>
        </li>
    </ul>
</template>

<style scoped>
/* li {
    padding: 12px;
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
    cursor: pointer;
}

li.active {
    background-color: #f0f0f0;
    border-radius: var(--base-radius);
    color: rgba(0, 0, 0, 1);
} */
</style>
