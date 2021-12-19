Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        error: '',
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
            const newTodoNoSpace = this.newTodo.trim();

            if(newTodoNoSpace.length > 3){

                this.todo.unshift({
                    text: newTodoNoSpace,
                    done: false
                });

            }
            else if(newTodoNoSpace.length > 50){
                this.error = 'mi dispaice, ma non può inserire più di 50 caratteri'
            }

            this.newTodo = '';
        },
        doneOrNotDone: function(index){
            this.todo[index].done = !this.todo[index].done;
            console.log(index)
        }
       
    }
})