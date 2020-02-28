var app = new Vue({
    el: '#app',
    data: {
        todos: [{
            text: "make an app",
            completed: false,
        },{
            text: "declare victory",
            completed: false,
        },{
            text: "profit",
            completed: false,
        }],
        message: '',
        show: 'all',
    },
    computed: {
        activeTodos() {
            return this.todos.filter(item => {
                return !item.completed;
            });
        },
        filteredTodos(){
            if (this.show === 'active')
                return this.todos.filter(item => {
                    return !item.completed;
                });
            if (this.show === 'completed')
                return this.todos.filter(item => {
                    return item.completed;
                });
            return this.todos;
        },
    },
    methods: {
        addItem() {
            this.todos.push({text: this.message, completed: false});
            this.message = '';
        },
        deleteItem(item) {
            var index = this.todos.indexOf(item);
            if (index > -1)
                this.todos.splice(index,1);
        }, 
        showAll(){
            this.show = 'all';
        },
        showActive(){
            this.show = 'active';
        },
        showCompleted(){
            this.show = 'completed';
        },
        deleteCompleted(){
            this.todos = this.todos.filter(item => {
                return !item.completed;
            });
        },
    }
});