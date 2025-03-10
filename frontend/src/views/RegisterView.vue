<template>
  <main class="px-[7%]">
    <SectionHeader title="Register" content="register page" />
    <form
      @submit.prevent="submitForm"
      class="max-w-[400px] mx-auto mt-8 flex flex-col gap-y-2"
      action=""
    >
      <div>
        <label class="text-gray-500" for="username">Username</label>
        <input
          v-model="formData.userName"
          class="w-full rounded-sm focus:outline-0 focus:ring-0 focus:border-black mt-1 shadow-sm"
          required
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div>
        <label class="text-gray-500" for="email">Email</label>
        <input
          v-model="formData.email"
          class="w-full rounded-sm focus:outline-0 focus:ring-0 focus:border-black mt-1 shadow-sm"
          required
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div>
        <label class="text-gray-500" for="password">Password</label>
        <input
          v-model="formData.password"
          class="w-full rounded-sm focus:outline-0 focus:ring-0 focus:border-black mt-1 shadow-sm"
          required
          type="password"
          name="password"
          id="password"
        />
      </div>

      <button
        class="px-4 py-2 border cursor-pointer block mx-auto rounded-full bg-primary border-primary text-white"
      >
        Register
      </button>
    </form>
  </main>
</template>

<script>
import SectionHeader from "@/components/SectionHeader.vue"
export default {
  name: "RegisterView",
  data() {
    return {
      formData: {
        userName: "",
        email: "",
        password: "",
      },
    }
  },
  components: {
    SectionHeader,
  },
  methods: {
    submitForm() {
      console.log(this.formData)
    },
  },
}
</script>
