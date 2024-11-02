// Modal functionality for Gallery images
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
  
    document.querySelectorAll(".view-art").forEach(button => {
      button.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = button.getAttribute("data-image");
        captionText.innerHTML = button.previousElementSibling.innerHTML;
      });
    });
  
    // Close the modal
    document.querySelector(".close").addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });

  // Filter functionality for Recommendations
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-button");
    const cards = document.querySelectorAll(".grid-container .card");
  
    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const genre = button.getAttribute("data-genre");
  
        cards.forEach(card => {
          if (genre === "all" || card.getAttribute("data-genre") === genre) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
  
        // Highlight selected filter button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });
  });
  
  