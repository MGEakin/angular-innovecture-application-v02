export class Assignment {
  constructor(
    public id: number,
    public title: string,
    public openDate: string,
    public closeDate: string,
    public rate: number,
    public role: number,
    public client: number,
    public user: number
  ) { }
}
