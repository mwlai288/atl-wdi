const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
		const toppings = ['red onion',' mushrooms', ' sausage'];
			res.render('toppings', {
        data: ("I would like a pizza with " + toppings )
    });
	
});



module.exports = router;
