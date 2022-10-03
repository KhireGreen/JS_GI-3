var pii = {
    firstName: 'Jeff',
    lastName: 'Hardy',
    mailingName: function () {
        return this.firstName + ' ' + this.lastName
    },

    ssn: function () {
        const ssn = 444 - 28 - 2926;
        return ssn
    }
};
console.log(pii.mailingName());
console.log(pii.ssn());