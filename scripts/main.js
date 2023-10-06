

// // let girlAge = 17;

// // if (girlAge >= 18) {
// //     console.log ("girlAge is eligible to vote");  
// // } else if (girlAge < 18 && girlAge >= 0) {
// //     console.log ("girlAge is too young to vote");
// // } else {
// //     console.log ("the age is not vaild");
// // }

// // console.log('Hello World')


//     // let x = 5;
//     // let y = 10
//     // let z = (x + y)
//     // console.log x




//     let grid = document.getElementById("grid");

//     // add image to page
//    const cars = ["http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQFH-PKWR6a4R6NCzJNSzFjnkb5wehhpw7HsAPR1Q2AfSEXlcIQQn-TFXB2vp-ktaJlixJ2QyU4QEYqihC19xM", "https://di-uploads-pod1.dealerinspire.com/mercedesbenzofakron/uploads/2021/09/2021-GLA.jpg", "https://platform.cstatic-images.com/medium/in/v2/stock_photos/65d85856-ba25-4e4a-a358-5e3c9b527c9d/0f3d00ca-bd5a-442a-b5db-10a9221e4c57.png", "https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?cs=srgb&dl=pexels-mike-bird-2365572.jpg&fm=jpg", "https://www.cars.com/i/large/in/v2/stock_photos/11ac9390-7ffa-4150-842c-a7020f53b866/a7fa2615-b198-4c08-a64c-23ea144d3629.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UwvgubzoGaaBrJ1p2lvDC-7RydkqIw6YCg&usqp=CAU"]

// for (let car of cars) {
//     let card = document.createElement('div');
//     card.setAttribute("class", "card");
//     let img = document.createElement('img');
//     img.setAttribute("src", car)
//     img.setAttribute("alt", "car");
//     // append img to car
//     card.appendChild(img);
//     // append card to grid
//     grid.appendChild(card);
// }
    

// VARIABLES//
const sick = false
const age = 17
const name = "Richard"
const brothersage = 40
const allage = age + brothersage

console.log(allage)
// console.log(age + sick);

// console.log(sick);
// console.log(age);
// console.log(name);

//FUNCTIONS//
const printHello = () => {
    console.log("helloworld");
};



const Chris = () => {
    console.log("hallelujah");
};

Chris();


const president = () => {
    console.log("Tinubu");
};
 president();

const profit = (cp, sp) => {
    return (sp - cp)
}

console.log(profit(10000,  60000));


const precentageprofit =( cp, sp) => {
    return (sp - cp)/cp * 100
}
 console.log(precentageprofit(6000000, 15000000));

//ARRAYS//
const cars = ["Toyota", "Benz", "Mazda", "nissan"]
console.log(cars);

cars.pop()
console.log(cars);

cars.push("lambo")
console.log(cars);

cars.shift()
console.log(cars);

cars.unshift("ferarri")
console.log(cars);

cars[2] = "Truck"
console.log(cars);

//OBJECTS//
const Person = {
    name: "Fadare Richard",
    age: 17,
    school: "Gomycode",
    accountBalance: undefined,
    sickness: null,
    hobbies: ["football", "playing", "singing"]
}

Person.hobbies[1] = "eating"
console.log(Person);
























