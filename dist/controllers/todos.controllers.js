"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const todos_models_1 = require("../models/todos.models");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text; // type casting
    const newTodo = new todos_models_1.Todo(Math.random().toString(), text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the to-do', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodo = (req, res, next) => {
    res.status(201).json({ todos: TODOS });
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todos_models_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated success!', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    if (todoIndex < 0) {
        throw new Error('Count not find id todo to delete!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted!' });
};
exports.deleteTodo = deleteTodo;
