// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

// scroll the chat transcript to the top
$( document ).ready(function() {
  $('.message-window').scrollTop($('.message-window')[0].scrollHeight);
});
