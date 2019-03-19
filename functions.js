//---------Convert----------------
/*
function sayHello(name){
    console.log(`Hi, ${name}!`)
}
*/
sayHello= (name) => {
    console.log(`Hi, ${name}`);
}

/*
function getOlder(age){
    return age+50
}
*/
getOlder= (age) => {
    return age+50;
}

//------------Debug----------------
const multiply = (num1, num2) => console.log(num1 * num2); 

const subtractFive = num => {
	const diff = num -5; 
	console.log(diff);
}

const printName = name => console.log(name);

module.exports= {
    hello: sayHello,
    older: getOlder,
    multi: multiply,
    subtract: subtractFive,
    name: printName
}

