export class Order {
  public customerDocument: string;

  private total: number;
  private createdAt: Date;

  constructor(customerDocument: string, total: number, createdAt: Date) {
    this.customerDocument = customerDocument;
    this.total = total;
    this.createdAt = createdAt;
  }
}
