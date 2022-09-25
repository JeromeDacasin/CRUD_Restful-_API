import { Model,DataTypes } from "sequelize";

import sequelize from './../config/database.js'



class Todo extends Model { }


Todo.init(
    {
        name: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.INTEGER
        }
    }, 
    {
        sequelize,
        modelName: "todo"
    }
)

export default Todo