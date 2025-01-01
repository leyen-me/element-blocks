<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useRouter } from 'vue-router'
import { BookA } from 'lucide-vue-next'
import { ref, type Component } from 'vue'
import { baseRoute } from '@/router'
import type { Option } from '@/components/Switcher/index.vue'
import { VueMonacoEditor } from '@guolao/vue-monaco-editor'
import blocks from '@/assets/blocks.json'
import { useDark } from '@vueuse/core'

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}

const isDark = useDark()
const router = useRouter()

export type Route = {
  path: string
  name: string
  icon?: Component
  children?: Route[]
}

const routes: Route[] = [
  {
    path: baseRoute + '/auth',
    name: '认证',
    children: [
      { path: '/login', name: '登录', icon: BookA },
      { path: '/register', name: '注册' },
    ]
  },
]

const handleClick = (path: string) => {
  router.push(path)
}

router.afterEach((to) => {
  document.title = 'Blocks Element' + ' | ' + to.meta.title as string
})



const activeOption = ref<string>('preview')
const options = ref<Option[]>([
  { name: '预览', code: "preview" },
  { name: '代码', code: "code" },
])


const activePlatform = ref<string>('pc')
const platformOptions = ref<Option[]>([
  { name: '电脑端', code: "pc" },
  { name: '平板端', code: "pad" },
  { name: '手机端', code: "mobile" },
])
</script>

<template>
  <nav
    class="flex flex-col h-full w-[var(--app-nav-width)] bg-[var(--app-content-background)] p-[var(--app-nav-padding)] border-r border-[var(--app-nav-border-color)] border-solid">
    <LogoWithName />
    <BlocksNav class="my-8 flex-1 overflow-y-auto" :routes="routes" @click="handleClick" />
    <ThemeSwitcher />
  </nav>
  <main class="w-0 flex-1 h-full flex p-8 pt-0 overflow-hidden flex-col">
    <ul class="flex items-center justify-between gap-2 my-2">
      <Switcher :options="options" v-model="activeOption" />
      <Switcher :options="platformOptions" v-model="activePlatform" />
    </ul>
    <div v-if="activeOption === 'preview'"
      class="h-full overflow-auto border border-solid border-[var(--app-nav-border-color)] rounded-xl mx-auto transition-all duration-300"
      :class="{ 'w-full': activePlatform === 'pc', 'w-[1024px]': activePlatform === 'pad', 'w-[375px]': activePlatform === 'mobile' }">
      <RouterView />
    </div>
    <div v-else
      class="w-full h-full overflow-auto border border-solid border-[var(--app-nav-border-color)] rounded-xl mx-auto transition-all duration-300">
      <VueMonacoEditor class="pt-4" v-model:value="blocks[$route.path as keyof typeof blocks]" language="vue" :theme="'vs-' + (isDark ? 'dark' : 'light')"
        :options="MONACO_EDITOR_OPTIONS" />
    </div>
  </main>
</template>
