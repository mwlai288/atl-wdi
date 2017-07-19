const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
		const order = ["Your order of 50 small pizza's will be ready soon."];
			res.render('order', {
        data: order
    });
	
});



module.exports = router;
