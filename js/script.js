const { createApp } = Vue;

createApp({
    data() {
        return {

            todos: [
                {
                    text: 'Learn Vue.js',
                    done: false
                },
                {
                    text: 'Learn React.js',
                    done: false
                },
                {
                    text: 'Learn Angular.js',
                    done: false
                },
                {
                    text: 'Learn Node.js',
                    done: false
                }
            ],
            newItem: {
                text: '',
                done: false
            }
        };
    },

    methods: {
        addItem() {
            this.todos.push({ ...this.newItem });
            this.newItem = {
                todo: '',
                completed: false
            };
        }
    }
}).mount("#app");