

class First {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    sayHello() {
        console.log(`Привет! меня зовут ${this.name}`);
    }
}

class Second extends First {
    constructor(name, age, skills = []) {
        super(name, age)
        this._skills = skills
    }

    get skills() {
        return this._skills
    }

    set skills(str) {
        this.skills.push(str)
    }

    sayHello() {
        console.log("А я наследуемый метод!")
    }
}

const dev = new Second('Vlad', 23)

dev.skills = 'Первое свойство'
dev.skills = 'Второе свойство'
dev.skills = 'Третье свойство'

console.log(dev)
dev.sayHello()