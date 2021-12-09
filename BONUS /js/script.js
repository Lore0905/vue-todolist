Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        newTodo: '',
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
        deleteTodo: function(index){
            this.todo.splice(index, 1)
        },
        addNewLiTodo: function(){
            this.todo.unshift({
                text: this.newTodo,
                done: false
            });
            this.newTodo = '';
        }
       
    }
})