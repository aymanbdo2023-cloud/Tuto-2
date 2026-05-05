# TypeScript Interface and Generic Function Example

This repository contains a simple TypeScript example showing how to use an interface and a generic function together.

## What the code does

- `tsInterface.ts` defines a `Product` interface with fields:
  - `id` (number)
  - `name` (string)
  - `price` (number)
  - `description` (optional string)
- It also includes a `calculateTotal` function that sums the prices of an array of `Product` items.
- The generic function `getFirstElement<T>(arr: T[])` returns the first element from any array, keeping the original type of the array item.

## Why it matters

- The `Product` interface gives a consistent shape for product data.
- The generic function is reusable for any array type, not only products.
- Together, they demonstrate TypeScript's type safety and generic programming features.

## Example output

- The code calculates the total price of sample products.
- It logs the name of the first product in the array.
