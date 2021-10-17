# Overview

The entire purpose is to provide a local server that is able to request and retrieve data from OpenWeather using a specific API Key given for the use. It outputs the data into readable format where User is able to see local temperature and date. There's 2 websites (options) whether a single forecast or lists of forecasts with every city in mind at once. NodeJS and Express are used to set up the local server. Javascript and HTML, in HBS format, are implemented to program the entirety of the "Weather App".


[Software Demo Video](https://youtu.be/zIEnAYNOLSg)

# Web Pages

Main page

Renders as a simple interface with a White and Gold color scheme. The date is on the bottom corner of the widget/interface, and the temperature plus description of weather with city name are displayed to the right. There's an input with search button for the user to type their city they'd like to see. There's also a tab right under the title of the page to redirect to the secondary page.

Secondary page

Its sole purpose is to remember the requested data and display them as stack. Simple interface with some rough patches all around, but it gets the job done without being too critical.


# Development Environment

Tools used:
* Visual Studio Code
* Powershell
* Google Chrome


This program was created through the use of NodeJS, Express, Javascript, and HTML (in HBS file format).

# Useful Websites
* [Introduction to NodeJS](https://nodejs.dev/learn)
* [ExpressJS - Getting Started](https://expressjs.com/en/starter/hello-world.html)
* [W3Schools - HTML](https://www.w3schools.com/html/default.asp)

# Future Work
* Change background color.
* Implement a continuous database, so user doesn't require to retype city.
* Add some more functionality as 4-day or 5-day forecasts.
