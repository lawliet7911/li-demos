<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import { LayoutThree, Lightning } from '@icon-park/vue-next'
import { defineComponent, ref, h } from 'vue'
import type { Icon } from '@icon-park/vue-next/lib/runtime'
interface NavItem {
  name: string
  path: string
  icon: Icon
  bg: string
}
const navItem = ref<NavItem[]>([
  {
    name: '布局',
    path: '/layout',
    icon: LayoutThree,
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`
  },
  {
    name: '其他',
    path: '/other',
    icon: Lightning,
    bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`
  }
])

const NavIcon = defineComponent({
  name: 'NavIcon',
  setup(props) {
    return () => h(props.icon, { size: '24' })
  },
  props: {
    icon: {
      type: Object,
      required: true
    }
  }
})
const currentActive = ref('/layout')
const isActive = (item: NavItem) => {
  return currentActive.value === item.path
}

const router = useRouter()
const navClick = (item: NavItem) => {
  currentActive.value = item.path
  router.push({
    path: item.path
  })
}
</script>

<template>
  <div class="nav">
    <div
      v-for="item in navItem"
      :key="item.path"
      @click="navClick(item)"
      class="nav-item"
      :style="isActive(item) && { background: item.bg }"
    >
      <nav-icon :icon="item.icon" />
      <span class="nav-item-name">{{ item.name }}</span>
    </div>
  </div>
  <div class="main"><router-view /></div>
</template>

<style lang="scss" scoped>
$nav-height: 48px;
.nav {
  height: $nav-height;
  background-color: var(--color-white);
  box-shadow: rgb(0 0 0 / 8%) 0 1px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .nav-item {
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 10px;
    }
    &.active {
      color: var(--color-primary);
    }
  }
}

.main {
  height: calc(100vh - $nav-height);
  background-color: var(--color-gray-200);
}
</style>
