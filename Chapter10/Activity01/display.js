var getCastElements = function (movie) { return movie.characters.map(function (character) {
    var image = character.image
        ? "<img src=\"http://image.tmdb.org/t/p/w185/".concat(character.image, "\" class=\"image\" />")
        : "<img src=\"https://via.placeholder.com/185x277.png?text=No+Image\" class=\"image\" />";
    var charName = character.name ? " as ".concat(character.name) : "";
    return "<div class=\"character\">\n        ".concat(image, "\n        <div class=\"actor\">").concat(character.actor, "<br />").concat(charName, "</div>\n    </div>");
}).join(""); };
var getRuntime = function (_a) {
    var runtime = _a.runtime;
    if (!runtime) {
        // do not display the runtime field if we don't know the runtime
        return "";
    }
    if (runtime < 60) {
        return "<div class=\"runtime detail\"><strong>Run time: </strong>".concat(runtime, "min</div>");
    }
    var hours = (runtime / 60) | 0;
    var minutes = runtime % 60;
    return "<div class=\"runtime detail\"><strong>Run time: </strong>".concat(hours, "h ").concat(minutes, "min</div>");
};
var showResults = function (movie) {
    var backdropUrl = "http://image.tmdb.org/t/p/w1280/".concat(movie.backdropUrl);
    document.body.style.backgroundImage = "url('".concat(backdropUrl, "')");
    var result = document.getElementById("result");
    var poster = movie.posterUrl
        ? "<img src=\"http://image.tmdb.org/t/p/w500/".concat(movie.posterUrl, "\" class=\"poster\" />")
        : "<img src=\"https://via.placeholder.com/500x750.png?text=No+Poster+Available\" class=\"poster\" />";
    result.innerHTML = "<div class=\"main-part\">\n        <div class=\"title\">".concat(movie.title, " (").concat(movie.releaseDate.getFullYear(), ")</div>\n        ").concat(poster, "\n        <div class=\"tagline\">").concat(movie.tagline, "</div>\n    </div>\n    <div class=\"details-part\">\n        <div class=\"overview detail\"><strong>Plot summary: </strong>").concat(movie.overview, "</div>\n        <div class=\"director detail\"><strong>Directed By: </strong>").concat(movie.directedBy, "</div>\n        <div class=\"screenplay detail\"><strong>Written By: </strong>").concat(movie.writenBy, "</div>\n        ").concat(getRuntime(movie), "\n        <div class=\"starring detail\"><strong>Starring:</strong></div>\n        <div class=\"cast\">\n            ").concat(getCastElements(movie), "\n        </div>\n    </div>");
};
var clearResults = function (search) {
    document.body.style.backgroundImage = "";
    var result = document.getElementById("result");
    result.innerHTML = "<h1>No movies found for query \"".concat(search, "\"</h1>");
};
