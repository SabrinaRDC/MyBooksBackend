const queryHelper = require('../mysql/query').Query;

const router = require('express').Router();

router.get('/', (req, res) => {
    (async () => {``
        try {
            const sqlQuery = 'SELECT id,name,author,rating FROM books ORDER BY name;';
            const results = await queryHelper(sqlQuery);
            return res.json(results);
        } catch (err) {
            console.error('Fail to execute SQL query', sqlQuery);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        }
    })()
    .catch(err => {
        res.status(500).json({
            error: 'Internal Server Error',
        });
        console.error(err);
    });
});

router.get('/:id', (req, res) => {
    (async () => {
		const { id } = req.params;
		const sqlQuery = `SELECT * FROM books WHERE id = ?`;
        try {
            const results = await queryHelper(sqlQuery, [id]);
            return res.json(results);
        } catch (err) {
            console.error('Failed to execute SQL query:', sqlQuery);
			console.error(err);
            res.status(500).json({
                error: 'Internal Server Error',
            });
        }
    })()
    .catch(err => {
        res.status(500).json({
            error: 'Internal Server Error',
        });
        console.error(err);
    });
});

module.exports = router;