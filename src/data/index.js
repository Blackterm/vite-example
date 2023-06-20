export default class User {
    static userList = [
        {
            userName: "murat",
            password: "muro123",
            isAdmin: false,
        },
        {
            userName: "muro",
            password: "123456",
            isAdmin: false,
        },
        {
            userName: "orhan",
            password: "123456",
            isAdmin: true,
        },
        {
            userName: "fikret",
            password: "123456",
            isAdmin: false,
        },
        {
            userName: "admin",
            password: "123456",
            isAdmin: true,
        },
    ];


    static getUserList() {
        return this.userList
    }


    static getUser(value) {
        return this.userList[value]
    }

    static addUser(userName, password, isAdmin) {
        this.userList.push({
            userName: userName,
            password: password,
            isAdmin: isAdmin,
        })
    }

    static async getOnlineList() {
        let url = 'http://webcode.me';
        let res = await fetch(url);

        if (res.ok) {

            let text = await res.text();

            console.log(text);
        } else {
            console.log("hata");
        }
    }
}