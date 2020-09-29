// split
const message = 'Welcome to Bahamas!';

// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(' ')); // ["Welcome", "to", "Bahamas!"]  Как обратится к масиву?

// // Вызов split с пустой строкой разобьёт по буквам
// console.log(message.split('')); // [много букв :)]
let words = [];
for(let i = 0; i < message; i += 1) {
  words[i] = message[i]
}

console.log(words)



// // join
// const clients = ['Mango', 'Poly', 'Ajax'];

// // Сошьет все элементы массива в строку,
// // между каждой парой элементов будет указанный разделитель
// console.log(clients.join(' ')); // "Mango Poly Ajax" Делает ли масив строкой?
// console.log(clients.join(',')); // "Mango,Poly,Ajax"
// console.log(clients.join('-')); // "Mango-Poly-Ajax"



// const fnA = function() {
//     console.log('Начала выполняться [fnA]');
//     fnB();
//     console.log('Продолжила выполняться [fnA] после выхода из [fnB]');
//   };
  
//   const fnB = function() {
//     console.log('Выполняется [fnB]');
//   };
  
//   console.log('Начал выполнение [main]'); // Почему интерпретирует отсюда а не сверху?
//   fnA();
//   console.log('Продолжил выполняться [main] после выхода из [fnA]');
  
  /*
   * Начал выполнение [main]
   * Начала выполняться [fnA]
   * Выполняется [fnB]
   * Продолжила выполняться [fnA] после выхода из [fnB]
   * Продолжил выполняться [main] после выхода из [fnA]
   */