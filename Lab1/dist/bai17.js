"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    static getInstance() {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        ;
        return Logger.instance;
    }
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
    warn(message) {
        console.log(`[WARN]: ${message}`);
    }
}
exports.Logger = Logger;
