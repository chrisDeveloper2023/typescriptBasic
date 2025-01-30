import { DataTypes, Model } from "sequelize";
import sequelize from "../config/db";

export class User extends Model {
    public id!: number;
    public nombre!: string;
    public email!: string;
    public fecha_creacion!: Date;
}

User.init(
    {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        fecha_creacion:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        
    },
    {
        sequelize,
        tableName: 'usuarios',
    }
)

export default User