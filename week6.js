let str = '{ "name": "Gabar", "activities" : ["play", "eat dog food"], "dogfriends" :[{"name": "Ira","activities": ["be grumpy", "eat bread omblet", "shed body hair"],"weight": 8,"furcolor": "white"},{"name": "Snowy","activities": ["sleep", "pre-sleep naps"],"weight": 3}]}';

const dog= JSON.parse(str);
dog['weight'] = 12;
dog['height'] = 120;
dog['name'] = 'Gabbar';
let s = 0;
let activities = dog['activities'];
for (let i of dog['dogfriends']) {

    console.log(i['name'])
    console.log(i['activities']);
    s += i['weight'];
    if (i['name'] == 'Ira') {
        i['activities'] = i['activities'].concat('tear sofa', 'play with brown paint');
        i['furcolor'] = 'brown';
    }
    if (i['name'] == 'Snowy') {
        i['activities'] = i['activities'].concat('post-sleep nap', 'annoy owner to get treats');
    }
    activities = activities.concat(i['activities']);
}
console.log("Dog: "+JSON.stringify(dog));
console.log("Total weight: "+s);
console.log(activities);
const obj={
    name:'Raj',
    age:25,
    haspets:true
}
function printAllKeys(obj){
    return Object.keys(obj);
}
function convertObjectToList(obj){
    return Object.entries(obj);
}
const obj1=printAllKeys(obj);
console.log(obj1);
console.log(convertObjectToList(obj));
const fifa_scores = [
    { name: 'Kylian Mbappe' },
    { name: 'Messi' },
    { name: 'Olivier' },
    { name: 'Julian' },
    { name: 'Marcus' },
];
function func(i) {
    i['goals'] = Math.floor(Math.random() * 10);
    i['hero'] = i['name'];
    delete i['name'];
    return i;
};
const updated_fifa_scores = fifa_scores.map(func);
console.log(updated_fifa_scores);