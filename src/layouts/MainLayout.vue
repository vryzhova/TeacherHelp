<template>
  <div class="app-main-layout">
    <Navbar @click="isOpen = !isOpen" />
    <Sidebar v-model="isOpen"/>
    <main class="app-content" :class="{full: !isOpen}">
      <div class="app-page">
        <router-view />
      </div>
    </main>

  </div>
</template>

<script>
import NavbarVue from "@/components/app/Navbar.vue"
import SidebarVue from "@/components/app/Sidebar.vue"
import Navbar from "@/components/app/Navbar.vue"
import Sidebar from "@/components/app/Sidebar.vue"
export default  {
  name: 'main-layout',
  data: () => ({
    isOpen: true
  }),
  components: {
    NavbarVue,
    SidebarVue,
    Navbar,
    Sidebar
}
}
</script>
