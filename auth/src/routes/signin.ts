import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
    res.send("working...")
});

export { router as signinRouter };
