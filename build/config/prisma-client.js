"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma;
var globalAny = global;
if (process.env.NODE_ENV === 'production') {
    prisma = new client_1.PrismaClient();
}
else {
    if (!globalAny.prisma) {
        globalAny.prisma = new client_1.PrismaClient();
    }
    prisma = globalAny.prisma;
}
exports.default = prisma;
