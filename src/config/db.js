const { Pool } = require('pg');

const pool = new Pool({
 user: process.env.DB_USER,
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME,
host: process.env.DB_HOST,
port: process.env.DB_PORT,
});

const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log('PostgreSQL Connected ✅');
    client.release();
  } catch (error) {
    console.error('PostgreSQL Connection Failed ❌', error.message);
    process.exit(1);
  }
};

module.exports = { pool, connectDB };