<template>
  <div class="px-[7%]">
    <SectionHeader title="Books Header" content="Books content" />
    <BookList/>
  </div>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue"
import BookList from "@/components/BookList.vue"
export default {
  name: "BooksView",
  components: {
    SectionHeader,
    BookList,
  },
}
</script>
