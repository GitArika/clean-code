import { Order } from "../domain/purchases/order";
import { OrdersRepository } from "../repositories/orders-repository";

interface SubmitOrderRequest {
  customerDocument: string;
  total: number;
}

interface SubmitOrderResponse {}

export class SubmitOrder {
  constructor(private ordersRepository: OrdersRepository) {}

  async execute({
    customerDocument,
    total,
  }: SubmitOrderRequest): Promise<SubmitOrderResponse> {
    const order = new Order(customerDocument, total, new Date());

    await this.ordersRepository.create(order);

    return {};
  }
}
