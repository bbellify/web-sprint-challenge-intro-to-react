# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [x] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [x] Open the assignment in Canvas and click on the "Set up git" option (Or, depending, if you see something along the lines of 'Load Sprint Challenge Submission in a new window' click that).
- [x] Wire your fork to Codegrade using the "Click here for instructions on setting up Git submissions" link, select Github, authorize Github.
- [x] Push your first commit: `git commit --allow-empty -m "first commit" && git push`. MAKE SURE TO PUSH TO MAIN, YOU NO LONGER NEED TO CREATE A NEW BRANCH!!
- [x] Make commits often! PUSH TO MAIN!!!
- [x] You can run tests locally by running npm run test.
- [x] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [x] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [x] Set the list of characters into state.
- [x] Render your characters to the DOM:

  1. X Build a React component named 'Character' to render an individual character. 
  1. x Map over the list in state, and for each character render a Character to the page.
  1. x Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. x The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. x The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Put your answers underneath the questions:

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

  React JS is a JavaScript library for building web applications. The problem that it is trying to solve is the following: as our applications get more and more complex, where we want to track lots of events (e.g. clicks) and the state of lots of data (e.g. likes, text inputs) that is changing across time (often changing due to user interaction, but not necessarily) and display a web experience based on all of this changing data, having to use vanilla JS to explicitly target DOM elements, create new DOM elements, etc gets extremely cumbersome. Even a fairly simple single-page web app can grow quite unwieldy with vanilla JS, particularly if you have similar elements that get repeated many times (a news feed for example). Scaling this up quickly becomes very difficult to work with. 

  Thus, one major benefit of using React is the ability to build out components, which are basically chunks of code (functions) that we can reuse whenever necessary. Inside a React component we can write JS code, build out HTML elements, and can even style inline (there are also other solutions for styling) - all in the same place (using JSX)! This alone makes React a very elegant solution to having to navigate multiple documents, having to repeat similar chunks of code, etc.

  In addition to abstracting away some cumbersome lines of code with components, what React is perhaps even more useful for is how it tracks state, across up to potentially millions of users and variables, and renders a web experience that reflects this changing data. An analogy I found that I like is the following: imagine the DOM is a fence, and you're tasked with painting the fence, and every day there are minor new changes to be made to one or two boards of the fence. Without React, you might be stuck repainting the entire fence every time you want to make any change. With React, however, you can keep track of the changes and can track down each individual fence board and apply the new rules, effectively freshly painting just the necessary boards, without having to repaint everything. This enables enormous scaling with virtually infinite variables across users, as seen on websites like Twitter or Facebook.

  In short, React is a JS library with lots of tools to streamline the production of web apps, all the way up to enterprise scale, solving the problem of how to display a web experience that REACTS to user interaction. So far we have only seen a bit of its functionality, like state hooks and effect hooks. 

1. Describe component state.

  State is a way of tracking the status (or state) of one or more variables in an application. This is useful because as a user interacts with our app, we probably want to change what is displayed based on the state of one or more variables that the user is changing. A simple example could be a lightbulb app that displays a lightbulb and an on/off button, where the on/off button changes the state of the lightbulb. What the user then sees depends on the state of the lightbulb - a yellow bulb if lightbulb is on, a clear one if the bulb is off. Although this is a simple example, it illustrates the role of state in conditional rendering.

  State can be used by using the State Hook.

1. Describe props.

  Props most basically are arguments passed into React components. In this sprint we focused on props being set by state, so as the user interacts with the page, thus changing the state of certain variables, different arguments are passed into our components causing our page to render differently. 

  Props are also used to pass data from one component to another. This could be useful if some state is set in a parent component, but a nested component needs access to it. 

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

  A side effect is anything that affects something outside the scope of the function being executed. In this sprint we mainly focused on API calls, but other examples include timers, changing global variables, manipulating the DOM, etc. 

  Side effects can be triggered using the Effect Hook.

  We can sync a side effect to changes in certain state or props by passing in a second argument into our effect hook. This argument is an array and can take a list of the variables we want to watch for changes in - when any of these variables (state/props) change, the effect hook fires. This will make the effect fire both when it first mounts, and when it sees changes in any of the listed dependencies. 

  Additionally, if we want to fire the effect hook only upon first mounting, we can pass it an empty array.