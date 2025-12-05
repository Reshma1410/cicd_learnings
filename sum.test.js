import sum from "./sum.js";
//this runs single test
// test("adds 2 + 2 to equal 4", ()=>{
//     expect(sum(2,2)).toBe(4);
// });

//for runing multiple test case
describe("test for sum fnx",()=>{

    test("adds 2 + 2 to equal 4", ()=>{
    expect(sum(2,2)).toBe(4);
    });

    test("adds -5 +-5  to equal -10", ()=>{
    expect(sum(-5,-5)).toBe(-10);
     });

}
)