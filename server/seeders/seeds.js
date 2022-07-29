const db = require('../config/connection');
const { User, Application } = require('../models');

db.once('open', async () => {
  await User.deleteMany();

  await User.create({
    username: 'sbooks',
    email: 'sbooks@gmail.com',
    password: 'passwordsb',
    name: 'Susan Books',
    admin: '1' 
    });

await User.create({
    username: 'csmith',
    email: 'csmith@gmail.com',
    password: 'passwordcs',
    name: 'Caroline Smith',
    admin: '1' 
    });

await User.create({
    username: 'bgray',
    email: 'bgray@gmail.com',
    password: 'passwordbg',
    name: 'Brian Gray',
    admin: '1' 
    });

await User.create({
    username: 'cjones',
    email: 'cjones@gmail.com',
    password: 'passwordcj',
    name: 'Charles Johnes',
    admin: '1' 
    });

await User.create({
    username: 'tbrown',
    email: 'tbrown@gmail.com',
    password: 'passwordtb',
    name: 'Taylor Brown',
    admin: '1' 
    });

await User.create({
    username: 'rbragg',
    email: 'rbragg@gmail.com',
    password: 'passwordrb',
    name: 'Riley Bragg',
    admin: '0' 
    });

await User.create({
    username: 'hbeckett',
    email: 'hbeckett@gmail.com',
    password: 'passwordhb',
    name: 'Haley Beckett',
    admin: '0' 
    });

await User.create({
    username: 'jgreen',
    email: 'jgreen@gmail.com',
    password: 'passwordjg',
    name: 'Jayden Green',
    admin: '0' 
    });

await User.create({ 
    username: 'rthomas',
    email: 'rthomas@gmail.com',
    password: 'passwordrt',
    name: 'Ryan Thomas',
    admin: '0' 
    });

await User.create({
    username: 'acastle',
    email: 'acastle@gmail.com',
    password: 'passwordac',
    name: 'Aria Castle',
    admin: '0' 
    });
 
console.log('users seeded');

await Application.deleteMany();

await Application.create({
    createdAt: '06/23/2022',
    name: 'Pamela Rams',
    birthday: '05/12/2011',
    phoneNumber: '123-345-9876',
    addressStreet: '123 Easy Lane',
    addressCity: 'Baltimore',
    state: 'Maryland',
    zipCode: '54392',
    guardianName: 'Richard Tuner',
    guardianPhone: '123-434-8769',
    grade: '6',
    school: 'Biscuit Run School',
    currentStatus: '1'
 });

 await Application.create({
    createdAt: '07/23/2022',
    name: 'Jonathan Sims',
    birthday: '08/21/2010',
    phoneNumber: '903-234-8392',
    addressStreet: '24 Floyd Street',
    addressCity: 'Floyd',
    state: 'Virginia',
    zipCode: '12392',
    guardianName: 'Katherine Sims',
    guardianPhone: '123-345-6683',
    grade: '7',
    school: 'Mountain View School',
    currentStatus: '0'
 });

 await Application.create({
    createdAt: '04/20/2022',
    name: 'Kate Lopez',
    birthday: '02/27/2009',
    phoneNumber: '583-238-2318',
    addressStreet: '73736 Track Trail',
    addressCity: 'Wilmington',
    state: 'North Carolina',
    zipCode: '43627',
    guardianName: 'Maria Lopez',
    guardianPhone: '949-392-9302',
    grade: '8',
    school: 'Whistler School',
    currentStatus: '2'
 });

 await Application.create({
    createdAt: '06/23/2022',
    name: 'Stella Grain',
    birthday: '01/25/2007',
    phoneNumber: '213-123-4563',
    addressStreet: '21931 Reasons Court',
    addressCity: 'Five Valleys',
    state: 'New York',
    zipCode: '12912',
    guardianName: 'Randall Grain',
    guardianPhone: '743-123-5984',
    grade: '10',
    school: 'Four Seasons School',
    currentStatus: '1'
 });

 await Application.create({
    createdAt: '06/23/2022',
    name: 'Marie Joyce',
    birthday: '05/12/2008',
    phoneNumber: '321-329-2312',
    addressStreet: '10294 Rainy Days Drive',
    addressCity: 'Lewes',
    state: 'Delaware',
    zipCode: '32028',
    guardianName: 'James Joyce',
    guardianPhone: '126-392-5803',
    grade: '9',
    school: 'Journey School',
    currentStatus: '0'
 });
     

  

  console.log('applications seeded');

  process.exit();
});
