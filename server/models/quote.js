class Quote {

    define (db) {
        db.define("quote", {
            text: {
                type: "text",
                required: true
            },
            character: {
                type: "text",
                required: true
            }
        })
    }

    associateCategory (db) {
        let { quote, category } = db.models
        quote.hasOne('category', category, { autoFetch: true, reverse: "quotes" })
    }

    associateMovie (db) {
        let { quote, movie } = db.models
        quote.hasOne('movie', movie, { autoFetch: true, reverse: "quotes" })
    }

}

module.exports = new Quote()