---
layout: project
title:  "Destinations"
title_long:  "Wayfinding design software"
date:   2020-08-20 10:19:47 +0100
semester_date: Summer 2020
categories: [projects]
tags: [featured, highlight, hero_section]
course: Bachelor Project
prefix: destinations
color_main: "#004144"
colors: []
external_page: www.build-destinations.com
external_page_title: Visit the goHfG project site
description: "Destinations is an application concept that simplifies the design process of wayfinding systems. Users can view a digital representation of a project site, visually plan visitor routes, sign placements and messages."
description_short: "Analyzing the design process of wayfinding systems"

annotation: Most Recent

sitemap:
    priority: 1.0


--- 

{% include header.html 
    media="video"
    file="destinations-header-2.mp4" 
    alt="Destinations application screenshot" 
    caption="Destinations simplifies the wayfinding design process. It assists during analysis of project sites, placement of signs and management of visitor routes." %}

## Introduction

Wayfinding systems are used to help and guide visitors navigating large buildings or places. In cities, we are constantly surrounded by such systems to give us orientation. Wayfinding systems have the difficult task of connecting rooms and floors of buildings or even whole buildings on a strategic level. At the same time, every sign has to be easily understood by first-time-visitors. After entering a building, visitors have many different goals or objectives in mind that they want to complete and they expect to be guided to them without friction. 

Most ambiguities in a guidance system can be eliminated by increasing the number of signs. More elegant than increasing the frequency of information is to achieve the best possible positioning of signs in a space. The foundation for this is a sound wayfinding strategy. 

> Goal of this project is to first understand the design process of wayfinding systems and then design a specialized application for it.

## The Current Design Process

The relevant stages of the wayfinding design process for our project are analysis, strategy, programming and design. 

During analysis designers get an understanding for the architecture, either through plans, renders or by visiting a building if it exists already. They analyze lines of sight and circulation patterns. 

Following analysis, a strategy is developed outlining how visitors should be guided through a site. Where traffic flows should be combined or split up, which hallways should be highlighted and how a hierarchy should be constructed. 

> "[We worked very graphically] while piecing those sequences together and checked step-by-step if the routes are cohesive."
 
During programming, designers determine where visitors have to make decisions and create the first signs and sign sequences. They also start working on which messages - like rooms and directions - should be displayed on them. Visitors should not be overwhelmed with information and get confirmation on their way in a predictable manner. 

Finally, in the design phase different variants of signs are created. Prototypes are manufactured to test different materials, colors and the signs themselves in their intended size. Sometimes walls or even rooms are created from cardboard to test how signs have to be positioned in their environment.

{% responsive_image 
    border: "true"
    media: "image"
    path: assets/img/destinations-system-design-process.jpg
    alt: "Wayfinding system design process according to literature" 
    caption: "During our research phase we compared the design process how it is described in 'Wayshowing > Wayfinding' and 'The Wayfinding Handbook'." %}

{% comment %}

## Problems

There are two types of projects for wayfinding designers. Either they are tasked to create signage for an existing building or a planned building. 

Currently, the work process of designers in the creation of guidance systems is strongly characterized by manual work. Signs are located on printed floor plans and the digital designs of signs have to be manually referenced using Post-It's, for example. Although the process can be made easier with digital tools, there is no solution for designers to get an overview of all sign locations and the designs of those signs together. Information sequences must also be created manually. In addition, all information and its references need to be kept up to date manually and continuously. 
{% endcomment %}

{% comment %}
For our research, we primarily worked with three books. "Wayshowing > Wayfinding" by Per Mollerup, serves as an easy and compact introduction to signaling. "The Wayfinding Handbook" by David Gibson describes the development process in more detail and "The Signage Design Manual" by Edo Smitshuijzen goes into great detail and gives a complete overview of the entire design process. 

When comparing the design process in all three sources, it becomes clear that the authors are largely in agreement. There are only minor differences, which gives them additional credibility. 
{% endcomment %}


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

A wayfinding system can easily grow to include hundreds of different signs and become very complex. Therefore, it is necessary to create a separate database with all signs, in which data such as sign type, size, messages and exact position is recorded. 

All of this data must be kept up-to-date in an ongoing project. Inevitably, changes occur during work and after coordination with project partners. This makes the process prone to errors and creates a lot of manual work. This becomes even more of a problem when working on large projects that can encompass 3.000 signs or more. For this reason, one of our interview partners uses a custom database software to manage their projects internally. 


> Following our research, we formulated three how might we questions that encapsulate our findings

1. How might we aid designers in analyzing project sites?
2. How might we eliminate repetitive tasks and simplify management of signage databases?
3. How can we use simulation to preview sign concepts before production?



{% include useCase.html useCaseName="destinations-useCase" %}

## Data Structure

One of the most important aspects of Destinations is it's data structure that is highly optimized for the design workflow. Basis is a 2D or 3D model of a site, from which decision points are generated. On top of these two components users create information sequences between places. They connect the previously generated decision points on their way to their destination. When signs are created they are assigned to a decision point and have access to all information sequences that run through that point. Because of this, signs can access the destinations referenced by sequences and in turn properties of those destinations. 

As the last puzzle piece, templates connected to signs can be dynamically filled with referenced data like room properties.

This approach makes Destinations and its workflow highly flexible. Properties are dynamic and editable and connected elements are updated correspondingly. 

{% comment%}

{% responsive_image 
    border: "true"
    media: "image"
    path: assets/img/destinations-circulation-patterns.jpg
    alt: "Destinations data structure" 
    caption: "" %}


Left: Graphic detailing the destinations data structure in different layers. 

|  Templates
|  Signs                   |
|  Information Sequences   |
|  Decision Points         |  
|  Building Model          |
----------------------
Right: Workflow in Destinations

Building Model -> Visitor Routes -> Information Sequences -> Signs 

{% endcomment%}



## About
This project was created during summer semester 2020 together with [Martin Wehl](http://www.martinwehl.de) as part of our bachelor thesis in Interaction Design at HfG Schwäbisch Gmünd. The project was supervised by Prof. Marc Guntow and [ Prof. Daniel Utz](http://www.danielutz.de). 

It is part of the goHfG startup program and was awarded the goAward in February 2021. More information and updates available at [www.build-destinations.com](https://www.dev.build-destinations.com).

[Get the Documentation (.pdf, 47MB)][Doc]

[Doc]: /assets/docs/Dokumentation_MartinWehl_KaiMagnusMueller.pdf
