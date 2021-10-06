const { uuid } = require('uuidv4');

module.exports = mongoose => {
    const Note = mongoose.model(
        'Note',
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
            },
            { timestamps: true }
        )
    );

    return Note;
};
