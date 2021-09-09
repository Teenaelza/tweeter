/*
 * Client-side JS logic to change the character counter dynamically while adding a new tweet.
 * jQuery is already loaded
 *
 */

$(document).ready(() => {
  const $textarea = $("#tweet-text");
  const maxLength = 140;
  $textarea.on("input", function () {
    const $counter = $(this).parent().children("div").children(".counter");
    const textlength = this.value.length;
    const counterValue = maxLength - textlength;
    if (counterValue < 0) {
      $counter.css("color", "red");
    } else {
      $counter.css("color", "");
    }
    $counter.val(counterValue);
  });
});
