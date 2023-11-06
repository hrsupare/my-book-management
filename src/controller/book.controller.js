const bookModel = require("../model/book.model");

const createBook = async function (req, res) {
  try {
    const data = req.body;
    const createbooks = await bookModel.create(data);
    return res.status(201).send({
      status: true,
      message: "Success",
      data: createbooks,
    });
  } catch (err) {
    res.status(500).send({ status: false, msg: err.message });
  }
};

const getBookByID = async function (req, res) {
  try {
    let ID = req.params.id;

    console.log(ID, "ID");

    const getBook = await bookModel
      .findById(ID)
      .where("isDeleted")
      .equals(false);

    if (!getBook) {
      return res.status(404).send({ status: false, message: "book not found" });
    }

    return res
      .status(200)
      .send({ status: true, message: "Book", data: getBook });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const getAllBooks = async function (req, res) {
  try {
    const books = await bookModel.find({ isDeleted: false });

    return res
      .status(200)
      .send({ status: true, message: "Books list", data: books });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const updateBookById = async function (req, res) {
  try {
    let data = req.body;
    let id = req.params.id;

    const getBook = await bookModel
      .findById(id)
      .where("isDeleted")
      .equals(false);

    if (!getBook) {
      return res.status(404).send({ status: false, message: "book not found" });
    }

    let updatedata = await bookModel
      .findOneAndUpdate({ _id: id }, data, { new: true })
      .select({ __v: 0 });

    return res
      .status(200)
      .send({ status: true, message: "Success", data: updatedata });
  } catch (err) {
    res.status(500).send({ status: false, message: err.message });
  }
};

const deleteBookbyId = async function (req, res) {
  try {
    const id = req.params.id;

    const getBook = await bookModel
      .findById(id)
      .where("isDeleted")
      .equals(false);

    if (!getBook) {
      return res.status(404).send({ status: false, message: "book not found" });
    }

    let bookData = await bookModel.findByIdAndUpdate(
      { _id: id },
      { isDeleted: true, deletedAt: new Date() },
      { new: true }
    );

    res
      .status(200)
      .send({ status: true, message: "book is deleted Successfully" });
  } catch (error) {
    res.status(500).send({ status: false, message: error.message });
  }
};

module.exports = {
  createBook,
  getBookByID,
  getAllBooks,
  updateBookById,
  deleteBookbyId,
};
