<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>

    const app = Vue.createApp({
        data() {
            return {
                nameInput: '',
                emailInput: '',
                passwordInput: ''
            };
        },
        methods: {
            handleSubmit() {
                console.log('Name:', this.nameInput);
                console.log('Email:', this.emailInput);
                console.log('Password:', this.passwordInput);
            }
        }
    });

    app.mount('#app');
