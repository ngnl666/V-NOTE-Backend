const db = require('../models');
const Publish = db.publish;
const handleErrorMsg = require('./errorHandle');

exports.create = (req, res) => {
  if (!req.body) {
    handleErrorMsg(res, 400, '空文章不可發布！');
    return;
  }

  const publish = new Publish({
    _id: req.body._id,
    scene: req.body.scene,
    like: req.body.like,
  });

  publish
    .save()
    .then((data) => res.send(data))
    .catch((err) => handleErrorMsg(res, 500, err.message));
};

exports.getPaginate = (req, res) => {
  const { page } = req.params;

  Publish.aggregate([
    {
      $lookup: {
        from: 'notes',
        localField: '_id',
        foreignField: '_id',
        as: 'Notes',
      },
    },
  ])
    .sort({ createdAt: 'desc' })
    .skip(5 * page)
    .limit(5)
    .then((data) => res.send(data))
    .catch((err) => handleErrorMsg(res, 500, err.message));
};

exports.getOne = (req, res) => {
  const { id } = req.params;

  Publish.findById(id)
    .then((data) =>
      data ? res.send(data) : handleErrorMsg(res, 404, '找不到此文章!')
    )
    .catch((err) => handleErrorMsg(res, 500, err.message));
};

exports.update = (req, res) => {
  if (!req.body.data) {
    handleErrorMsg(res, 400, '點選like失敗！');
    return;
  }

  const { id } = req.params;
  const { data } = req.body;

  Publish.findByIdAndUpdate(id, data, { new: true }).then((data) =>
    data ? res.send(data) : handleErrorMsg(res, 404, '點選like失敗！')
  );
};

exports.delete = (req, res) => {
  const { id } = req.params;

  Publish.findByIdAndRemove(id)
    .then((data) => data)
    .catch((err) => handleErrorMsg(res, 500, err.message));
};
