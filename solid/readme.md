# SOLID

## Single Responsibility Principle (SRP)

A class should have only one responsibility.

Example: Each payment method class (`Billet`, `Credit`, `Debit`, `Pix`) in [index.ts](index.ts) has a single responsibility of calculating the discount amount.

## Open/Closed Principle

Software entities should be open for extension, but closed for modification.

Example: The `PaymentMethod` interface in [index.ts](index.ts) allows adding new payment methods without modifying existing code.

## Liskov Substitution Principle

Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program.

Example: Any class implementing the `PaymentMethod` interface in [index.ts](index.ts) can be used interchangeably without affecting the `CalculateOrderDiscount` class.

## Interface Segregation Principle

A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use.

Example: The `PaymentMethod` interface in [index.ts](index.ts) is simple and only includes the `getDiscountAmount` method, ensuring that implementing classes are not forced to implement unused methods.

## Dependency Inversion Principle

High-level modules should not depend on low-level modules. Both should depend on abstractions.

Example: The `CalculateOrderDiscount` class in [index.ts](index.ts) depends on the `PaymentMethod` abstraction rather than concrete payment method classes.
