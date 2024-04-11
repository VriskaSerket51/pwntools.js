export class Buffer {
  data: Array<unknown>;
  size: number;
  bufferFillSize?: number;

  constructor(bufferFillSize?: number) {
    this.data = [];
    this.size = 0;
    this.bufferFillSize = bufferFillSize;
  }
}
