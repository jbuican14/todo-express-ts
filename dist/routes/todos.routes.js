"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos_controllers_1 = require("../controllers/todos.controllers");
const router = (0, express_1.Router)();
router.post('/', todos_controllers_1.createTodo);
router.get('/', todos_controllers_1.getTodo);
router.patch('/:id', todos_controllers_1.updateTodo);
router.delete('/:id', todos_controllers_1.deleteTodo);
exports.default = router;
