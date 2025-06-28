// sync and async kya hota hai ?
//sync matlb ek ke baad dusra hoga, jabtakk ek command complete nahi hota dusra command shuru nahi hoga.
// Sync ka matlab hota hai ki koi bhi function ya process sequentially execute ho raha hai, yani ek ke baad ek.


// async ka matlab hota hai ki koi bhi function ya process bina kisi delay ke execute ho raha hai.
//async ka matlb saare kaam ek saath shuru kardo , jiska answer phle aajaega uska jawab de dena
// Example:
console.log("Task 1 start");
setTimeout(() => {
    console.log("Task 2 (Async) complete");
}, 1000);
console.log("Task 3 start");


async function greet() {
  return "Hello from async function!";
}

greet().then(console.log);