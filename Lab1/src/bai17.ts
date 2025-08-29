export class Logger {
    private static instance: Logger;

    public static getInstance(): Logger {
        if (!Logger.instance) { Logger.instance = new Logger() };
        return Logger.instance
    }

    public log(message: string): void {
        console.log(`[LOG]: ${message}`)
    }
    public warn(message: string): void {
        console.log(`[WARN]: ${message}`)
    }
}