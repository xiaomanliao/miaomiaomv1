import { createApp } from 'vue' /*从VUE文件中导入createAPP方法*/
import App from './App.vue' /*从APP.vue文件中导入app方法*/

/*执行createApp方法，把App.vue页面当做参数传入，并执行mount方法*/
createApp(App).mount('#app')/*简单理解：把App.vue组件挂在到html中id为app位置*/
