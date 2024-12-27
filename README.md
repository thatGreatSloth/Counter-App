# React Counter Application

This is a simple Counter App built using **ReactJS** with **JavaScript**, designed as a personal project to enhance my understanding of React concepts such as state management, effects, and event handling. The app features a persistent counter value stored in the browser's `localStorage`, ensuring the count is retained across page refreshes.

## Features

- Increment, decrement, and reset the counter value.
- Prevents decrementing below zero for a more user-friendly experience.
- Persistent state using `localStorage` to save the counter value.
- Smooth animations created with **three.js** for visual enhancement.

## Purpose

This project was created as part of my journey to learn and practice ReactJS. While the core logic and implementation of the counter functionality were developed entirely by me, the animations were included to add a touch of interactivity and aesthetics. These animations were generated with the help of **ChatGPT** using **three.js**. My current focus is on mastering ReactJS, so I opted not to delve deeply into learning three.js at this stage.

## Tech Stack

- **ReactJS**: For building the interactive user interface.
- **JavaScript**: For logic and functionality.
- **Three.js**: For animations and visuals (generated with AI assistance).

## How It Works

1. The counter initializes with a value from `localStorage` if available, or defaults to `0`.
2. The counter value updates dynamically based on user interaction:
   - **Increment**: Adds 1 to the counter.
   - **Decrement**: Subtracts 1 (but not below zero).
   - **Reset**: Resets the counter to zero.
3. Changes to the counter value are saved to `localStorage` using React's `useEffect` hook.
