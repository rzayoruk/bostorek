<template>
  <div class="px-[7%]">
    <SectionHeader title="Register" content="register page" />
    <form class="max-w-[400px] mx-auto mt-20 flex flex-col gap-y-2" action="">
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
      <div>
        <h3 class="text-xl font-light mb-2 text-gray-500">Gender</h3>
        <input
          v-model="formData.gender"
          type="radio"
          name="gender"
          value="male"
          id="male"
          class="focus:outline-0 text-blue-300 focus:ring-0 border-blue-300 transition-all ease-in cursor-pointer p-1"
        />
        <label class="" for="male"> Male</label>
        <br />
        <input
          v-model="formData.gender"
          type="radio"
          name="gender"
          value="female"
          id="female"
          class="focus:outline-0 focus:ring-offset-0 text-pink-300 focus:ring-0 border-pink-300 transition-all ease-in cursor-pointer p-1"
        />
        <label class="" for="female"> Female</label>
      </div>
      <div>
        <label class="text-gray-500" for="age">Age</label>
        <input
          v-model="formData.age"
          class="w-full rounded-sm focus:outline-0 focus:ring-offset-0 focus:ring-0 focus:border-black mt-1 shadow-sm"
          required
          type="number"
          name="age"
          id="age"
        />
      </div>
      <div>
        <h2 class="text-gray-500 mb-2 text-xl font-light" for="age">
          Which PL you like:
        </h2>
        <input
          v-model="formData.languages"
          class="focus:ring-0 focus:outline-0 focus:ring-offset-0 border-amber-300 text-amber-300 transition-all ease-in cursor-pointer rounded-sm"
          type="checkbox"
          id="js"
          value="js"
        />
        <label class="text-gray-500 cursor-pointer" for="js"> JavaScript</label
        ><br />
        <input
          v-model="formData.languages"
          class="focus:ring-0 focus:outline-0 focus:ring-offset-0 border-amber-300 text-amber-300 transition-all ease-in cursor-pointer rounded-sm"
          type="checkbox"
          id="go"
          value="go"
        />
        <label class="text-gray-500 cursor-pointer" for="go"> Go</label><br />
        <input
          v-model="formData.languages"
          class="focus:ring-0 focus:outline-0 focus:ring-offset-0 border-amber-300 text-amber-300 transition-all ease-in cursor-pointer rounded-sm"
          type="checkbox"
          id="php"
          value="php"
        />
        <label class="text-gray-500 cursor-pointer" for="php"> PHP</label><br />
      </div>
    </form>
  </div>
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
        gender: "",
        age: 0,
        languages: [],
      },
    }
  },
  components: {
    SectionHeader,
  },
  methods: {
    updateGender(gender) {
      this.formData.gender = gender
    },
  },
}
</script>
