import { createApp } from "vue"

// const app = createApp({
//   data() {
//     return {
//       name: "Rıza",
//     }
//   },
// })
// app.mount("#app")

import App from "@/App.vue"
import router from "@/router/router.js"
const app = createApp(App)
app.use(router)
app.mount("#app")
