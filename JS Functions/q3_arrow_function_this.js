const user = {
    name: "Suyash",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const user2 = {
    name: "Suyash",

    showName: function() {
        console.log(this.name);
    }
};

user2.showName();