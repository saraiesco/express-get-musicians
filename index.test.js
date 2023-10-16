// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const seedMusician = require("./seedData");

describe('./musicians endpoint', () => {
    // Write your tests here
    test("Testing musicians endpoint", async () => {
        //send request to /musicians endpoint
        const response = await request(app).get("/musicians");
        //will be receiving as JSON so need to parse it
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        // console.log(JSON.stringify(responseData,null,2))
        expect(responseData[0].name).toBe("Mick Jagger");
    })
 
    test("Testing musician req params", async () => {
        //send request to /musicians endpoint
        const response = await request(app).get("/musicians/2");
        const responseData = JSON.parse(response.text);
        expect(response.statusCode).toBe(200);
        expect(responseData.name).toBe("Drake");
    }) 

    test("Testing musician post request", async () => {
        //send request to /musicians endpoint
        const response = await request(app)
            .post("/musicians")
            .send({ name: "Rihanna" , instrument: "Voice"})
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(expect.objectContaining(
            { name: "Rihanna", instrument: "Voice" }),
          );
    }) 

    test("Testing musician delete request", async () => {
        //send request to /musicians endpoint
        const response = await request(app)
            .delete("/musicians/2")
        expect(response.statusCode).toBe(200);
    }) 

    test("Testing musician put request", async () => {
        //send request to /musicians endpoint
        const response = await request(app)
            .put("/musicians/3")
            .send({name: "Kacey Musgraves", instrument: "Voice"})
        expect(response.statusCode).toBe(200);
    }) 
})