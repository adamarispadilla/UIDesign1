$(document).ready(function() {
  $(".rcloud1, .rcloud2, .rcloud3,.rcloud4, .rcloud5, .rcloud6, .rcloud7, .rcloud8, .rcloud9").click(function() {
    var imageSrc = $(this).attr("src");
    $("#overlay-image").attr("src", imageSrc);
    $("#overlay").fadeIn();
  });

  $("#overlay").click(function() {
    $("#overlay").fadeOut();
  });
});


// Get references to the overlay elements
const overlay = document.getElementById('overlay');
const overlayMessage = document.getElementById('overlay-message');
const overlayLink = document.getElementById('overlay-link');

// Add event listeners for each rcloud element
const rclouds = document.getElementsByClassName('rcloud');
for (let i = 0; i < rclouds.length; i++) {
  rclouds[i].addEventListener('click', function() {
    // Get the message and link for the clicked rcloud
    const message = getRCloudMessage(i);
    const link = getRCloudLink(i);

    // Update the overlay content
    overlayMessage.textContent = message;
    overlayLink.textContent = 'Visit website';
    overlayLink.href = link;

    // Show the overlay
    overlay.style.display = 'block';
  });
}

// Function to get the message for a specific rcloud
function getRCloudMessage(cloudIndex) {
  // Modify this function to return the appropriate message based on the rcloud index
  switch (cloudIndex) {
    case 0:
      return 'This is the message for rcloud1.';
    case 1:
      return 'This is the message for rcloud2.';
    // Add more cases for each rcloud
    default:
      return 'Default message for unknown rclouds.';
  }
}

// Function to get the link for a specific rcloud
function getRCloudLink(cloudIndex) {
  // Modify this function to return the appropriate link based on the rcloud index
  switch (cloudIndex) {
    case 0:
      return 'https://www.example.com/rcloud1';
    case 1:
      return 'https://www.example.com/rcloud2';
    // Add more cases for each rcloud
    default:
      return '#';
  }
}

