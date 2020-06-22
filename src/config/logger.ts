import chalk from "chalk"

export function info(msg: string): void {
    console.log(chalk.green(msg));
}

export function error(msg: string): void {
    console.error(chalk.red(msg));
}