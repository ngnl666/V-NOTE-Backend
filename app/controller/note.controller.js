const db = require('../models');
const Note = db.note;
const handleErrorMsg = require('./errorHandle');

// CRUD Controll
exports.create = (req, res) => {
  if (!req.body) {
    handleErrorMsg(res, 400, '標題和內容不得為空!');
    return;
  }

  const note = new Note({
    author: req.body.author,
    title: req.body.title,
    tags: req.body.tags,
    content: req.body.content,
    image: req.body.image,
  });

  note
    .save()
    .then((data) => res.send(data))
    .catch((err) => handleErrorMsg(res, 500, err.message));
};

exports.getAll = (req, res) => {
  Note.find()
    .then((data) => res.send(data))
    .catch((err) => handleErrorMsg(res, 500, err.message));
};

exports.getOne = (req, res) => {
  const { id } = req.params;

  Note.findById(id)
    .then((data) =>
      data ? res.send(data) : handleErrorMsg(res, 404, '找不到此文章!')
    )
    .catch((err) => handleErrorMsg(res, 500, err.message));
};

exports.update = (req, res) => {
  if (!req.body.data) {
    handleErrorMsg(res, 400, '編輯文章標題和內容不得為空!');
    return;
  }

  const { id } = req.params;
  const { data } = req.body;

  Note.findByIdAndUpdate(id, data).then((data) =>
    data ? res.send('文章更新成功!') : handleErrorMsg(res, 404, '文章更新失敗!')
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Note.findByIdAndRemove(id)
    .then((data) =>
      data
        ? res.send('文章刪除成功!')
        : handleErrorMsg(res, 404, '文章刪除失敗!')
    )
    .catch((err) => handleErrorMsg(res, 500, err.message));
};
