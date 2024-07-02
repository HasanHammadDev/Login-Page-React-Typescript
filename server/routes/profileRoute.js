import express from "express";
const router = express.Router();

router.post('/', (req, res) => {
    res.json({ success: true, message: 'Auth success' })
})

export default router;