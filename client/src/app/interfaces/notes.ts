interface Note {
  id: number,
  title: string,
  tag: string,
  content: string, //标签以及富文本json
}
interface NoteBook {
  id: number,
  nbName: string;
  notes: Note[];
}
export { Note, NoteBook }