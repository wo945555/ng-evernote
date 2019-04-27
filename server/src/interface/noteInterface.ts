interface INote {
  notebook_id: string | number,
  title?: string,
  tag: string[],
  content: string,
}
interface INoteBook {
  nbName: string,
  articles: INote[],
}

export { INote, INoteBook }