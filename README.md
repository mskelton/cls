# @mskelton/cls

[clsx](https://github.com/lukeed/clsx) + [tailwind-merge](https://github.com/dcastil/tailwind-merge).

## Installation

**npm**

```bash
npm i @mskelton/cls
```

**Yarn**

```bash
yarn add @mskelton/cls
```

**pnpm**

```bash
pnpm add @mskelton/cls
```

## Usage

```javascript
import { cls } from "@mskelton/cls"

function MyComponent({ className }) {
  return <p className={cls("mb-4", className)} />
}
```
