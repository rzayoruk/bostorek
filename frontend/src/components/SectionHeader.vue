<template>
  <h1 class="text-center text-3xl font-bold my-5">{{ title }}</h1>
  <article class="text-center text-xl font-light mt-3">
    {{ content }}
  </article>
</template>

<script>
export default {
  name: "Section Header",
  //   props: ['title', 'content'],
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
}
</script>
