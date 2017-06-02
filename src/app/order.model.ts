export class Order {
  constructor(
    public uid: string,
    public dish: string,
    public spicyness: string,
    public rice: string,
    public beverage: string,
    public payto: string,
  ) { }
}