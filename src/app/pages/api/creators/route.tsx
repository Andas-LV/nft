import { Pool, Client } from 'pg'
 
const pool = new Pool({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
 
console.log(pool.query('SELECT NOW()'))
 
const client = new Client({
  user: 'dbuser',
  host: 'database.server.com',
  database: 'mydb',
  password: 'secretpassword',
  port: 3211,
})
 
client.connect()
 
console.log(client.query('SELECT NOW()'))
 
client.end()