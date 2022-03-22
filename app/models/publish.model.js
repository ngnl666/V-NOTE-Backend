module.exports = (mongoose) => {
  const Publish = mongoose.model(
    'Publish',
    mongoose.Schema(
      {
        _id: String,
        scene: String,
        like: Number,
      },
      { timestamps: true, versionKey: false }
    )
  );

  return Publish;
};
