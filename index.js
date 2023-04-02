import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export const cls = (...classNames) => twMerge(clsx(...classNames))
