import DefaultLogHandler from './DefaultLogHandler';
import ILogHandler from './ILogHandler';

export default class Log {
  private static _logHandler: ILogHandler = new DefaultLogHandler();
  public static initialize(logHandler: ILogHandler): void {
    Log._logHandler = logHandler;
  }
  public static verbose(source: string, message: string): void {
    this._logHandler.verbose(source, message);
  }
}