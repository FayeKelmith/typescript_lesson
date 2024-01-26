"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Instagram = /** @class */ (function () {
    function Instagram(cameraMode, filter, bursts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.bursts = bursts;
    }
    return Instagram;
}());
var Youtube = /** @class */ (function () {
    function Youtube(cameraMode, filter, bursts, shorts) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.bursts = bursts;
        this.shorts = shorts;
    }
    Youtube.prototype.createStory = function () {
        return "Story done!";
    };
    return Youtube;
}());
// interfaces are used to define the structure of an object or class
// they can be used to define the structure of a function as well as a variable or constant
// interfaces can be used to extend other interfaces and classes can implement interfaces
// interfaces can be used to type-check objects and classes and can be used to define optional properties
// interfaces can be used to define readonly properties
// interfaces can be used to define function types
