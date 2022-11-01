
// //1
// const task1 = () => {
//     return document.querySelector('li').textContent;
// };
// console.log(task1());
// //2
// const task2 = () => {
//     const list = Array.from(document.querySelectorAll('li'));
//     return list.map(li => li.textContent);
// };
// console.log(task2());
// //3
// const task3 = () => {
//     const listItem = Array.from(document.querySelectorAll('li.list-item'));
//     return listItem.map(li => li.textContent);
// };
// console.log(task3());
// //4
// const task4 = () => {
//     const listItem = Array.from(document.querySelectorAll('li.list-item'));
//     return listItem.map((li) => li.getAttribute('class'));
// };
// //5
// console.log(task4());
// const task5 = () => {
//     const listItem = Array.from(document.querySelectorAll('li.list-item'));
//     return listItem.map((li) => li.getAttribute('data-test-id'));
// };
// console.log(task5());

// //6
// let list = document.querySelectorAll('li')
// list[4].textContent = 'white';
// list[2].textContent = 'orange';
// list[7].textContent = 'white';



///////7\
// let ul = document.querySelector('ul')
// ul.innerHTML = ""
// ul.innerHTML = `
//     <li data-test-id="1">1 green</li>
//     <li data-test-id="2">2 red</li>
//     <li data-test-id="3">3 yellow</li>
//     <li data-test-id="4">4 blue</li>
//     <li data-test-id="5">5 white</li>
// `

// // task8
// let label = document.querySelectorAll('label')
// label[1].innerHTML = ""
// label[1].innerHTML = `
//     <input type="password" placeholder="You were Hacked">
// `    