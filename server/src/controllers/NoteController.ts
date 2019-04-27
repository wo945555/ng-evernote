import express from 'express';
import { Note } from '../models/noteModel'
import { INote } from '../interface/noteInterface'
import BaseController from "./BaseController";
import { router } from '../routes/routerDecorator';

export class NoteController extends BaseController {
  @router('/notes/add_notes', 'post')
  async create(req: express.Request, res: express.Response) {
    const newNote: INote = req.body;
    const cNote = await Note.create(newNote);
    res.json(cNote);
  }
  @router('/notes', 'get')
  async findAll(req: express.Request, res: express.Response) {
    const docs = await Note.find();
    res.json(docs);
  }
  @router('/notes/search', 'get')
  async find(req: express.Request, res: express.Response) { //param： q || tag
    const q = req.query.q? new RegExp(req.query.q): /(.*)/;
    const tag = req.query.tag? new RegExp(req.query.tag): /(.*)/;
    const docs = await Note.find({tag: tag, $or:[{title: q},{content: q}]});
    res.json(docs);
  }
}