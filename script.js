document.addEventListener("DOMContentLoaded", function() {
    var carouselItems = document.querySelectorAll(".carousel-item");
    var carouselPrevBtn = document.querySelector(".carousel-control-prev");
    var carouselNextBtn = document.querySelector(".carousel-control-next");
    var currentIndex = 0;
    var greetingElement = document.getElementById("greetingText");
    var dateTimeElement = document.getElementById("dateTime");
    var currentHour = new Date().getHours();
    
    // Set greeting based on current hour
    var greeting;
    if (currentHour >= 5 && currentHour < 12) {
      greeting = "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    
    // Update greeting text
    greetingElement.textContent = greeting;
    
    // Get current date and time
    var currentDateTime = new Date().toLocaleString();
    
    // Update date and time text
    dateTimeElement.textContent = currentDateTime;

    // Function to show current slide
  function showSlide(index) {
    // Hide all slides
    for (var i = 0; i < carouselItems.length; i++) {
      carouselItems[i].classList.remove("active");
    }
    // Show current slide
    carouselItems[index].classList.add("active");
  }

  // Function to navigate to previous slide
  function goToPrevSlide() {
    if (currentIndex === 0) {
      currentIndex = carouselItems.length - 1;
    } else {
      currentIndex--;
    }
    showSlide(currentIndex);
  }

  // Function to navigate to next slide
  function goToNextSlide() {
    if (currentIndex === carouselItems.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }
    showSlide(currentIndex);
  }

  // Event listener for previous button
  carouselPrevBtn.addEventListener("click", function() {
    goToPrevSlide();
  });

  // Event listener for next button
  carouselNextBtn.addEventListener("click", function() {
    goToNextSlide();
  });

  // Show initial slide
  showSlide(currentIndex);
  });
  