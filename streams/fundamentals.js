import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buffered = Buffer.from(`${i}\n`);

        this.push(buffered);
      }
    }, 100);
  }
}

new OneToHundredStream().pipe(process.stdout);
