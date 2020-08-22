console.log("Javascript is working!");

let colors = ["orange", "blue", "green", "purple"];

let post = {
    title: "My Post",
    description: "My first post, awesome",
    likeCount: 12,
    Comments: ["Cool", "Nice job"],
};
let posts = [{
    title: "First post",
    likeCount: 12,
}, {
    title: "Second post",
    likeCount: 222,
}];

console.log(colors);

console.log(post);

let age = 12;

if (age >= 18) {
    console.log("You are an adult!");
} else {
    console.log("you're a kid");
}

for (let index = 0; index < 10; index++) {
    console.log(index);
    }

console.log(colors);

let myFunction = x => {
    console.log(x);
}

colors.forEach(color => {
    console.log(color);
})

let greeter = name => {
    console.log(`Hello, ${name}`)
    if (name === "Adam") {
       console.log("he's an adult");  
    }
}
greeter("Adam");
greeter("Peter");
greeter("Mate");
greeter("Reka");