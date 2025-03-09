<template>
  <div class="rounded-md shadow text-center relative">
    <img class="rounded-t-md" src="../../template/images/b1.jpg" alt="" />
    <span
      class="bg-primary text-white py-1 px-2 rounded-full text-sm inline-block -translate-y-3.5"
      >{{ author }}</span
    >
    <div class="px-4 pb-3 text-left">
      <h2 class="font-semibold text-lg">{{ name }}</h2>
      <p class="line-clamp-3">
        {{ description }}
      </p>
      <div class="flex flex-row justify-between items-center">
        <a class="underline text-blue-700" href="#">Read More...</a>
        <span class="text-xs bg-primary text-white py-1 px-2 rounded-full"
          >{{ uploadDate }}</span
        >
      </div>
      <div
        class="aspect-square bg-emerald-400 text-white p-3 rounded-full absolute -top-6 -right-6 border-2 border-white"
      >
        {{ rating.toFixed(1) }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "BookItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    uploadDate: {
      type: String,
      required: true,
    },
  },
}
</script>
