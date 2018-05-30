## Introduction

This App is the backend server for DTA interview quiz, the specs of which are located at [Coding Exercise - Progress Bars](https://coding-exercise-bba593b.apps.y.cld.gov.au/),
The code is organised such that it is easier for the examiner to judge its correctness. It is assumes that this code will not be extended / reused.
 
 ## Design decisions
 
 ##### Putting all code in `app.js`
 
 Since the only purpose of the backend is to fetch the react-app and provide a randomised initial-state of the app, I am putting all code in a single file.
 In practice, I'd normally create folders like `/model` (if using a Database), `/controller`, `/service` etc.
 
 ##### Randomised state generation
 
 To simulate an _undeterministic_ initial state of the app, we generate upto 10 bars and 10 buttons, with initial value of each bar / button being between [-200, 200].
 
The state is effectively two arrays (bars and buttons) of random length and with random values. I am using the most rudimentary way of doing it, which is the most time inefficient way.
One optimization I can think of is to generate one `Math.random()` and split it arbitrarily in many `numbers`. Say, `0.1234567890` can be seen as an array `[12,3,45,678,90]`. 

