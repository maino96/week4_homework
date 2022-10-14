const express = require("express");
const likesRouter = require("./likes");
const router = express.Router();
const postsRouter = require("./posts");
const commentsRouter = require("./comments");
const usersRouter = require("./users");




router.use(likesRouter);
router.use("/posts", postsRouter);
router.use("/comments", commentsRouter);
router.use("/users", usersRouter);



module.exports = router;