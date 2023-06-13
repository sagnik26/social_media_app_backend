module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("post", {
        content: {
            type: DataTypes.TEXT,
        },
        likeCount: {
            type: DataTypes.INTEGER
        },
        likedBy: {
            type: DataTypes.JSON,
            defaultValue: [],
            get() {
                return (
                  JSON.parse(this.getDataValue('likedBy'))
                )
            },
            set(value) {
              this.setDataValue('likedBy', JSON.stringify(value))
            }
        },
        dislikedBy: {
            type: DataTypes.JSON,
            defaultValue: [],
            get() {
                return (
                  JSON.parse(this.getDataValue('dislikedBy'))
                )
            },
            set(value) {
              this.setDataValue('dislikedBy', JSON.stringify(value))
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Post
}
