//Q1 sync and async kya hota hai ?
//sync matlb ek ke baad dusra hoga, jabtakk ek command complete nahi hota dusra command shuru nahi hoga.

/*task a - 5
task b - 2
task c - 15
task d - 1 */

// Sync ka matlab hota hai ki koi bhi function ya process sequentially execute ho raha hai, yani ek ke baad ek.


// Q2. async ka matlab hota hai ki koi bhi function ya process bina kisi delay ke execute ho raha hai.
//async ka matlb saare kaam ek saath shuru kardo , jiska answer phle aajaega uska jawab de dena
// Example:
/*console.log("Task 1 start");
setTimeout(() => {
    console.log("Task 2 (Async) complete");
}, 1000);
console.log("Task 3 start");


async function greet() {
  return "Hello from async function!";
}
greet().then(console.log);*/

Q3. Kaise pta chalta hai ki hum sync code likh rhe hai ya async

Async js kya hota Hai..
jo bhi code async nature ka ho, usse side stack mai bhej doUntil, and agle code ko chalao, jo bhi sync nature ka ho, jab bhi sara sync code chal jaye,
tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack mai lao and chala do...