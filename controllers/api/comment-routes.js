const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require('../../utils/auth');

//----Get all comment route----
router.get("/", (req, res) => {
    Comment.findAll({
        attributes: [
            "id",
            "comment_text",
            "user_id",
            "post_id",
            "created_at",
        ],
        order: [["created_at", "DESC"]],
    })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

//----Create comment route----
router.post('/', withAuth, (req, res) => {
    if (req.session) {
        Comment.create({
            comment_text: req.body.comment_text,
            post_id: req.body.post_id,
            user_id: req.session.user_id
        })
        .then(dbCommentData => res.json(dbCommentData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    }
});

//----Delete comment route----
router.delete("/:id", withAuth, (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id,
        },
    })
    .then((dbCommentData) => {
        if (!dbCommentData) {
            res.status(404).json({ message: "No comment with this id"});
            return;
        }
        res.json(dbCommentData);
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;
