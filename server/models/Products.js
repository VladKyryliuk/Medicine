module.exports = (sequalize, DataTypes) => {

    const Products = sequalize.define("Products", {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },

        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    });

    Products.associate = (models) => {
        Products.belongsTo(models.Pharmacy);
    };

    return Products;
}