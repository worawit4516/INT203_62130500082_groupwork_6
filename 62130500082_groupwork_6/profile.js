const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    description: {
        presence: true
    }
}

const app = Vue.createApp({
    data() {
        return {
            firstname: null,
            lastname: null,
            gender: null,
            age: null,
            email: null,
            phone: null,
            description: null,
            image: "./images/2.jpg",
            errors: null,
        }

    },

    methods: {
        checkForm(e) {
            this.errors = validate({
                    firstname: this.firstname,
                    lastname: this.lastname,
                    age: this.age,
                    gender: this.gender,
                    email: this.email,
                    phone: this.phone,
                    description: this.description
                },
                constraints)
            if (this.errors) {
                e.preventDefault();
            }
            if (!this.errors) {
                alert("Your profile is updated successfully.")
            }
        }
    }
})

app.mount('#app')