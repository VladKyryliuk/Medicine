module.exports = (sequalize, DataTypes) => {

    const Cart = sequalize.define("Cart", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    return Cart;
};