const { filter } = require('lodash');

interface IUser {
    readonly email: string;
    readonly number: number;
}

const data : IUser[] = require('../data/data.json');

module.exports = {
    searchData: function (email: string, number: number|null) {
        return filter(data, item => item.email === email && (number == null || item.number === number));
    }
};
