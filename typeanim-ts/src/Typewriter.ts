type QueueItem = () => Promise<void>;

export default class Typewriter {
  #queue: QueueItem[] = [];
  element: HTMLElement;
  loop: boolean;
  typingSpeed: number;
  deletingSpeed: number;

  constructor(
    parent: HTMLElement,
    { loop = false, typingSpeed = 50, deletingSpeed = 50 } = {}
  ) {
    this.element = document.createElement("div");
    this.element.classList.add("formatting");
    parent.append(this.element);
    this.loop = loop;
    this.typingSpeed = typingSpeed;
    this.deletingSpeed = deletingSpeed;
  }

  typeString(string: string) {
    this.#addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.append(string[i]);
        i++;
        if (i >= string.length) {
          clearInterval(interval);
          resolve();
        }
      }, this.typingSpeed);
      this.element.append(string);

      resolve();
    });

    // this.#queue.push(() => {
    //   return new Promise((resolve) => {
    //     let i = 0;
    //     const interval = setInterval(() => {
    //       this.element.append(string[i]);
    //       i++;
    //       if (i >= string.length) {
    //         clearInterval(interval);
    //         resolve();
    //       }
    //     }, this.typingSpeed);
    //     this.element.append(string);

    //     resolve();
    //   });
    // });
    return this;
  }
  deleteChars(number: number) {
    this.#addToQueue((resolve) => {
      let i = 0;
      const interval = setInterval(() => {
        this.element.innerText = this.element.innerText?.substring(
          0,
          this.element.innerText.length - 1
        );
        i++;
        if (i >= number) {
          clearInterval(interval);
          resolve();
        }
      }, this.typingSpeed);

      resolve();
    });

    return this;
  }
  deleteAll(deleteSpeed = this.deletingSpeed) {
    console.log(deleteSpeed);

    return this;
  }
  pauseFor(duration: number) {
    console.log(duration);

    return this;
  }

  async start() {
    for (const cb of this.#queue) {
      await cb();
    }

    this.#queue.forEach((cb) => {
      console.log(cb);
    });
    return this;
  }

  #addToQueue(cb: (resolve: () => void) => void) {
    this.#queue.push(() => {
      return new Promise(cb);
    });
  }
}
