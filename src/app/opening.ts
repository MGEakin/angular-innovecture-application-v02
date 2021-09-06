export class Opening {
  constructor(
    public id: number,
    public title: string,
    public openDate: string,
    public closeDate: string,
    public rate: number,
    public role?: number,
    public client?: number
  ) { }
}
