import express from "express"

let router = express.Router();

router.get("/users/:id", (req, res, next) => {
    // return userService.findUser(req.params.id)
})

router.post("/users", (req, res, next) => {
    // return service.createUser(req.body())
})

router.put("/users/:id", (req, res, next) => {
    // return service.updateUser(req.body())
})

export default router;