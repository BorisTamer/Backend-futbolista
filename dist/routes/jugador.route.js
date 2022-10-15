"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugadorRoutes = (0, express_1.Router)();
jugadorRoutes.get('/', (req, res) => {
    return res.json({
        ok: true
    });
});
