document.getElementById("clk").addEventListener("mouseover", function() { 
    console.log("hogiya");
});

sum = (a, b) => { 
    return a + b;
};

log = () => {
    console.log("I am your log");
};

clr = setInterval(log, 2000);

let obj = { 
    name: 'Ayesha',
    age: 12,
    class: 12,
    location: 'Lahore'
};

let jsonString = JSON.stringify(obj); 
console.log(jsonString);

let job = JSON.parse(jsonString); 
console.log(job);

let a = 34;
console.log(`this is ${a}`);
