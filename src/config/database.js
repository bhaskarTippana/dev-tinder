const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://kids-store:kids-store@cluster0.iopu6ue.mongodb.net/dev-tinder-be"
    )
};

module.exports = {connectDB};