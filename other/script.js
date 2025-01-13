// Add comments (as divs)
let comments = document.getElementById("comments");

const submitButton = document.getElementById("submitComment");

submitButton.addEventListener("click", () => {

       let commentInput = document.getElementById("commentInput")
       const newComment = document.createElement("div");
       newComment.className = "commentClass"
       newComment.innerHTML = commentInput.value.trim(); // Trim unnecessary spaces

       // Checks if a comment is empty, if it is then it doesnt add it
       if (commentInput.value.trim() != "") {
              const date = new Date;
              const dateElement = document.createElement("div");
              dateElement.textContent = date;
              dateElement.className = "dateClass"

              comments.appendChild(dateElement);
              comments.appendChild(newComment);

              //  Delete user's text after submitting comment
              document.getElementById("commentInput").value = "";
       }
});

