// javascript object destructuring
// const person = { name: 'jack William', age: 17, job: 'facebooker', gfName: 'Ema Watson', address: 'Kochu khet', phone: '01738383837', friends: ['Tom hancks', 'tom cruise', 'Tom yarn'] };

// console.log(person.gfName);
// console.log(person.gfName);
// console.log(person.gfName);
// avabe amra bar bar console log e person. nah likha const likha short cut e korte pari

// const all = person;   // total object ta all er vitor chole ashe
// console.log(all);

// const { gfName, age, address} = person;
// console.log(gfName,age, address);

// const gfName = person.gfName;
// const phone = person.phone;
// console.log(gfName);
// console.log(phone);


// javascript Array destructuring

const friends = ['Sakib khan', 'Arman khan', 'Amir khan', 'Salman khan', 'Sharukh khan']
// ami total array ke nibo nah akta bha 2ta ke nibo

// const[chotoFriend] = friends;  // prothom ta ke nibe
// const[first, second] = friends;
// const[...sobname] = friends;  // sob asbe
// const[first, second, ...sobname] = friends; // prothom 2 ta nam bade pore golo dakhabe
// console.log(sobname);


//complexObject 
// destructure 
// destructure hoce koto golo array/object er mordha diya amr projon onujai e man ber kore ana

const complexObject = {
  name: 'abc',
  info: {
    address: 'kola bagan',
    leader: 'Tiger Leader'
  }
}

const {leader} = complexObject.info;   // complex object info er mordha property hisabe leader ta ace
console.log(leader);