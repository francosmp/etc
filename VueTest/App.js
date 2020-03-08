Vue.component('tab-home', {
    template: '<div>Home component</div>'
})
Vue.component('tab-posts', {
    template: '<div>Posts component</div>'
})
Vue.component('tab-archive', {
    template: '<div>Archive component</div>'
})

Vue.component('button-contador-igual', {
    data: {
        countI: 0
    },
    template: '<button v-on:click="countI++">IGUALES You clicked me {{ countI }} times.</button>'
})

Vue.component('button-contador-diferente', {
    data: function() {
        return {
            countD: 0
        }
    },
    template: '<button v-on:click="countD++">DIFERENTES You clicked me {{ countD }} times.</button>'
})

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>',
    created: function() {
        // `this` points to the vm instance
        console.log('todo-item Creada')
    }
})

Vue.component('todo-itemC', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
})

var app = new Vue({
    el: '#app',
    data: function() {
        return {
            name: 'Vuejs',
            message: 'Hello Vue!',
            messageDate: 'You loaded this page on ' + new Date().toLocaleString(),
            seen: true,
            elseif: false,
            todos: [
                { text: 'Learn JavaScript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ],
            messageReverse: 'Message Reverse',
            messageModel: 'Hello Vue!',
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
            ],
            foo: 'bar',
            rawHtml: '<h1>rawHtml</h1>',
            ok: true,
            question: '',
            answer: 'I cannot give you an answer until you ask a question!',
            loginType: 'username',
            numbers: [1, 2, 3, 4, 5],
            newTodoText: '',
            todosC: [{
                    id: 1,
                    title: 'Do the dishes',
                },
                {
                    id: 2,
                    title: 'Take out the trash',
                },
                {
                    id: 3,
                    title: 'Mow the lawn'
                }
            ],
            nextTodoId: 4,
            counter: 0,
            checked: false,
            checkedNames: [],
            picked: '',
            selected: '',
            options: [
                { text: 'One', value: 'A' },
                { text: 'Two', value: 'B' },
                { text: 'Three', value: 'C' }
            ],
            selectedM: [],
            currentTab: 'Home',
            tabs: ['Home', 'Posts', 'Archive'],
            showN: true,
            showS: true
        }
    },
    methods: {
        reverseMessage: function() {
            this.messageReverse = this.messageReverse.split('').reverse().join('')
        },
        getAnswer: function() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function(error) {
                    vm.answer = 'Error! Could not reach the API. ' + error
                })
        },
        even: function(numbers) {
            return numbers.filter(function(number) {
                return number % 2 === 0
            })
        },
        addNewTodo: function() {
            this.todosC.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        },
        greet: function(event) {
            // `this` inside methods points to the Vue instance
            alert('Hello ' + this.name + '!')
                // `event` is the native DOM event
            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function(message) {
            alert(message)
        },
        doThis: function() {
            alert('One time')
        }
    },
    created: function() {
        // `this` points to the vm instance
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
        console.log('App Creada')
        console.log(this.$data)
    },
    computed: {
        // a computed getter
        reversedMessageC: function() {
            // `this` points to the vm instance
            return this.messageReverse.split('').reverse().join('')
        },
        evenNumbers: function() {
            return this.numbers.filter(function(number) {
                return number % 2 === 0
            })
        },
        currentTabComponent: function() {
            return 'tab-' + this.currentTab.toLowerCase()
        }
    },
    watch: {
        // whenever question changes, this function will run
        question: function(newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...'
            this.debouncedGetAnswer()
        }
    }
})