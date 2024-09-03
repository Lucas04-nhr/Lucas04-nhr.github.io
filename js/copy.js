// Prevent the default copy action
var element = document.body;
element.style.userSelect = 'none'; // Standard
// element.style.webkitUserSelect = 'none'; // Chrome, Safari, Opera
element.style.MozUserSelect = 'none'; // Firefox
element.style.msUserSelect = 'none'; // IE 10+
element.style['-ms-user-select'] = 'none'; // IE 10+

// Get the elements which can be selected
var giscusElements = document.getElementsByClassName('gsc-comment-box-main');
var giscusCommentElements = document.getElementsByClassName('gsc-comment-box-write');

// Add the copy event listener
document.addEventListener('copy', function(event) {
  var selection = window.getSelection();
  var selectedText = selection.toString();
  var sourceElement = selection.anchorNode.parentNode;

  // Check if the source element is gsc-comment-box-main, gsc-comment-box-write or their child
  if (sourceElement.classList.contains('gsc-comment-box-main') || sourceElement.closest('.gsc-comment-box-main') || sourceElement.classList.contains('gsc-comment-box-write') || sourceElement.closest('.gsc-comment-box-write')) {
    // Allow the default copy action
    event.clipboardData.setData('text/plain', selectedText);
  } else {
    // Set the forbidden text to the clipboard
    event.clipboardData.setData('text/plain', '');

    // Prevent the default copy action
    event.preventDefault();
  }
});
