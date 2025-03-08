<template>
  <div>HomeView</div>
  <img v-bind:src="imgSource" v-bind:alt="imgAlt" />
  <RouterLink v-bind:to="booksURL">Books page</RouterLink>
</template>

<script>
import { RouterLink } from "vue-router"

export default {
  name: "HomeView",
  data() {
    return {
      imgSource:
        "https://blog.karmaturkiye.com/wp-content/uploads/2021/02/daftpunk.jpg",
      imgAlt: "daft punk image",
      booksURL: "/books",
    }
  },
}
</script>
