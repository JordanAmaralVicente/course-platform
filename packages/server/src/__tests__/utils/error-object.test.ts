import { mountErrorObject } from "../../utils";

describe("mountErrorObject()", () => {
    it("should return the correct error object", () => {
        const fakeErrorMessage = "test message";

        const obj = mountErrorObject(fakeErrorMessage);

        expect(obj).toStrictEqual({
            error: {
                message: fakeErrorMessage,
            },
        });
    });
});
