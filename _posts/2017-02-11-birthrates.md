---
layout: project
title:  "Global Birth Rates Interactive Data Viz"
date:   2017-07-15 10:19:47 +0100
semester_date: Winter 2016
categories: [projects]
tags: []
course: GENERATIVE DESIGN
prefix: birthrates
color_main: "#5E091C"
colors: ["#32a1ed", "#040404", "#f5f1df"]
custom_style: birthrates_style
custom_js:
description: This interactive data visualization displays the population and birth rates of every country on earth. The user can travel from 1950 up until 2010 and watch the countries develop. 
---

{% include header.html 
    media="video"
    file="birthrates-header.mp4" 
    alt="" 
    caption="This interactive data visualization displays the population and birth rates of every country on earth. The user can travel from 1950 up until 2010 and watch the countries develop." %}

### Goal
Programmed Design II incorporated the creation of an interactive data visualization based on real data using only colors and basic shapes. Main goal was to find interesting relationships in the data and display them in several connected visualizations in a comprehensible way.

### Introduction
This project uses open data supplied by the UN about fertility rates (children per 100 women in the corresponding year) of most countries, age distribution of mothers and their total populations. Additionally, as a map based view proved to be the most readable, I used Googles coordinate data to map each countries data to its geographic center. Each datapoint was available every 5 years from 1960 to 2015. This makes it possible to see how each country changed in the past 55 years.

{% include media.html 
    border=true
    media="video"
    file="birthrates-circle-progression.mp4" 
    alt="Demonstation of relative circle area" 
    caption="Two circles represent each country. The inner circle area is calculated according to birth rates and the outer one according to population. While both values cannot be directly compared, their relation and change over time can." %}

### Selection
The user can select countries on the world map to compare them. Selected countries are added to the selection on the left side of the screen and normalized to display their population as the same radius. This makes their individual birth rates easier to compare. From there on, users can view birth rates of all years of all selected countries or get a detailed view of birth rates in all six age groups. This is of course available in all years.

### Trackpad Controls
Because nothing like buttons and text were to be used, I implemented trackpad gestures via BetterTouchTool.

{% include useCase.html useCaseName="birthrates-useCase" %}

### Process and Technology

After I found a couple of interesting data sets. I started with scribbling different screens and ways to display the data to get an idea how my visulalizations could look like. After my topic was settled I created Illustrator concepts of the complete information structure over multiple iterations. Once that was done I used JS and GSAP to build a working prototype.

### About 

This is a student project created during winter semester 2016 of the Programmed Design II course by Hartmut Bonacker and Jens Döring.
