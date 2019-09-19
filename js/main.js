var postView = document.getElementById("post-view");
var postInput = document.getElementById("post-input");
var postCreate = document.getElementById("post-enter");
var commentBlock = document.getElementById("comment-block");
var cBlock = document.getElementById("c-block");

function postSection() {
  commentBlock.style.display = "block";
}

function wallPost() {
  console.log("ccccc", postInput.value);

  postSection();

  postView.appendChild(document.createTextNode(postInput.value));

  cBlock.appendChild(postView);

  commentBlock.appendChild(cBlock);

  postInput.value = "";
}

function newPostCreate() {
  console.log("ddddddddd");
  if (postInput.value.length > 0) {
    wallPost();
  }
}

postCreate.addEventListener("click", newPostCreate);
