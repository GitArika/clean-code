# Domain-Driven Design

This folder contains examples and implementations of domain-driven design principles.

## Repositories

The `OrdersRepository` interface in [repositories/orders-repository.ts](repositories/orders-repository.ts) defines the contract for order repositories. The `PostgresOrdersRepository` class in [repositories/postgres/postgres-orders-repository.ts](repositories/postgres/postgres-orders-repository.ts) implements this interface to save orders in a Postgres database.

## Use Cases

The `SubmitOrder` use case in [use-cases/submit-order.ts](use-cases/submit-order.ts) handles the process of submitting an order.

## Domain Models

- The `Order` class in [domain/purchases/order.ts](domain/purchases/order.ts) represents an order.
- The `Customer` class in [domain/purchases/customer.ts](domain/purchases/customer.ts) represents a customer.
- The `Recipient` class in [domain/logistics/recipent.ts](domain/logistics/recipent.ts) represents a recipient.
