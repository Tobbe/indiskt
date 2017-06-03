export class Order {
  date: string;

  constructor(
    public uid: string,
    public dish: string,
    public spicyness: string,
    public rice: string,
    public hotsauce: boolean,
    public beverage: string,
    public payto: string,
  ) { }
}
