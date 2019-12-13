==========================
MAPP Project 2 - drCinema
==========================
Group 9: Daníel Már Guðmundsson, Reynir Stefánsson, Sæmundur Ragnarsson


Base Features:
--------------
	All information on movies and theaters is retrieved in real time using http://api.kvikmyndir.is/
		-Information may be updated during runtime

	When drCinema is launched the user is prompted a list of all theaters
		- Theaters are ordered in ascending alphabetical order based on ASCII values on their names
		- The website of each theater is displayed as well
		- When a user clicks on a theater, the user is redirected to a screen with detailed information about the theater

	A user may view each theater in detail
		- There, a user is able to view the following information on a theater: Name, description, address, phone, website
			- A user may click in the website link and be redirected to the theater's website
		- A user is able to view all movies currently being shown at a given theater
			- Each movie is displayed by title, release year, and a list of genres
			- A user may click on a displayed movie and be redirected to a detailed view for the given movie, with respect to the theater showtimes for the movie

	A user may view each movie, with respect to the theater showtimes
		- There, a user is able to view the following information on a movie: Name, poster, plot summary, duration, release year, a list of genres and showtimes
			- Showtimes are only displayed for current theater
			- Showtimes are displayed with a time, room number and a clickable link to buy tickets to the show

	A user may view upcoming movies
		- There, a user is able to view the following information on an upcoming movie: Name, release date, poster
		- Upcoming movies are ordered in descending order by release date
		- A user may view the trailer for an upcoming movie if one exists by clicking on the movie thumbnail

	Redux is used in accordance to project description
		- Thunk is used as middleware to create async action creators
		- We use mapStateToProp to retrieve the information we gathered using our async network calls, which is stored in our state
		- Multiple, decoupled reducers are used to catch actions fired when population / changing information
			- These reducers work together to continuously keep track of correct information

Extra Features:
---------------
	A user may view the trailer for an upcoming movie if one exists by clicking on the movie thumbnail

Unspecified Bonus Features:
---------------------------

	For a more enjoyable user experience, a spinner is displayed when the app is loading data
		-This being because every screen is loaded by retrieving information straight from the API which causes delay and could cause trouble if not handled properly
	To streamline the use case of a user buying a ticket to a desired film, all showtime links are clickable and direct to a webpage where the user may buy a ticket
	To streamline the use case of a user wanting more information on a theater, all theaters are displayed with a clickable link which directs to a webpage where the user may read additional information on a theater
	drCinema provides a more fault tolerant interpretation of http://api.kvikmyndir.is/. Case in point, the app can display Paw Patrol, despite inconsistencies in JSON response
	drCinema will update data during runtime to provide the user with time sensitive information
