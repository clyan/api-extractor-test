export interface ILogHandler {
  verbose(source: string, message: string): void;
}

export default ILogHandler;