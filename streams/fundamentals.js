import { Readable, Transform, Writable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buffered = Buffer.from(`${i}`);

        this.push(buffered);
      }
    }, 100);
  }
}

class OppositeNumberStream extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString() * -1);
    const buffered = Buffer.from(`${transformed}`);
    callback(null, buffered);
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString() * 10));
    callback();
  }
}

new OneToHundredStream()
  .pipe(new OppositeNumberStream())
  .pipe(new MultiplyByTenStream());
