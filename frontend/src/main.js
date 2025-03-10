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

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core"

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

/* import specific icons */
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { faThumbsUp } from "@fortawesome/free-regular-svg-icons"

/* add icons to the library */
library.add(faArrowLeft, faThumbsUp)
1
const app = createApp(App)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app")
