# TypesScript Notes

## Introduction

TypeScript is a superset of JavaScript that compiles to plain JavaScript. It offers classes, modules, and interfaces to help you build robust components. It's main utility is to enforce type safety.

## Basic Types

- Boolean
- Number
- String
- Array
- Tuple
- Enum
- Any
- Null and Undefined

## Interesting notes

- Numbers are not differentiated between integers and floats

## Readonly and optional properties

- Readonly properties can only be set when an object is first created
- Optional properties can be set to undefined
- When a property is marked as readonly, it means that its value cannot be modified once it is assigned. It is a way to enforce immutability for that specific property.
- Optional properties are useful when creating interfaces that describe the shape of objects that may have some properties available or not, depending on the situation.
- In TypeScript, the & symbol is used to create an intersection type. An intersection type allows you to combine multiple types into a single type that has all the properties and methods from each of the individual types
