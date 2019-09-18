function wallPost() {
  let postForm = document.getElementById("post-form");
  let postView = document.getElementById("post-view");
  let postInput = document.getElementById("post-input");

  console.log("aaaaaaaa", postForm);
  console.log("bbbbbbb", postView);
  console.log("cccccccccc", postInput);

  // postForm.addEventListener("submit", function(event) {
  //   event.preventDefault();

  //   var commStr = postInput.value;

  //   console.log("comstr", commStr);

  //   saveComment(commStr, function() {
  //     let comments = [];

  //     localStorage.setItem("comments", JSON.stringify(comments));
  //     appendToStream(postView, commStr);
  //     commentInput.value = "";
  //   });
  // });
}
