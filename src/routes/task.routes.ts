const router = require("express").Router();

const auth = require('../middlewares/auth.middleware')

const c = require("../controllers/task.controllers")

router.use(auth)

router.post('/',c.createTask)
router.get('/',c.getTasks)
router.get("/:id",c.getTask)
router.put("/:id",c.updateTask)
router.delete("/:id",c.deleteTask)



module.exports = router;

