const a: number = 10;
const b: string = 'hello';

type nos = number | String; //union type
type fnThatReturnsNumber = (param: nos) => number;

function printOut: fnThatReturnsNumber = (param) => {
    console.log(param);
    return () => 1;
}

printOut(a);
printOut(b);

printOut(true);

//Objects
let person = {
    name: 'Peter',
    age: 30,
    single: false
};

person.name = 'Tommi',
person.age = 'very old'

person.walk = () => { console.log('walking')}
person = {
    age: 10,
    name: 'Christian',
}


interface Person = {
    name: String,
    age: Number,
    single: boolean,
    walk: () => void
}

interface Navy extends Person {  //so remove person as its a given set
    run: () => void
} & Person // intersection type

interface Clerk extends Person {
    doMath: () => void
}
//familiarity

const tommi: Navy = {
    name: 'Tommi',
    age: 30,
    single: false,
    swim: () => {console.log('Butterfly')},
    run: () => { console.log('Run')}
}

const peter: Clerk = {
    name: 'Peter',
    age: 30,
    single: false,
    swim: () => {console.log('Butterfly')},
    doMath: () => {console.log('1234')}
}

//hover mouse and see input of TS, its often the same


export interface Data = { //export so someone else can use it like colleague
    header: string,
    body: string
}

interface Data {
    user: string,
    password: string
}
//declaration merging
const resp: Data = {
    header: 'test header',
    body: 'some response',
    user: 'peter',
    password: 'abcd'
}

//we use type when we want to  create alias of the type we want to use, can be used on object too, cannot reuse it. We use type or interface.

class Employee implements Person {
  constructor(name: String){
    this.name = name;
  }
}

const mary = new Employee('Mary'); //mary is an instance of the class employee


//interface
//class is a blueprint to create objects
//object?

//difference between number and Number?
//