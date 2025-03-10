<template>
  <main class="px-[7%]">
    <SectionHeader :title="book.name" :content="book.author" />
    <font-awesome-icon
      :icon="['fas', 'arrow-left']"
      class="cursor-pointer p-2"
      size="xl"
      @click="$router.back"
    />
    <div class="grid grid-cols-[3fr_2fr] gap-x-5">
      <img
        class="aspect-auto h-full w-full object-cover object-center grow"
        src="../../template/images/kitap-800x450.jpg.webp"
        alt=""
      />
      <div class="flex flex-col">
        <p class="text-xl font-light mb-4 grow max-h-[250px] overflow-y-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          porro rerum quam, beatae aut quia ad tempore eligendi repellat
          nesciunt? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Debitis quia deleniti quod dolores, odio atque!
        </p>
        <div class="mb-6">
          <div class="grid grid-cols-2 border-b border-gray-300 py-1">
            <strong>Page</strong>
            <span class="font-light">{{ book.page }}</span>
          </div>
          <div class="grid grid-cols-2 border-b border-gray-300 py-1">
            <strong>Category</strong>
            <span class="font-light">Fiction</span>
          </div>
          <div class="grid grid-cols-2 border-b border-gray-300 py-1">
            <strong>Rating</strong>
            <span class="font-light">{{ book.rating.toFixed(1) }}</span>
          </div>
          <div class="grid grid-cols-2 border-b border-gray-300 py-1">
            <strong>Upload Date</strong>
            <span class="font-light">{{ book.uploadDate }}</span>
          </div>
        </div>
        <section class="flex flex-col gap-y-2 max-h-[200px] overflow-y-auto">
          <h3 class="text-2xl mb-3">Comments</h3>
          <div class="border border-black p-3">
            <q class="text-base font-light"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sunt vitae consequatur, omnis nemo numquam. Laborum quos nostrum
              aliquid mollitia. </q
            ><br />
            <div class="mt-2 flex justify-between">
              <span class="italic inline-block">Rıza Yörük</span>
              <div class="flex gap-x-3">
                <font-awesome-icon :icon="['far', 'thumbs-up']" />
                <p>8</p>
              </div>
            </div>
          </div>
          <div class="border border-black p-3">
            <q class="text-base font-light"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sunt vitae consequatur, omnis nemo numquam. Laborum quos nostrum
              aliquid mollitia. </q
            ><br />
            <div class="mt-2 flex justify-between">
              <span class="italic inline-block">Rıza Yörük</span>
              <div class="flex gap-x-3">
                <p
                  class="cursor-pointer hover:underline transition-all ease-in"
                >
                  Upvote :
                </p>
                <p>8</p>
              </div>
            </div>
          </div>
          <div class="border border-black p-3">
            <q class="text-base font-light"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              sunt vitae consequatur, omnis nemo numquam. Laborum quos nostrum
              aliquid mollitia. </q
            ><br />
            <div class="mt-2 flex justify-between">
              <span class="italic inline-block">Rıza Yörük</span>
              <div class="flex gap-x-3">
                <p
                  class="cursor-pointer hover:underline transition-all ease-in"
                >
                  Upvote :
                </p>
                <p>8</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>
<script>
import SectionHeader from "@/components/SectionHeader.vue"
import books from "@/db.js"
export default {
  name: "BookDetail",
  components: {
    SectionHeader,
  },
  data() {
    return {
      book: null,
    }
  },
  created() {
    const bookdId = this.$route.params.id
    this.book = books.find((book) => book.id === parseInt(bookdId))
  },
}
</script>
