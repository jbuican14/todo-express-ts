import { RequestHandler } from "express";

import { Todo } from "../models/todos.models";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as {text:string}).text; // type casting
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo); 

  res.status(201).json({message: 'Created the to-do', createTodo: newTodo}); 
};

export const getTodo: RequestHandler = (req, res, next) => {
  res.status(201).json({todos: TODOS});
};

export const updateTodo: RequestHandler<{id:string}> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as {text: string}).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if(todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);

  res.json({ message: 'Updated success!', updatedTodo: TODOS[todoIndex]}); 
};

export const deleteTodo: RequestHandler<{id:string}> = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if(todoIndex < 0) {
    throw new Error('Count not find id todo to delete!');
  }

  TODOS.splice(todoIndex, 1);

  res.json({message: 'Todo deleted!'}); 
}