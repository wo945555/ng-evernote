import mongoose, { Model } from 'mongoose';

import { INote } from '../interface/noteInterface'


export interface INoteModel extends INote, mongoose.Document {}
//为Model定义INoteModel接口以获得ts带来的类型检测与更方便的IDE提示
//但不可避免的在Schema重复定义一遍类型
//目前不借助第三方库的情况下未找到更优雅的方法:）
const noteSchema = new mongoose.Schema({
  notebook_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tag: [String],
  content: {
    type: String,
    required: true
  }
});
//使用ts的泛型定义Model
export const Note: Model<INoteModel> = mongoose.model<INoteModel>('Notes', noteSchema); 

