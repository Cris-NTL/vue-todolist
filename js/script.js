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
            },
            error: false
        };
    },

    methods: {
        addItem() {
            if (this.newItem.text.trim().length > 0) {
                this.error = false;
                this.todos.unshift(this.newItem);
                this.newItem = {
                    text: '',
                    done: false
                };
            } else {
                this.error = true;
            }
        }
    }
}).mount("#app");