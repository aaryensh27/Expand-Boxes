function toggleBox(box) {
  // Get all box elements
  var allBoxes = document.querySelectorAll('.box');

  // Collapse all boxes except the clicked one
  allBoxes.forEach(function(currentBox) {
      if (currentBox !== box) {
          currentBox.classList.remove('expanded');
          currentBox.style.height = '100px'; // Change the height accordingly
          // Uncheck the radio button in the collapsed box
          var radioBtn = currentBox.querySelector('input[type="radio"]');
          if (radioBtn) {
              radioBtn.checked = false;
          }
      }
  });

  // Toggle the clicked box
  box.classList.toggle('expanded');
  if (box.classList.contains('expanded')) {
      box.style.height = 'auto';
      // Check the radio button in the expanded box
      var radioBtn = box.querySelector('input[type="radio"]');
      if (radioBtn) {
          radioBtn.checked = true;
      }
  } else {
      box.style.height = '100px'; // Change the height accordingly
      // Uncheck the radio button in the collapsed box
      var radioBtn = box.querySelector('input[type="radio"]');
      if (radioBtn) {
          radioBtn.checked = false;
      }
  }
}

// Preventing click event propagation for dropdown options
document.querySelectorAll('.dropdown select').forEach(select => {
  select.addEventListener('click', function(event) {
      event.stopPropagation();
  });
});
