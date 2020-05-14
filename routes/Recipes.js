const router = require('express').Router();
const db = require('../data/db-helper');

router.get('/', (req, res) => {
    return db.getRecipes()
        .then(resp => res.status(200).json(resp))
        .catch(error => res.status(500).json(error));
})

router.get('/:id', (req, res) => {
    return db.getRecipeById(req.params.id)
        .then(resp => resp ? res.status(200).json(resp) : res.status(404).json({ message: 'Recipe not found.'}))
        .catch(error => res.status(500).json(error));
})

router.get('/:id/shoppingList', (req, res) => {
    return db.getShoppingList(req.params.id)
        .then(resp => res.status(200).json(resp))
        .catch(error => res.status(500).json(error));
})

router.get('/:id/instructions', (req, res) => {
    return db.getInstructions(req.params.id)
        .then(resp => res.status(200).json(resp))
        .catch(error => res.status(500).json(error));
})

module.exports = router;