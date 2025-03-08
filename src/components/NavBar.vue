<template>
  <nav
    class="bg-primary px-[7%] py-4 text-white flex justify-between items-center font-mulish"
  >
    <RouterLink class="font-bold text-2xl" v-bind:to="{ name: 'home' }">{{
      brandName
    }}</RouterLink>
    <ul class="flex gap-x-1">
      <li>
        <RouterLink
          class="py-2.5 px-8 inline-block hover:text-[#44b89d] transition ease-out"
          :to="{ name: 'home' }"
          >Home</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="py-2.5 px-8 inline-block hover:text-[#44b89d] transition ease-out"
          :to="{ name: 'books' }"
          >Books</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="py-2.5 px-8 inline-block hover:text-[#44b89d] transition ease-out"
          :to="{ name: 'contact' }"
          >Contact Us</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="py-2.5 px-8 inline-block hover:text-[#44b89d] transition ease-out"
          :to="{ name: 'login' }"
          >Login</RouterLink
        >
      </li>
      <li>
        <RouterLink
          class="py-2.5 px-8 inline-block hover:text-[#44b89d] transition ease-out"
          :to="{ name: 'register' }"
          >Register</RouterLink
        >
      </li>
    </ul>
  </nav>
</template>
<script>
import { RouterLink } from "vue-router"

export default {
  name: "NavBar",
  data() {
    return {
      brandName: "Bostorek",
    }
  },
}
</script>

<style scoped>
.active-link {
  color: #44b89d;
}
</style>
