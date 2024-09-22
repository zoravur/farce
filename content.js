document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === 'c') {
    event.preventDefault();
    
    // get the selected text
    const selection = window.getSelection().toString();

    if (selection) {
      // copy the selected text to clipboard
      navigator.clipboard.writeText(selection).then(() => {
        console.log("Selection copied to clipboard.");
      }).catch(err => {
        console.error("Error copying to clipboard: ", err);
      });
    } else {
      console.log("No text selected.");
    }
  }
});
