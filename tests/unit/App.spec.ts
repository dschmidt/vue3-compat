import { describe, it, expect } from "@jest/globals"

// @ts-ignore
import App from '../../src/App.vue'

describe("App", () => {
    it("is an object", () => {
        expect(typeof App).toBe("object");
    });
});
