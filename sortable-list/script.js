const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");
const test = document.getElementById("test");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

// Store list items
const listItems = [];

let dragStartIndex;

createList();

// Insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => {
      return {
        value: a,
        sort: Math.random(),
      };
    })
    .sort((a, b) => {
      return a.sort - b.sort;
    })
    .map((a) => {
      return a.value;
    })
    .forEach((person, index) => {
      // console.log(person);
      const listItem = document.createElement("li");

      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
      <span class="number">${index + 1}</span>
      <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
      </div>
      `;

      listItems.push(listItem);

      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  // console.log("Enter", "dragstart");
  dragStartIndex = this.closest("li").getAttribute("data-index");
  console.log(dragStartIndex);
}
function dragEnter() {
  // console.log("Enter", "dragenter");
  this.classList.add("over");
}
function dragLeave() {
  // console.log("Enter", "dragleave");
  this.classList.remove("over");
}
function dragOver(e) {
  // console.log("Enter", "dragover");
  e.preventDefault();
}
function dragDrop() {
  // console.log("Enter", "drop");
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);

  this.classList.remove("over");
}

// Swap list items that are drag and drop
function swapItems(fromIndex, toIndex) {
  // console.log(123);
  const itemOne = listItems[fromIndex].querySelector(".draggable");
  const itemTwo = listItems[toIndex].querySelector(".draggable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}
// Check the order of list items
function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector(".draggable").innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.add("right");
    }
  });
}
function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}

check.addEventListener("click", checkOrder);
// Test Div
// append into test div
// appendTest();
// function appendTest() {
//   // Created element
//   const p = document.createElement("p");
//   // pushed or added content into paragraph element
//   p.innerHTML = `
//     Test is a success
//     <a class="link" href="#">Link</a>
//     <a class="link" href="#">Link 02</a>
//   `;

//   // append element to test div
//   test.appendChild(p);
// }
// console.log(test);
