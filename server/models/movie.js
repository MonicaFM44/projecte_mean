class Movie {

    define (db) {
        db.define("movie", {
            title: {
                type: "text",
                required: true,
                unique: true
            },
            year: {
                type: "integer",
                requiered: true
            },
            id: {
                type: "integer",
            }
        })
    }
}

module.exports = new Movie()