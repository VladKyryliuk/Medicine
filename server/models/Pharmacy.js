module.exports = (sequalize, DataTypes) => {

    const Pharmacy = sequalize.define("Pharmacy", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }

    });

    Pharmacy.associate = (models) => {
        Pharmacy.hasMany(models.Products);
    };

    return Pharmacy;
};