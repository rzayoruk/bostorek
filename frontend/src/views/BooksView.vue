<template>
  <main class="px-[7%]">
    <SectionHeader title="Books Header" content="Books content" />
    <BookList :books="show4" />
    <Pagination
      :perPage="perPage"
      :totalItemsNumber="books.length"
      :currentPage="currentPage"
      @page-changed="changePage"
    />
  </main>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue"
import BookList from "@/components/BookList.vue"
import Pagination from "@/components/Pagination.vue"
import books from "@/db.js"

export default {
  name: "BooksView",
  components: {
    SectionHeader,
    BookList,
    Pagination,
  },
  data() {
    return {
      books: books,
      perPage: 4,
    }
  },
  computed: {
    show4() {
      const start = (this.currentPage - 1) * this.perPage
      const end = start + this.perPage
      return books.slice(start, end)
    },
    currentPage() {
      return Number(this.$route.query.page) || 1
    },
  },
  methods: {
    changePage(page) {
      this.$router.push({ path: "/books", query: { page } })
    },
  },
}
</script>
