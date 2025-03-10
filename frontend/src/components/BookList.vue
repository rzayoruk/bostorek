<template>
  <div
    class="grid gap-x-6 gap-y-8 mt-16 sm:grid-cols-2 md:grid-cols-3 mahmut:grid-cols-5 2xl:grid-cols-4"
  >
    <BookItem v-for="book in books" :key="book.id" :book="book" />
  </div>
</template>
<script>
import BookItem from "@/components/BookItem.vue"
export default {
  name: "BookList",
  components: {
    BookItem,
  },
  props: {
    books: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
