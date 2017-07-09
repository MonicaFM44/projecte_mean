const   dbcontext = require("../database/dbcontext"),
        httpResponse = require("../utils/http-response")

class QuotesController {

    async getAll(req, res, next) {
        let { movieId, categoryId, character } = req.query,
            where = {}
        if (categoryId) where.category_id = categoryId
        if (character) where.character = character
        if(movieId) where.movie_id = movieId
        try {
            let quotes = await dbcontext.find("quote", where)
            if (!quotes.length) httpResponse.notFound(res)
            else httpResponse.ok(res, quotes)
        } 
        catch (error) {
            httpResponse.badRequest(res, error)
        }
    }

    async getSingle(req, res, next) {
        let { id } = req.params
        try {
            res.json(await dbcontext.get("quote", id))
        }
        catch(err) {
            res.status(404).json(err) 
        }
    }

    async create (req, res, next) {
        let userQuote = req.body
        delete userQuote.id
        delete userQuote.category
        delete userQuote.movie
        try {
            httpResponse.ok(res, await dbcontext.create("quote", userQuote))
        }
        catch(err) {
            if(err.type === "validation") httpResponse.badRequest(res, err)
            httpResponse.error(res)
        }
    }

    async update (req, res, next) {
        let { id } = req.params,
            userQuote = req.body
        delete userQuote.id
        delete userQuote.category
        delete userQuote.movie
        try {
            let quote = await dbcontext.get("quote", id)
            res.json(await dbcontext.update(quote, userQuote))
        } 
        catch (err) {
            res.status(500).json(err)
        }
    }

    async remove(req, res, next) {
        let { id } = req.params
        try {
            let quote = await dbcontext.get("quote", id)
            await dbcontext.remove(quote)
            res.json(quote)
        }
        catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = new QuotesController()