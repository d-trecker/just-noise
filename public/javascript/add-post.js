async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('input[name="post-content"]').value;
  
  var genre = document.getElementById("genre-picked");
  var post_genre = genre.value;


  //Checks to see if title and content are filled out completely.
  if (!title || !post_content) {
    alert("Please fill out the form completely.");
  } else {
    //If they are, then send the response.
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title,
        post_content,
        post_genre
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
