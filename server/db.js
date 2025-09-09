const { Pool } = require('pg');
require('dotenv').config();

// Use connection string from environment variable
const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
    connectionString,
    max: 20, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // How long a client is allowed to remain idle before being closed
    connectionTimeoutMillis: 2000, // How long to wait before timing out when connecting a new client
    ssl: {
        rejectUnauthorized: false // Required for Supabase
    }
});

// Test the connection
pool.on('connect', () => {
    console.log('Database connected successfully to Supabase');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

module.exports = pool;