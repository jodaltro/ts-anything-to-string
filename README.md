# Typescript Anything to String

[![npm version](https://badge.fury.io/js/ts-anything-to-string.svg)](https://badge.fury.io/js/ts-anything-to-string)

A simple and useful function to transform anything in a full readable string.

## Installation

```
npm install ts-anything-to-string --save
```

## How to use

```typescript
import { safeToString } from 'ts-anything-to-string';

const error = new Error('error');
console.log(safeToString(error)); //'Error: error'

const object = { id: 'test' };
console.log(safeToString(object)); //'{"id":"teste"}'
```
