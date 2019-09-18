const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://kgzbscxdvxxvsx:72fe6bb80d6e8d2b4afeecbebf070caedb4dfd4cd0058d212ecff61803371c69@ec2-23-21-177-102.compute-1.amazonaws.com:5432/deo6du3t80rnn2?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',{
    host:'ec2-23-21-177-102.compute-1.amazonaws.com',
    dialect: 'postgres',
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});


sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

  module.exports  = sequelize;