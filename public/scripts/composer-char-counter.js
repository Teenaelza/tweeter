/*
 * Client-side JS logic to change the character counter dynamically while adding a new tweet.
 */

$(() => {
  const $textarea = $("#tweet-text");
  $textarea.on("input", changeCounter);
});
const changeCounter = function () {
  const maxLength = 140;
  const $counter = $(this).parent().find(".counter");
  const textlength = $(this).val().length;
  const counterValue = maxLength - textlength;
  $counter.css("color", "");
  if (counterValue < 0) {
    $counter.css("color", "red");
  }
  $counter.val(counterValue);
};
