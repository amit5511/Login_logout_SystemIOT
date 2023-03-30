const router = require('express').Router();
const { addDevice } = require('../controller/deviceController');
const authMiddleware = require('../middleware/auth-middleware');


router.route('/add-device').put(authMiddleware.isAuth,authMiddleware.isActivated,addDevice)



module.exports=router;