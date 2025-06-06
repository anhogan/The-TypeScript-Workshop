var server = "https://api.themoviedb.org/3/";
var apiKey = '<<insert-your-api-key-here>>';
var getSearchUrl = function (value) { return "".concat(server, "search/movie?api_key=").concat(apiKey, "&query=").concat(value); };
var getMovieUrl = function (movieId) { return "".concat(server, "movie/").concat(movieId, "?api_key=").concat(apiKey); };
var getPeopleUrl = function (movieId) { return "".concat(server, "movie/").concat(movieId, "/credits?api_key=").concat(apiKey); };
var search = function (value) {
    var xhr = new XMLHttpRequest();
    var url = getSearchUrl(value);
    xhr.open('GET', url);
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        if (data.results.length !== 0) {
            var resultMovie_1 = data.results[0];
            var movieXhr = new XMLHttpRequest();
            var movieUrl = getMovieUrl(resultMovie_1.id);
            movieXhr.open('GET', movieUrl);
            movieXhr.onload = function () {
                var movieData = JSON.parse(this.response);
                var peopleXhr = new XMLHttpRequest();
                var peopleUrl = getPeopleUrl(resultMovie_1.id);
                peopleXhr.open('GET', peopleUrl);
                peopleXhr.onload = function () {
                    var data = JSON.parse(this.response);
                    data.cast.sort(function (f, s) { return f.order - s.order; });
                    var mainActors = data.cast.slice(0, 6);
                    var characters = mainActors.map(function (actor) { return ({
                        name: actor.character,
                        actor: actor.name,
                        image: actor.profile_path
                    }); });
                    var directors = data.crew
                        .filter(function (person) { return person.department === "Directing" && person.job === "Director"; })
                        .map(function (person) { return person.name; });
                    var directedBy = directors.join(" & ");
                    var writers = data.crew
                        .filter(function (person) { return person.department === "Writing" && person.job === "Writer"; })
                        .map(function (person) { return person.name; });
                    var writtenBy = writers.join(" & ");
                    var movie = {
                        id: movieData.id,
                        title: movieData.title,
                        tagline: movieData.tagline,
                        releaseDate: new Date(movieData.release_date),
                        posterUrl: movieData.poster_path,
                        backdropUrl: movieData.backdrop_path,
                        overview: movieData.overview,
                        runtime: movieData.runtime,
                        characters: characters,
                        directedBy: directedBy,
                        writenBy: writtenBy
                    };
                    showResults(movie);
                };
                peopleXhr.send();
            };
            movieXhr.send();
        }
        else {
            clearResults(value);
        }
    };
    xhr.send();
};
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search").addEventListener("click", function () {
        var movieInput = document.getElementById("title");
        var movieTitle = movieInput.value;
        search(movieTitle);
    });
    document.getElementById("title").addEventListener("keyup", function (event) {
        if (event.key !== "Enter") {
            return;
        }
        document.getElementById("search").click();
        event.preventDefault();
    });
});
