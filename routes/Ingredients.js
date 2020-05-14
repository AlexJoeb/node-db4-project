const router = require('express').Router();
const db = require('../data/db-helper');

router.get('/:id/recipes', (req, res) => {
    const ingredient_id = req.params.id;
    return db.getRecipesBySingleIngredient(ingredient_id)
        .then(resp => res.status(200).json(resp))
        .catch(error => res.status(500).json(error));
})

module.exports = router;