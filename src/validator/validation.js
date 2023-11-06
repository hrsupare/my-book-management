const bookvalidation = async function (req, res, next) {
  try {
    let data = req.body;
    const { title, summary, price, author } = data;

    if (!title) {
      return res.status(400).send({ status: false, msg: `Title Not Found` });
    }
    if (!summary) {
      return res.status(400).send({ status: false, msg: `summary Not Found` });
    }
    if (!price) {
      return res.status(400).send({ status: false, msg: `price Not Found` });
    }
    if (!author) {
      return res.status(400).send({ status: false, msg: `author Not Found` });
    }

    next();
  } catch (err) {
    res
      .status(500)
      .send({ status: false, massage: "success", msg: err.message });
  }
};

module.exports = {
  bookvalidation,
};
