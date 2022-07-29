const faker = require('faker');
const db = require('../config/connection');
const { User, Application } = require('../models');

const seed = async () => {
    try {
        await db.sync({ force: true })

        //declare a variable and set it equal to an array
        let users = []

        //this for loop decides how many datapoints you will create
        //if you want to change the amount, just change the number in the for loop
        for (let i = 0; i < 100; i++) {
            const name = faker.name.fullName()

            // the keys in this user object are set equal to the fake information
            let newUser = {
                id: faker.datatype.number(),
                username: faker.internet.userName(),
                email:faker.internet.email(name).toLowerCase(),
                password: faker.internet.password(),
                name: name,
                admin: faker.random.boolean(),
            }

            // For each fake user you create, you're going to push them into the user array you declare above
            users.push(newUser)
        }

          // For each user in the array, you are going to create a new user instance in the database
    users.forEach(async (user) => {
        await User.create(user)
    })
} catch(err) {
    console.log(err)
}

    let applications = []

    for(let i = 0; i < 100; i++ ) {
        const appName = faker.name.fullName()

        let newApplication = {
            createdAt: faker.date.recent(),
            name:  appName,
            birthday: faker.date.birthdate({ min: 11, max: 18, mode: 'age'}),
            phoneNumber: faker.phone.phoneNumberFormat(),
            addressStreet: faker.address.streetAddress(),
            addressCity: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            guardianName: faker.name.fullName(),
            guardianPhone: faker.phone.phoneNumberFormat(),
            grade: faker.datatype.number({'min': 6, 'max': 12}),
            school: faker.company.name(),
            currentStatus: faker.datatype.number({'min': 0, 'max': 2}),
        }

        applications.push(newApplication)
    }
    applications.forEach(async (application) => {
        await Application.create(application)
        
      })
     }
    
