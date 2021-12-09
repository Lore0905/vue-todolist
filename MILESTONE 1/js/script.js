Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        todo: [
            {
                text: 'fare la spesa',
                done: false
            },
            {
                text: 'ritirare pacco Amazon',
                done: true
            },
            {
                text: 'cena ore: 20.00',
                done: false
            },
            {
                text: 'fare i compiti',
                done: false
            },
        ],
    },
    methods: {

    }
})