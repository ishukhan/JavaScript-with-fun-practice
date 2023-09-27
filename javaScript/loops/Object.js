
// for in

const myObject = {
    js:"JavaScript",
    cpp:"C++",
    rb:"Ruby",
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shorcut is for ${myObject[key]}`)
}

const programming =["js","rb", "py","cpp","java"];

for (const key in programming) {
    // console.log(programming[key]);
    console.log(`${key} index on ${programming[key]}`);
}



