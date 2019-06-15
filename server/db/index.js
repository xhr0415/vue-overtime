const mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'day2-server'
});

connection.connect((error) => {
  if (error) {
    console.log('链接失败')
  } else {
    console.log('链接成功')
  }
})

module.exports = connection
