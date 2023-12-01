// import app from "@root";
// import request from "supertest";

// const { City } = require("@models");

// describe("CMS CITY", () => {
//   let id: number;

//   it("GET - /v1/cms/city", async () => {
//     const result = await request(app).get("/gateway/v1/cms/city").query({ page: 0, limit: 10 });
//     const response = result.body.data;

//     expect(result.status_code).toEqual(200);
//     expect(response).toHaveProperty("data");
//     expect(response).toHaveProperty("nextPage");
//     expect(response).toHaveProperty("previousPage");
//     expect(response).toHaveProperty("currentPage");
//     expect(response).toHaveProperty("totalPerPage");
//     if (response.data.length > 0) {
//       expect(response.data[0]).toHaveProperty("id");
//       expect(response.data[0]).toHaveProperty("name");
//       expect(response.data[0]).toHaveProperty("cityCode");
//       expect(response.data[0]).toHaveProperty("firstMileCost");
//       expect(response.data[0]).toHaveProperty("lastMileCost");
//       expect(response.data[0]).toHaveProperty("type");
//       expect(response.data[0]).toHaveProperty("isActive");
//       expect(response.data[0]).toHaveProperty("createdAt");
//       expect(response.data[0]).toHaveProperty("updatedAt");
//     }
//   });

//   it("POST - /v1/cms/city", async () => {
//     const result = await request(app).post("/gateway/v1/cms/city").send({
//       name: "TEST",
//       cityCode: "TES",
//       type: "DX",
//     });
//     const response = result.body;

//     id = response.data.id;
//     expect(result.status_code).toEqual(200);
//     expect(response).toHaveProperty("status_code");
//     expect(response).toHaveProperty("message");
//     expect(response).toHaveProperty("success");
//   });

//   it("PUT - /v1/cms/city", async () => {
//     const result = await request(app).put("/gateway/v1/cms/city").send({
//       id,
//       name: "TEST UPDATE",
//       cityCode: "TES",
//       type: "DX",
//       firstMileCost: 0,
//       lastMileCost: 0,
//     });
//     const response = result.body;

//     expect(result.status_code).toEqual(200);
//     expect(response).toHaveProperty("status_code");
//     expect(response).toHaveProperty("message");
//     expect(response).toHaveProperty("success");
//   });

//   it("DELETE - /v1/cms/city", async () => {
//     const result = await request(app).delete("/gateway/v1/cms/city").send({ id });
//     const response = result.body;

//     expect(result.status_code).toEqual(200);
//     expect(response).toHaveProperty("status_code");
//     expect(response).toHaveProperty("message");
//     expect(response).toHaveProperty("success");
//     await City.destroy({ where: { id } });
//   });
// });
