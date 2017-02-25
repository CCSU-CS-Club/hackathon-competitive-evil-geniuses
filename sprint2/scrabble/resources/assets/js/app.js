import './bootstrap';


Vue.component('Board', require('./components/Board.vue'));
Vue.component('Stand', require('./components/Stand.vue'));
Vue.component('Game', require('./components/Game.vue'));

// Define Event bus.
const Event = new Vue({});
window.Event = Event;

const app = new Vue({
    el: '#app',
});
