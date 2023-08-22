const JWT_SECRET_KEY = '9A45CE1634CFFE7FC45CB1A5455AB';
const JWT_TOKEN_EXPIRATION_TIME = '10h';
const JWT_HEADER_KEY = 'jwtToken';
require('dotenv').config()
const MONGO_DB_CONNECTION_URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@twitterclonecluster.r27kpwp.mongodb.net/?retryWrites=true&w=majority`
const USER = 'Account'
const POST = 'Post'


const STATUS_CODES = {
    SUCCESS: 200,
    ERROR_NOT_FOUND: 'USER_NOT_FOUND',
    SERVER_ERROR: 'SERVER_ERROR',
    CONFLICT: 409,
    UNAUTHORIZED: 'UNAUTHORIZED',
    UNAUTHORIZED_TOKEN: 'UNAUTHORIZED_TOKEN',
    FORBIDDEN: 'FORBIDDEN'
}
module.exports = {
    JWT_SECRET_KEY,
    JWT_TOKEN_EXPIRATION_TIME,
    MONGO_DB_CONNECTION_URI,
    USER,
    POST,
    STATUS_CODES,
    JWT_HEADER_KEY
};