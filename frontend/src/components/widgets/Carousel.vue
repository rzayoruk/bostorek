<template>
  <div class="carousel w-full relative">
    <div class="carousel-items">
      <Transition name="fade" mode="out-in">
        <div :key="selectedItem.imageUrl" class="relative">
          <img
            class="w-full"
            :style="{ height: height, objectFit: 'cover' }"
            :src="selectedItem.imageUrl"
            alt=""
          />
          <div class="caption w-full h-full absolute top-0 left-0">
            <div
              class="box font-light px-[7%] h-full flex justify-center flex-col text-white items-center"
            >
              <h6 class="text-xl">{{ selectedItem.subtitle }}</h6>
              <h1 class="text-3xl font-bold">{{ selectedItem.title }}</h1>
              <p class="">{{ selectedItem.description }}</p>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <div class="controls absolute bottom-2 left-4 flex gap-x-2">
      <span
        @click="prevItem"
        class="text-4xl border flex justify-center items-center w-10 h-10 text-center rounded-full text-[#44b89d] cursor-pointer"
        ><p><</p></span
      >
      <span
        @click="nextItem"
        class="text-4xl border flex justify-center items-center w-10 h-10 text-center rounded-full text-[#44b89d] cursor-pointer"
        ><p>></p></span
      >
    </div>
  </div>
</template>

<script>
//import { type } from "node:os"

export default {
  name: "Carousel",
  props: {
    items: {
      type: Array,
      required: true,
    },
    height: "100%",
  },
  data() {
    return {
      currentItemIndex: 0,
      selectedItem: null,
    }
  },
  created() {
    this.selectedItem = this.items[0]
  },
  methods: {
    nextItem() {
      this.currentItemIndex = (this.currentItemIndex + 1) % this.items.length
      this.selectedItem = this.items[this.currentItemIndex]
    },
    prevItem() {
      this.currentItemIndex =
        (this.currentItemIndex - 1 + this.items.length) % this.items.length
      this.selectedItem = this.items[this.currentItemIndex]
    },
  },
}
</script>
<style scoped>
.caption {
  background-color: rgba(0, 0, 0, 0.6);
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 1s ease;
}
</style>
