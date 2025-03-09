<template>
  <div class="rounded-md shadow text-center relative">
    <img class="rounded-t-md" src="../../template/images/b1.jpg" alt="" />
    <span
      class="bg-primary text-white py-1 px-2 rounded-full text-sm inline-block -translate-y-3.5"
      >{{ book.author }}</span
    >
    <div class="px-4 pb-3 text-left">
      <h2 class="font-semibold text-lg">{{ book.name }}</h2>
      <p class="line-clamp-3">
        {{ book.description }}
      </p>
      <div class="flex flex-row justify-between items-center mt-2.5">
        <a class="underline text-blue-700" href="#">Read More...</a>
        <span class="text-xs bg-primary text-white py-1 px-2 rounded-full">{{
          book.uploadDate
        }}</span>
      </div>
      <div
        class="aspect-square text-white p-3 rounded-full absolute -top-6 -right-6 border-2 border-white"
        :class="ratingBadgeClass"
      >
        {{ book.rating.toFixed(1) }}
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: "BookItem",
  props: {
    book: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ratingBadgeClass() {
      if (this.book.rating >= 4) return "bg-green-300"
      else if (this.book.rating >= 3) return "bg-blue-300"
      else return "bg-red-300"
    },
  },
}
</script>
