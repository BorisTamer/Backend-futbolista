"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./clases/server"));
const default_routes_1 = __importDefault(require("./routes/default.routes"));
const futbolista_routes_1 = __importDefault(require("./routes/futbolista.routes"));
const server = new server_1.default();
server.app.use(body_parser_1.default.json());
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use('/', default_routes_1.default);
server.app.use('/Futbolista', futbolista_routes_1.default);
mongoose_1.default.connect('mongodb+srv://usr_futbolista:Boris2022@cluster0.06xre5t.mongodb.net/futbolistaDb', (error) => {
    if (error) {
        throw error;
    }
    console.log('BD online');
});
server.Start(() => {
    console.log(`servidor corriendo en puerto: ${server.port}`);
});
