const bcrypt = require('bcrypt');

const salt = bcrypt.genSaltSync(10);

const encryption = {
    getHashString(data) {
        return bcrypt.hashSync(data, salt);
    },
    async compare(data, hashed){
        return await bcrypt.compare(data, hashed);
    }
}

module.exports = encryption;