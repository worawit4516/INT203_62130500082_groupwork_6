const constraints = {
    firstname: {
        presence: {
            message: "is required"
        }
    },
    lastname: {
        presence: {
            message: "is required"
        }
    },
    age: {
        presence: {
            message: "is required"
        },
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: {
            message: "is required"
        }
    },
    email: {
        presence: {
            message: "is required"
        },
        email: true
    },
    phone: {
        presence: {
            message: "is required"
        },
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    description: {
        presence: {
            message: "is required"
        }
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