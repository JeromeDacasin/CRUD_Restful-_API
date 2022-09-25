import app from '../src/app'
import request from 'supertest'
import Todo from './../src/models/Todo.js'
import sequelize from './../src/config/database'



beforeAll( () => {
    return sequelize.sync()
})

beforeEach(() => {
    return Todo.destroy({truncate: true})
})

describe("To Do API" , () => {

    it('Create / returns 200 OK when data request is valid', async () => {
       const response = await request(app).post('/api/todos')
        .send({
            name: 'test1',
            status: 1,
           
        })
        expect(response.status).toBe(200)
    })


    it('Create / returns success messsage when data request is valid', async () => {
        const response = await request(app).post('/api/todos')
        .send({
            name: 'test1',
             status: 1,
           
        })
        expect(response.body.message).toBe("Task Created");
    })

    it('Retrieve / returns success when get all task', async () => {
        const response = await request(app).get('/api/todos')
       
        expect(response.status).toBe(200);
    })

    it('Retrieve / returns success when get specific task', async () => {
        const response = await request(app).get('/api/todos/20')
      
        expect(response.status).toBe(200);
    })




    it("UPDATE / return success message when Update is success", async () => {
        const response = await request(app).put("/api/todos/10")
        .send({
            name: "test4",
            status: 1
        })

        expect(response.body.message).toBe("Task is updated");
    })

    
    it('UPDATE / returns success messsage when data request is valid', async () => {
        const response = await request(app).put('/api/todos/2')
        .send({
            name: 'test1',
             status: 1,
           
        })
        expect(response.status).toBe(200);
    })


    
    it('Delete / returns 200 when deleted', async () => {
        
        const response = await request(app).delete('/api/todos/1')
       
        expect(response.status).toBe(200);
    })



    it("Get 404 if id not found", () => {
        request(app).get('/api/todos/043').expect(404)
    })
    


})

   
    
 
    
 
