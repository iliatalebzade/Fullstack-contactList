const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/rootDir')

const filePath = path.join(rootDir, "data", "usersData.json");

class User {
    constructor(id, fName, lName, phone) {
        this.id = id;
        this.fName = fName;
        this.lName = lName;
        this.phone = phone;
    }

    addContact() {
        fs.readFile(filePath, (err, fileContent) => {
            const todos = JSON.parse(fileContent);
            todos.push(this);
        })
    }

    static getUsers(callBack) {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) return [];
            const contacts = JSON.parse(fileContent)
            callBack(contacts)
        })
    }
}

module.exports = User;