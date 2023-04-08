import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const cls = (...classNames) => twMerge(clsx(...classNames))

export default cls
