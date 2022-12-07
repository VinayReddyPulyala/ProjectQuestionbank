const companies = [
    { name: "Company one", category: "Finance", start: 1981, end: 2004 },
    { name: "Company two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company nine", category: "Retail", start: 1981, end: 1989 },
];
companies.forEach(func);
function func(value) {
    console.log(value.name);
}

companies.forEach(func1);
function func1(value) {
    if (value.start > 1987) {
        console.log(value.name);
    }
}

const person = {
    name: "Vinay",
    college: "KMIT",
    branch: "CSM-A",
    address: {
        street: "Hari vihar colony"
    }
};
// let {street}=person.address;
// let { address } = person;
// let { street } = address;
let { address: { street } } = person;
console.log(street);