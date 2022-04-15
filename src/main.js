import { createApp } from 'vue'
import App from './App.vue'
import CustomButton from './global-components/CustomButton.vue'

// intro 파일
createApp(App)
    .component('CustomButton', CustomButton) // 전역 component 추가
    .mount('#app')
