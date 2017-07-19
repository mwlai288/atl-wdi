const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
		const hello = ["Let's have a pizza party!"];
			res.render('index', {
        data: hello
    });
	
});



module.exports = router;
