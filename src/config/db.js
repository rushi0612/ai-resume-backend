const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'ai_resume',
  password: 'admin123',
  port: 5432,
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