import type { App } from 'vue'
import BlocksNav from '@/components/BlocksNav/index.vue'
import Switcher from '@/components/Switcher/index.vue'
import ThemeSwitcher from '@/components/ThemeSwitcher/index.vue'
import LogoWithName from '@/components/LogoWithName/index.vue'

export const setupGlobalComponents = (app: App) => {
    app.component('BlocksNav', BlocksNav)
    app.component('Switcher', Switcher)
    app.component('ThemeSwitcher', ThemeSwitcher)
    app.component('LogoWithName', LogoWithName)
}

