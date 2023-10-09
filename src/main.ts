import '@/assets/styles.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'

import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, { ripple: true })

// app.component('Password', Password);
// app.component('Button', Button);
// app.component('InputText', InputText);
// app.component('Checkbox', Checkbox);

app.mount('#app')
