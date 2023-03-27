<h1>Currency Ticker with Dark/Light Mode</h1>

### [Demonstration](https://main--singular-salmiakki-a6c94d.netlify.app/)

<h2>Description</h2>
A web application that displays daily currency rates between the Korean won (KRW) and the United States dollar (USD) using an API. Users can toggle a dark/light mode with the moon/sun buttons.
<br />

<h2>Languages and Utilities Used</h2>

- <b>JavaScript ES6 Modules</b><br />
The website consists of three JavaScript modules:

  1.  getCurrency<br />
This module fetches the current exchange rate of USD to KRW from an API and displays it on the page. It uses the fetch API to make a GET request to the API endpoint, and then updates the DOM with the response data. 

  2.  getFluctuation<br />
This module fetches the fluctuation of the exchange rate of USD to KRW over the past day from an API and displays an arrow icon that indicates the direction of the change (up, down, or no change). It uses the fetch API to make a GET request to the API endpoint, and then updates the DOM with the response data. 
  3.  toggleClass<br />
This module toggles a class on a DOM element when the theme toggle button is clicked, to switch between light and dark mode. It uses the classList property of the DOM element to add or remove the class, depending on its current state.
- <b>HTML</b>
- <b>CSS</b>

<h2>Environments Used </h2>

- <b>Windows 11 Pro</b> (22H2)

<h2>Program walk-through:</h2>

<p align="center">
Launch the website: <br/>
<img src="https://i.imgur.com/Isv4l9a.png" height="80%" width="80%" alt="Currency Ticker"/>
<br />
<br />
Light mode:  <br/>
<img src="https://i.imgur.com/u1n3u9U.png" height="80%" width="80%" alt="Disk Sanitization Steps"/>
