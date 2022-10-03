class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise() {
        console.log(`I enjoy playing basketball. - ${this.name} `);
    }
    fetchJob() {
        console.log(`${this.name} is a ${this.job}`);

    }
}

class Programmer extends Person {
    constructor(name, job, age, languages) {
        super(name, job, age);
        this.languages = languages
        this.busy = true;
    }
    completeTask() {
        this.busy = false;
    }
    acceptNewTask() {
        this.busy = true;
    }
    OfferNewTask() {
        if (this.busy) {
            this.busy = true;
            console.log(`${this.name} can't accept any new tasks right now.`)
        } else {
            console.log(`${this.name} would love to take on a new responsibility.`);
        }


    }
    learnLanguages() {
        console.log('English', 'French', 'Spanish');
    }
    listLanguages() {
        console.log(`${this.name} knows ${this.languages}`);
    }

}

const Khire = new Programmer("Khire", "developer", 23, 'English, French, Spanish.');

Khire.exercise();
Khire.fetchJob();
Khire.OfferNewTask();
Khire.listLanguages();