"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOffCommand = void 0;
var LightOffCommand = /** @class */ (function () {
    function LightOffCommand(lightBulb) {
        this.lightBulb = lightBulb;
    }
    ;
    LightOffCommand.prototype.execute = function () {
        this.lightBulb.off();
    };
    ;
    return LightOffCommand;
}());
exports.LightOffCommand = LightOffCommand;
;
