// Import the js file to test with Jest the submitHandler function
import { submitHandler } from "../js/formHandler"
describe("Testing the submit functionality", () => {
    test("Testing the submitHandler() function", () => {
        expect(submitHandler).toBeDefined();
    })
    test("Testing the submitHandler() function", () => {
        expect(submitHandler).toBeTruthy();
    })
});
