const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const USER = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: 'USER'}
})

const MEME = sequelize.define('meme', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
    keywords: {type: DataTypes.ARRAY(DataTypes.STRING)},
    img: {type: DataTypes.STRING, unique: true, allowNull: false}
})

const MemeStorage = sequelize.define('meme storage', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

MemeStorage.hasMany(MEME)
MEME.belongsTo(MemeStorage)
USER.hasOne(MemeStorage)
MemeStorage.belongsTo(USER)

module.exports = {
    USER, MemeStorage, MEME
}