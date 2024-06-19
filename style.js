
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("search");


searchButton.addEventListener("click", function() {
  const searchTerm = searchInput.value.toLowerCase(); 

  
  const movieList = document.getElementById("movie_list");
  const movies = movieList.querySelectorAll(".movie"); 

 
  for (const movie of movies) {
    const movieTitle = movie.querySelector("label").textContent.toLowerCase();
    if (movieTitle.includes(searchTerm)) {
      movie.style.display = "block"; 
    } else {
      movie.style.display = "none"; 
    }
  }
});
