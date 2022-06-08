const { Router } = require('express');
const { cats } = require('../../data/cats');

module.exports = Router()
  .get('/:id', (req, res) => {
    const id = req.params.id;
    const catDetail = cats.find((cat) => cat.id === id);
    res.json(catDetail);
  })

  .get('/', (req, res) => {
    const list = cats.map((cat) => {
      return {
        id: cat.id,
        name: cat.name,
      };
    });
    res.json(list);
  });
