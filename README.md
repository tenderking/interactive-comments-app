# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot


![Screenshot](https://user-images.githubusercontent.com/10375060/151851218-20e543e8-1c15-4c50-84b1-dee8168f759b.png)



### Links

- Solution URL: [solution URL](https://github.com/tenderking/interactive-comments-app)
- Live Site URL: [Live site](https://tenderking.github.io/interactive-comments-app/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Vue](https://v3.vuejs.org/) - JS library
- Typescript
- [Sass](https://sass-lang.com/) - For styles

### What I've learned

While working with this project I learned how to use git and github more proficiently. We  used issues on github, used project, and branched, as well as solve merge conflicts. We also used a design first approach. We had created a figma file, showing the app destructured into atoms, molecules and organisms, which means breaking down the app into small individual pieces that can me combined into bigger pieces. This method is very structural and is good for working in teams.

As for the coding we used Typescript and learned using pinia, a state management plugin for vuejs. When we have hit a wall a couple of times, but that's part of the learning process. The trickiest part was a component that takes a loop in a loop and finding the id from  props of a deep nested children. We had to revise our approach. An way to solve our challenge is to normalize the data and use actions from the store to find the id of the comments and replies. Normalizing is a new concept for us, and it's not easy to implement. In the end used pinia, a vue store to solve our issue. 

Time wise project took longer than anticipated. 

### Continued development

In the future, this project can be a full stack app. 




### Useful resources

- [v-model](https://frontendmentor.slack.com/archives/D02UXHD2C9E/p1643141504029700) - This helped for solving the typing in the textarea. I really liked this pattern and will use it going forward.
- [complex objects](https://forum.vuejs.org/t/vuex-best-practices-for-complex-objects/10143/2) - This is an amazing forum which helped me understand that nested elements are a pain, and there's a good way to do it. Even though we didn't Use it, I'd recommend it to anyone still learning this concept.


## Author


- Frontend Mentor - [@tenderking](https://www.frontendmentor.io/profile/tenderking)
- Frontend Mentor -  [@P4P1-ND](https://www.frontendmentor.io/profile/P4P1-ND)


## Acknowledgments

This project was a teamwork effort by https://github.com/P4P1-ND and https://github.com/tenderking. It was pleasure working together and we learned a lot from each other.



## Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
