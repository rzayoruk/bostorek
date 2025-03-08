<template>
  <nav
    class="bg-primary px-[7%] py-4 text-white flex justify-between items-center font-mulish"
  >
    <RouterLink  class="font-bold text-2xl" v-bind:to="{ name: 'home' }">{{ brandName }}</RouterLink>
    <ul class="flex gap-x-1">
      <li><RouterLink class="py-2.5 px-8 inline-block" to="/">Home</RouterLink></li>
      <li><RouterLink class="py-2.5 px-8 inline-block" to="/books">Books</RouterLink></li>
      <li><RouterLink class="py-2.5 px-8 inline-block" to="/contact">Contact Us</RouterLink></li>
      <li><RouterLink class="py-2.5 px-8 inline-block" to="/login">Login</RouterLink></li>
      <li><RouterLink class="py-2.5 px-8 inline-block" to="/register">Register</RouterLink></li>
    </ul>
  </nav>
</template>
<script>
import { RouterLink } from 'vue-router'

export default {
  name: "NavBar",
  data() {
    return {
      brandName: "Bostorek",
    }
  },
  methods: {
    goToHome() {
      this.$router.push("/")
    },
    goToBooks() {
      this.$router.push("/books")
    },
    goToAbout() {
      this.$router.push("/about")
    },
    goToContact() {
      this.$router.push("/contact")
    },
    goToLogin() {
      this.$router.push("/login")
    },
    goToRegister() {
      this.$router.push("/register")
    },
  },
}
</script>

<style scoped></style>
