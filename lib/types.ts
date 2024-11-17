import { links } from "./data";

export type SectionName = (typeof links)[number]["name"]

// Defines the `SectionName` type dynamically:
// 1. `(typeof links)`: Captures the type of the `links` variable (likely an array of objects).
// 2. `[number]`: Accesses the type of an individual element within the `links` array (since arrays are indexed numerically).
// 3. `["name"]`: Extracts the type of the `name` property from each element in the `links` array.
// The result is a type representing all possible `name` values from the `links` array, making the type dynamically tied to the data structure.