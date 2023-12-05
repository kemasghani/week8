const pool = require('./config')
const express = require('express')
const router = express.Router()

// REST API: GET, POST, PUT, DELETE
// RESPONSE CODE: 200, 201, 400, 404, 500 -->>>>>>>>

// Table Games

// GET ALL FILMS
router.get('/films', (req, res) => {
    const query = `SELECT * FROM film`
    pool.query(query, (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows)
    })

})

// GET FILM BY ID
router.get('/films/:id', (req, res) => {
    const {id} = req.params
    const query = `SELECT * FROM film WHERE id = $1`
    pool.query(query,[id], (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows[0])
    })
})

// GET ALL CATEGORY
router.get('/filmCategory', (req, res) => {
    const query = `SELECT * FROM category`
    pool.query(query, (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows)
    })
})

// GET FILM BY CATEGORY
router.get('/filmCategory/:category', (req, res) => {
    const {category} = req.params
    const query = `SELECT * FROM film_category filmCat INNER JOIN film f ON filmCat.film_id = f.film_id INNER JOIN category c ON filmCat.category_id = c.category_id where c.name = $category`
    pool.query(query,[category], (err, result) => {
        if(err) throw err;
        res.status(200).json(result.rows[0])
    })
})

module.exports = router
