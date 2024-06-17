import dotenv from 'dotenv';

dotenv.config({
    path : process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod'
});

export const configDatabase = {
    db_host : process.env.DB_HOST,
    db_port : process.env.DB_PORT,
    db_user : process.env.DB_USER,
    db_password : process.env.DB_PASSWORD,
    db_name : process.env.DB_NAME,
};
