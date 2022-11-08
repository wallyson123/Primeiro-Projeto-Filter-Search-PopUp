}

// Delete event
function deleteEvent(e) {
  // clear text input field
  search.value = "";

  e.target.style.display = "none";

  // Reload the browser
  location.reload();
}
