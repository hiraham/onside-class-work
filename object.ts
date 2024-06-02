let carName :string = "civic";
//simple object
const car ={                     //properties
    name:"civic",
    colour:"blue",
    year:"2012",
    engine:"455",
    price:"$100000",
    inStock:"5000",
    availableColour:["red","blue","black"]
}
console.log(car);               //log whole objest

console.log("------------------------------------------")

const person ={
    name: 'john',
    age: "50",
    city: 'london',
    country:"usa",
    married:"false",
    cars:["civic","bmw"]
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.country);
console.log(person.married);
console.log(person.cars);


console.log("------------------------------------------")

const person2 = {
    firstName: 'jinnah',
    lastName:'ali',
    age: "30",
    city: 'london',
    country:"canada",
    married:"true",
    cars:["civic","bmw"],
    fullName :function() {
        console.log(this.firstName +" "+ this.lastName)
    },
    sayshello: () => {
        console.log("line 48", this)
    }
};
person2.fullName ();
person2.sayshello ();

person2.country ="pakistan";

console.log("--------------------------------");

const person3 ={firstName: 'john',
lastName:'doe',
age: "50",
city: 'london',
country:"canada",
}

const persontwo= person3;//pass by .referense

person3.firstName = "charles";

console.log("person2",person2);
console.log("person3",person3);


console.log("---------------------------------")

const myPet:{
    name:string,
    age:number,
    colour:string,
    live:boolean,
    type:string,
    eat: () => void
}= {
    name:"tonny",
    age:2,
    colour:"black",
    live:true,
    type:"dog",
    eat: function(){ 
    console.log("eating bones & biscuits");
    }
}
//index signature for objects

const myPet2:{
    name:string,
    age:number,
    colour: string,
    live: boolean,
    type:string,
    5:string,
    eat:() => void 
} = {
    name:"pretty",
    age:3,
    colour:"yellow",
    live: true,
    type:"cat",
    5:"five",
    eat:function(){
        console.log("eating meat!");
    }
}
console.log("myPet2", myPet2);

console.log("----------------------------");

const nameAgeMap :{
    [key :string]:number;
    } ={
        isfhan :24,
        ali:22,
        sara:23,
        bilal: 21,
        hafsa:21,
        
    }
     console.log(nameAgeMap);

     console.log("--------------------")

     //define custum type for a age variables
     type Age = number | string;

     const age: Age = 28;

     console.log("age",age);

     console.log("----------------------");

     //define custom type for object pet
     type Pet = {
        name:string,
        
     }




