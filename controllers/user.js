const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Client } = require('pg');

exports.login_post = async (req, res, next) => {

    // const client = new Client();
    // await client.connect();
    // const result = await client.query('SELECT * from users');
    // await client.end();

    res.send("ok");
    // const user = await userRepository.getUserByUsername(req.body.username);
    
    // const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    // if (isPasswordCorrect) {
    //     console.log('Password is correct');
    // } else {
    //     console.log('Password is wrong');
    // }

    //return res.se ('login', { title: 'PicoBlog' });
};
