export class Guess {
  constructor(
    public text: string,
    public result: number,
    public time: Date = new Date(),
  ) {}
}
