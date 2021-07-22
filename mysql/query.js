const connectionManager = require('./connection/manager');

async function Query(query, params) {
    const connection = await connectionManager.getConnection();
    try {
        if(!query) throw new Error('SQL query is empty');
        return new Promise((resolve, reject) => {
            connection.query(query, params, (err, result) => {
                if(err) return reject(err);
                return resolve(result);
            })
        });
    }
	catch (err) {
        console.error(err);
    }
	finally {
		connection.release();
	}
}

module.exports.Query = Query;