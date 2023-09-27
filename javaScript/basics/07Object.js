//Singleton
// Object.create

// Object literals

const mySym= Symbol("key1")

const jsUser={
    name:"ishu",
    "full name":"ishu khan",
    [mySym]:"mykey1",//add symbol data type in object using brackets
    age:15,
    location:"pune",
    email:"ishu@google.com",
    lastLogedIn:["Monday", "Sunday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);//full name access is one way using brakets
// console.log(typeof jsUser[mySym]);

jsUser.email="ishu@chatGpt.com"
// Object.freeze(jsUser)//freeze object doesnt change any one 
jsUser.email="ishu@Microsoft.com"
// console.log(jsUser);


//function in object

jsUser.gretting = function(){
    console.log("hello JS user");
}

jsUser.grettingTwo = function(){
    console.log(`hello JS user, ${this.name}`);
}
// console.log(jsUser.gretting());
// console.log(jsUser.grettingTwo());


// +++++++++++++++++++++++ 2 ++++++++++++++++++++++++

const tinderUser = new Object() //singleton object
// const tinderUser={} //non singleton Object

tinderUser.id="123abc"
tinderUser.name="ishu"
tinderUser.isLogedIn=false

// console.log(tinderUser)

// nested objects

const regularUser={
    email:"ishu@google.com",
    fullname:{
        userfullname:{
            firstName:"ishu",
            lastname:"khan"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstName);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// const obj3= Object.assign({},obj1,obj2) //assign parameter is one target and second is source go to mdn documentry.
// console.log(obj3);

//spread operator
const obj3 ={...obj1,...obj2}
// console.log(obj3);

const user=[
    {
        id:1,
        email:"i@google.com"
    },
    {
        id:2,
        email:"j@google.com"
    },
    {
        id:3,
        email:"k@google.com"
    }
]


// console.log(user);
// console.log(user[0].email);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogedIn')); //to check whether objects properties available or not 

// +++++++++++ de-structring objects +++++++++++++++++++++++

const course ={
    courseName:"JS in hindi",
    prise:999,
    courseInstructor:"hitesh"
}

// console.log(course.courseInstructor); //this is good but every one use 
//another way

const {courseInstructor:Instructor,courseName}= course
// console.log(courseInstructor);
console.log(Instructor);
console.log(courseName);