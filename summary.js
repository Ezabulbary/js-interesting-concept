const pen = {
    color: 'black',
    price: 10,
    writePoem: function(food){
        console.log(food);
    }
}

const keys = Object.keys(pen);
const values = Object.values(pen);

for(const key in pen){
    console.log(pen[key]);
}

const a = {a:1};
const b = {a:1};
const c = a;

if(a === b){
    console.log('true');
}

const aBound = pen.writePoem.bind(a);
aBound();

