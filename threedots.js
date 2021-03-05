/*
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat(ages3);
console.log(allAges);
*/

/*
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
console.log(allAges);
*/



/*
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = [ages, ages2, ages3];
console.log(allAges);
*/

// avabe nah kore amra spread out kore korbo
/*
const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];
const allAges = [...ages,...ages2, 10, 11, ...ages3];
console.log(allAges);
*/

/*
const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib); // akhane 3 ta value ke sorasori niche array ke niche nah
console.log(maximum);
*/

// kinto spread out kore array value sob naya jai

/*
const takaPoisa = [650, 450, 250];
const maximum = Math.max(takaPoisa);
console.log(maximum);    // output nan asbe karon array value golo input hoine
*/

// kinto spead out korle input hbe

const takaPoisa = [650, 450, 1000, 250, 800];
const maximum = Math.max(...takaPoisa);
console.log(maximum);  