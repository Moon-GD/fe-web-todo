//menu 열기
const itemAddBtn = document.getElementById("addBtn");

const visibleTodo = () => {
  document.querySelector(".itemTodoAddBox").classList.remove("hidden");
};
const unvisibleTodo = () => {
  document.querySelector(".itemTodoAddBox").classList.add("hidden");
};

const visibleDoing = () => {
  document.querySelector(".itemDoingAddBox").classList.remove("hidden");
};
const unvisibleDoing = () => {
  document.querySelector(".itemDoingAddBox").classList.add("hidden");
};

const visibleDone = () => {
  document.querySelector(".itemDoneAddBox").classList.remove("hidden");
};
const unvisibleDone = () => {
  document.querySelector(".itemDoneAddBox").classList.add("hidden");
};

document.getElementById("addTodoBtn").addEventListener("click", visibleTodo);
document.getElementById("addDoingBtn").addEventListener("click", visibleDoing);
document.getElementById("addDoneBtn").addEventListener("click", visibleDone);

document
  .querySelector(".cancelTodoBtn")
  .addEventListener("click", unvisibleTodo);
document
  .querySelector(".cancelDoingBtn")
  .addEventListener("click", unvisibleDoing);
document
  .querySelector(".cancelDoneBtn")
  .addEventListener("click", unvisibleDone);
