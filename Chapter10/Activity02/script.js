var server = "https://api.themoviedb.org/3/";
var apiKey = '<<insert-your-api-key-here>>';
var getSearchUrl = function (value) { return "".concat(server, "search/movie?api_key=").concat(apiKey, "&query=").concat(value); };
var getMovieUrl = function (movieId) { return "".concat(server, "movie/").concat(movieId, "?api_key=").concat(apiKey); };
var getPeopleUrl = function (movieId) { return "".concat(server, "movie/").concat(movieId, "/credits?api_key=").concat(apiKey); };
var getJsonData = function (url) { return fetch(url).then(function (response) { return response.json(); }); };
var search = function (value) {
    var url = getSearchUrl(value);
    return getJsonData(url)
        .then(function (data) {
        if (data.results.length === 0) {
            throw Error("Not found");
        }
        return data.results[0];
    })
        .then(function (resultMovie) {
        var movieUrl = getMovieUrl(resultMovie.id);
        var peopleUrl = getPeopleUrl(resultMovie.id);
        var dataPromise = getJsonData(movieUrl);
        var peoplePromise = getJsonData(peopleUrl);
        return Promise.all([dataPromise, peoplePromise]);
    })
        .then(function (_a) {
        var movieData = _a[0], peopleData = _a[1];
        peopleData.cast.sort(function (f, s) { return f.order - s.order; });
        var mainActors = peopleData.cast.slice(0, 6);
        var characters = mainActors.map(function (actor) { return ({
            name: actor.character,
            actor: actor.name,
            image: actor.profile_path
        }); });
        var directors = peopleData.crew
            .filter(function (person) { return person.department === "Directing" && person.job === "Director"; })
            .map(function (person) { return person.name; });
        var directedBy = directors.join(" & ");
        var writers = peopleData.crew
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
        return movie;
    });
};
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search").addEventListener("click", function () {
        var movieInput = document.getElementById("title");
        var movieTitle = movieInput.value;
        search(movieTitle)
            .then(function (movie) { return showResults(movie); })
            .catch(function (_) { return clearResults(movieTitle); });
    });
    document.getElementById("title").addEventListener("keyup", function (event) {
        if (event.key !== "Enter") {
            return;
        }
        document.getElementById("search").click();
        event.preventDefault();
    });
});
