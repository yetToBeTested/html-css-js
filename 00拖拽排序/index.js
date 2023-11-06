const list = document.querySelector(".list");

let sourceNode = null;
list.ondragstart = (e) => {
  setTimeout(() => {
    e.target.classList.add("moving");
  }, 0);
  sourceNode = e.target;
};
list.ondragover = (e) => {
  //   e.preventDefault();
};
list.ondragenter = (e) => {
  //   e.preventDefault();
  if (e.target === list || e.target === sourceNode) {
    return;
  }
  const children = Array.from(list.children);
  const sourceNodeIndex = children.indexOf(sourceNode);
  const targetdeIndex = children.indexOf(e.target);
  if (sourceNodeIndex > targetdeIndex) {
    list.insertBefore(sourceNode, e.target);
  } else if (sourceNodeIndex < targetdeIndex) {
    list.insertBefore(sourceNode, e.target.nextElementSibling);
  }
};

list.ondragend = (e) => {
  e.target.classList.remove("moving");
};
