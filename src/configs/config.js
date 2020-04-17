const dotenv = require('dotenv');
dotenv.config();

export const config = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.HOST || 'http://localhost',
    jwt:{
        secret: 'super secret'
    }
};
