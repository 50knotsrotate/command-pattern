"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LightOnCommand = void 0;
var LightOnCommand = /** @class */ (function () {
    function LightOnCommand(lightBulb) {
        this.lightBulb = lightBulb;
    }
    ;
    LightOnCommand.prototype.execute = function () {
        this.lightBulb.on();
    };
    ;
    return LightOnCommand;
}());
exports.LightOnCommand = LightOnCommand;
;
