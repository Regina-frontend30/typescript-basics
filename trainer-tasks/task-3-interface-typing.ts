interface IUser {
    id: number;
    name: string;
    surname: string;
    readonly coins: number;
    age?: number;
    addCoin: (amount: number) => void;
    removeCoin: (amount: number) => void;
    getCoins: () => string;
}

interface IUser {
    anyParameter: string;
}

const Ivan: IUser = {
    id: 1,
    name: "Ivan",
    surname: "Ivanov",
    coins: 5,
    age: 25,

    addCoin(amount) {
        console.log(`Добавлено ${amount}`);
    },

    removeCoin(amount) {
        console.log(`Удалено ${amount}`);
    },

    getCoins() {
        return `Количество монет ${this.coins}`;
    },

    anyParameter: "anyValue",
};

interface Children extends IUser {
    anyParameter2: string;
}

class AnyClass implements Children {
    id = 1;
    name = "Ivan";
    surname = "Ivanov";

    readonly coins = 5;

    private internalCoins = this.coins;

    age = 25;
    anyParameter = "anyValue";
    anyParameter2 = "extra";

    addCoin(amount: number) {
        this.internalCoins += amount;
    }

    removeCoin(amount: number) {
        this.internalCoins -= amount;
    }

    getCoins() {
        return `Количество монет ${this.internalCoins}`;
    }
}
