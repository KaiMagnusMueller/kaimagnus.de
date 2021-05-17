---
layout: project
title:  "Destinations"
date:   2020-08-20 10:19:47 +0100
semester_date: Summer 2020
categories: [projects]
tags: [featured]
course: Bachelor Project
prefix: destinations
color_main: "#004144"
colors: []
custom_style: destinations_style
custom_js: 
external_page: www.build-destinations.com
external_page_title: Visit the goHfG project site
description: "Destinations simplifies the design process of wayfinding systems. Users can view a digital representation of their project site and visually plan visitor routes and sign placements."
annotation: Most Recent
--- 

{% include header.html 
    media="image"
    file="destinations-header.jpg" 
    alt="Destinations application screenshot" 
    caption="Destinations simplifies the wayfinding design process. It assists during analysis of project sites, placement of signs and management of visitor routes." %}

## Introduction

Wayfinding systems are used to help and guide visitors navigating large buildings or places. In cities, we are constantly surrounded by such systems to give us orientation. Wayfinding systems have the difficult task of connecting rooms and floors of buildings or even whole buildings on a strategic level. At the same time, every sign has to be easily understood by first-time-visitors. After entering a building, visitors have many different goals or objectives in mind that they want to complete and they expect to be guided to them without friction. 

Most ambiguities in a guidance system can be eliminated by increasing the number of signs. More elegant than increasing the frequency of information is to achieve the best possible positioning of signs in a space. The foundation for this is a wayfinding strategy. Cost considerations, aspects of sustainability and aesthetic criteria also dictate to use as few signs as possible, but as many as necessary.

> Goal of this project is to first understand the design process of wayfinding systems and then design a specialized application for it.

## The Current Design Process

Currently, the work process of designers in the creation of guidance systems is strongly characterized by manual work. Signs are located on printed floor plans and the digital designs of signs have to be manually referenced using Post-It's, for example. There is no solution for designers to get an overview of all sign locations and the designs of those signs together. Information chains must also be created manually. In addition, all information and its references need to be kept up to date manually and continuously.

{% comment %}
For our research, we primarily worked with three books. "Wayshowing > Wayfinding" by Per Mollerup, serves as an easy and compact introduction to signaling. "The Wayfinding Handbook" by David Gibson describes the development process in more detail and "The Signage Design Manual" by Edo Smitshuijzen goes into great detail and gives a complete overview of the entire design process. 

When comparing the design process in all three sources, it becomes clear that the authors are largely in agreement. There are only minor differences, which gives them additional credibility. 
{% endcomment %}

{% responsive_image 
    border: "true"
    media: "image"
    path: assets/img/destinations-system-design-process.jpg
    alt: "Wayfinding system design process according to literature" 
    caption: "During our research phase we compared the design process how it is described in 'Wayshowing > Wayfinding' and 'The Wayfinding Handbook'." %}

## Circulation Patterns

Studying traffic flows is one of the most important steps in developing a wayfinding system. For this purpose, traffic flows are drawn on floor plans. First, all rooms, entrances, elevators, staircases, and other transitions between floors are marked. After that, all destinations and connectors are marked. Finally, traffic flows with their direction of movement can now be entered and illustrated. 

Designers commonly receive documents detailing current or predicted traffic flows and important destinations from the developers and architects. In existing buildings they conduct on-site surveys as well.

Sign positions can then be drawn where they are needed to get an overview of the decisions visitors have to make.

{% responsive_image 
    border: "true"
    media: "image"
    path: assets/img/destinations-circulation-patterns.jpg
    alt: "Circulation patterns " 
    caption: "Signage development in three steps. First, circulation patterns for all types of traffic are created. Second, preliminary sign positions are marked on the floor plan. Finally, signs are marked on the plan with their reference codes to the database." %}

## Signage Databases

A signage system can easily grow to include hundreds of different signs and become very complex. Therefore, it is necessary to create a separate database with all signs, in which data such as sign type, size, messages and exact position is recorded. 

All of this data must be kept up-to-date in an ongoing project. Inevitably, changes occur during work and after coordination with project partners. This makes the process prone to errors and creates a lot of manual work. 

{% include useCase.html useCaseName="destinations-useCase" %}






[Get the Documentation (.pdf, 47MB)][Doc]

[Doc]: /assets/docs/Dokumentation_MartinWehl_KaiMagnusMueller.pdf
