# Trapping Rain Water Visualizer 

An interactive web application built with TypeScript that solves and visualizes the classic Trapping Rain Water problem. The application takes an elevation map as input, calculates the total units of trapped rainwater, and renders a dynamic bar chart showcasing the blocks and trapped water.

---

## Problem Description

Given an array arr[] of size n consisting of non-negative integers, where each element represents the height of a bar in an elevation map (and the width of each bar is 1), determine the total amount of water that can be trapped between the bars after it rains.

### Example
* Input: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
* Output: 6
* Explanation: 6 units of rain water are trapped between the bars.

---

## Algorithm & Approach

This project implements the Pre-computation (Dynamic Programming) approach to solve the problem efficiently in linear time.

## Features & Visualizer

Beyond calculating the mathematical answer, this project features a visual representation layer:
* Input Validation: Safely parses comma-separated numbers and filters out negative values or invalid inputs.
* Dynamic DOM Rendering: Generates CSS-styled HTML columns where:
  ***Water Layers** are stacked precisely on top of the blocks based on the computed trapped water.
  ***Block Layers** represent the structural terrain heights.
