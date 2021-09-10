# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

# Motivation

Tweeter cone is an app developed for educational purpose. Its aim is to build a dynamic single-page Twitter clone using HTML, CSS, JS, jQuery and AJAX.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Dependencies

- Express
- Node 5.10.x or above
- body-parser 1.15.2
- chance": 1.0.2
- md5 2.1.0

## devDependencies

- nodemon s

## Project Specification

- A client-side Single Page App (SPA)
- Communicates with a server via AJAX

- When the user hovers over a tweet, that tweet displays a box shadow.
- When the user hovers over an icon ("Flag", "Re-tweet" and "Like") the icon changes colour.
- When a user types into the Compose Tweet textarea, the Character Counter is updated to show how many characters a user may still type .
- The Character Counter turns red (or similar) when more than 140 characters have been typed into the Compose Tweet textarea, and it shows how many characters over the 140 limit have been typed (using a negative number)
- When a user submits a valid tweet, the list of tweets is refreshed (displaying the new tweet), the Compose Tweet textarea is cleared, and the Character Counter is reset (to 140).
- When a user submits an empty tweet text or contains more than 140 characters, an error message is displayed which slides up when you submit valid data.

## Screen Shots

!["Screenshot of the tweet page in general"](https://github.com/Teenaelza/tweeter/blob/master/docs/compsoe-tweet.png)
!["Screenshot of error page"](https://github.com/Teenaelza/tweeter/blob/master/docs/tweet-box-error.png)
!["Screenshot of hover and box shadow"](https://github.com/Teenaelza/tweeter/blob/master/docs/tweet-box.png)
