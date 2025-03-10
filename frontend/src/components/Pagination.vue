<template>
  <div class="my-8 flex col-span-full justify-end">
    <div class="flex gap-x-2 items-center">
      <a
        class="text-sm block w-8 h-8 rounded-full text-center leading-8 cursor-pointer lg:hover:border-primary lg:hover:bg-primary lg:hover:text-white font-normal border border-primary bg-white text-primary transition duration-200"
        v-if="paginatorOffset !== 1"
        @click="$emit('page-changed', paginatorOffset - 1)"
        >{{ paginatorOffset - 1 }}</a
      >
      <a
        v-for="n in totalPage - paginatorOffset >= 4
          ? 4
          : totalPage - paginatorOffset + 1"
        class="text-sm block w-8 h-8 rounded-full text-center leading-8 cursor-pointer lg:hover:border-primary lg:hover:bg-primary lg:hover:text-white font-normal border border-primary bg-white text-primary transition duration-200"
        :class="{
          '!bg-primary text-white': paginatorOffset + n - 1 === currentPage,
        }"
        @click="$emit('page-changed', paginatorOffset + n - 1)"
      >
        {{ paginatorOffset + n - 1 }}
      </a>
      <!-- <a v-if="{}"
        class="text-sm block w-8 h-8 rounded-full text-center leading-8 cursor-pointer lg:hover:border-primary lg:hover:bg-primary lg:hover:text-white font-normal border border-primary bg-white text-primary transition duration-200"
      ></a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Pagination",

  props: {
    perPage: {
      type: Number,
      required: true,
    },
    totalItemsNumber: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    totalPage() {
      return Math.ceil(this.totalItemsNumber / this.perPage)
    },
    paginatorOffset() {
      return Math.ceil(this.currentPage / 3) * 3 - 2
    },
  },
}
</script>
