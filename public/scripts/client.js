/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(() => {
  //function to create  all the tweets in the Json
  const renderTweets = function (tweets) {
    const $tweetContainer = $("#tweets-container");
    $tweetContainer.empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $tweetContainer.prepend($tweet);
    }
  };
  //Function to create a single tweet.
  const createTweetElement = function (data) {
    const $tweet = $("<article>").addClass("tweet");
    const $header = $("<header>");
    const $img = $("<img />", {
      src: data.user["avatars"],
    });
    const $span = $("<span>").text(data.user["handle"]);
    $header.append($img, $span);
    const $div = $("<div>").text(data.content["text"]);
    const $footer = $("<footer>");
    const $span2 = $("<span>").text(timeago.format(data.created_at));
    const $div2 = $("<div id='tweet-icons'>");
    const $symbols1 = $("<i>").addClass("fas fa-flag");
    const $symbols2 = $("<i>").addClass("fas fa-retweet");
    const $symbols3 = $("<i>").addClass("fas fa-heart");
    $div2.append($symbols1, $symbols2, $symbols3);
    $footer.append($span2, $div2);
    $tweet.append($header, $div, $footer);
    return $tweet;
  };
  //Function for an ajax get request to get the tweets.
  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweetData) => {
        console.log("tweets", tweetData);

        renderTweets(tweetData);
      },
      error: (err) => {
        console.log(`error: ${err}`);
      },
    });
  };
  loadTweets();
  const $tweetForm = $("#tweet-form");
  $tweetForm.on("submit", function (event) {
    const $textarea = $(this).find("textarea");
    const $counter = $(this).find(".counter").val();
    $("#error").slideUp(1000);
    console.log($counter);
    event.preventDefault();
    const serializedData = $(this).serialize();
    if (!$textarea.val().trim()) {
      $("#error").slideDown(1000);
      return false;
    }
    if (parseInt($counter) < 0) {
      $("#error").text(
        "You have reached your maximum limit of characters allowed"
      );
      $("#error").slideDown(1000);
      return false;
    }
    console.log(serializedData);
    $.post("/tweets", serializedData, (response) => {
      console.log(response);
      loadTweets();
    });
  });
});
