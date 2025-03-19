import { SubmitOrder } from "./use-cases/submit-order";
import { PostgresOrdersRepository } from "./repositories/postgres/postgres-orders-repository";

const submitOrder = new SubmitOrder(new PostgresOrdersRepository());

submitOrder
  .execute({
    customerDocument: "12345678900",
    total: 100,
  })
  .then(() => {
    console.log("Order submitted!");
  })
  .catch((error) => {
    console.error("Error submitting order:", error);
  });
