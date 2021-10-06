const { uuid } = require('uuidv4');
const { mongoose } = require('.');

module.exports = mongoose => {
    const Publish = mongoose.model(
        'Publish',
        mongoose.Schema(
            {
                _id: { type: String, default: uuid.v4 },
                images: {
                    data: Buffer,
                    contentType: String,
                },
                title: String,
                tags: Array,
                content: String,
                author: String,
                like: Number,
            },
            { timestamps: true }
        )
    );

    return Publish;
};
