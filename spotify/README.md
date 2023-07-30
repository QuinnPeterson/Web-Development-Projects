<h1 align="center">
  Spotify Clone
  <br>
</h1>

<h4 align="center">A  clone of the spotify website using PHP and MYSQL.</h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#technologies-used">Technologies Used</a> •
  <a href="#license">License</a>
</p>

![screenshot](https://github.com/QuinnPeterson/QuinnPeterson/blob/main/projects/spotify/screenshot%201.PNG?raw=true)

## Key Features

- Audio player using javascript
- Sign in and Sign up functionality
- Create playlists of different songs you like
- Profile edit options

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/QuinnPeterson/Web-development-projects/spotify

# Go into the repository
$ cd spotify

# Import sql file
$ cd reference
$ mysql -u [your_db_username] -p < spotify.sql

# Setup config file
cd includes/config-example.php config.php

# config.php (example)

define('DB_HOST', 'localhost');
define('DB_NAME', 'spotify');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');

# Run Xampp
$ Xampp open and start the sql server


```

## Technologies Used

- PHP
- MYSQL
- Bootstrap 4
- AJAX

## License

MIT

---

> GitHub [@QuinnPeterson](https://github.com/QuinnPeterson)
> LinkedIn [Quinn Peterson | LinkedIn](https://www.linkedin.com/in/quinn-peterson-software-engineer/)
