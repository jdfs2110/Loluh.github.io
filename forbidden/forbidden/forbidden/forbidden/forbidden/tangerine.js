// Number of images to load
var numImages = 100;

// Loop to create and append images
for (var i = 0; i < numImages; i++) {
  // Create new img element
  var img = document.createElement('img');
  
  // Set the source of the image
  img.src = '/media/images/tangerine.png';
  
  // Append the image to the body
  document.body.appendChild(img);
}