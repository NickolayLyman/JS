let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
 
//Write code under this line  
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;


const keys = Object.keys(user);
// Write code under this line

const entries = Object.entries(user);
for (const entry of entries) {
    const key = entry[0];
    const value = entry[1];
    message += `${key}:${value}\n`;
}

 
console.log(message); 
// /*
// 'age : 20 
// hobby : skydiving 
// name : Mango 
// premium : false 
// mood : happy 
// "full time" : true 
// ' */