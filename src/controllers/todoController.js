import c from "config";
import Todo from "../models/Todo.js";


const createTask =  async (req, res) => {
   
      try {
        const createTodo = await Todo.create(req.body)
       
        res.status(200).json({
            message: "Task Created"
        })

      } catch (error) {
        res.status(400).json({
            error: error.message
            
        })
    }
   
}

const getAll = async (req, res) => {
 
    try {
        let page = req.body.page - 1
        let pageSize = 9
        const allTodoList = await Todo.findAndCountAll(
            paginate(
              {
                where: {}, // conditions
              },
              { page, pageSize },
            ),
          );

        return res.status(200).json(allTodoList)

    } catch (error) {

        res.status(400).json({
            error:error.message
        })
    }

}


const getSpecificTask = async (req, res) => {
 
    try {

        const getTaskById = await Todo.findByPk(req.params.id);

        if(!getTaskById) {
            return res.status(400).json({message: "Data doesnt exist"})
        }

        return res.status(200).json(getTaskById)

    } catch (error) {

        res.status(400).json({
            error:error.message
        })
    }

}

const updateTask = async (req, res, next) => {
     
    try {

        const updateTaskById = await Todo.update({name: req.body.name, status: req.body.status}, {where: {id: req.params.id} },)

        
        if(!updateTaskById)
        {
            return res.status(400).json({msg: "Data doesnt exist"})
        }

        res.status(200).json({message: "Task is updated"});

    } catch (error) {
        res.status(400).json({
            message: error.message
            
        })
    }

}



const deleteSpecificTask = async (req, res) => {
 
    try {

        const getTaskById = await Todo.destroy({
            where: {
                id: req.params.id
            }
        })

        if(!getTaskById) {
            return res.status(400).json({message: "Data doesnt exist"})
        }

        return res.status(200).json({message: "deleted Successfully"})

    } catch (error) {

        res.status(400).json({
            error:error.message
        })
    }

}


const paginate = (query, { page, pageSize }) => {
    const offset = page * pageSize;
    const limit = pageSize;
  
    return {
      ...query,
      offset,
      limit,
    };
  };



export default {
    getAll,
    createTask,
    getSpecificTask,
    deleteSpecificTask,
    updateTask
};