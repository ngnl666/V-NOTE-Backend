const { v4: uuidv4 } = require('uuid');

module.exports = mongoose => {
    const Note = mongoose.model(
        'Note',
        mongoose.Schema(
            {
                _id: { type: String, default: uuidv4() },
                author: String,
                title: String,
                tags: Array,
                content: String,
                // img: {
                //     data: Buffer,
                // },
            },
            { timestamps: true, versionKey: false }
        )
    );

    return Note;
};
