import { describe, it, expect } from "@jest/globals"

import App from '../../src/App.vue'

describe("App", () => {
    it("is an object", () => {
        expect(typeof App).toBe("object");
    });
});
