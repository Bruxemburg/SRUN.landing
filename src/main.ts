import { createApp } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import App from './App.vue'

import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import './styles/font.css'
import './styles/main.css'
import 'virtual:windi-utilities.css'

gsap.registerPlugin(ScrollTrigger)
ScrollTrigger.defaults({
  markers: false,
})

createApp(App).mount('#app')
