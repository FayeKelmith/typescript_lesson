abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getBursts(): number {
    return 10;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public bursts: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
    console.log("Sepia gotten");
  }
  getBursts(): number {
    return this.bursts;
  }
}
class Youtube extends TakePhoto {
  getSepia(): void {
    console.log("Sepia rolling");
  }
  getBursts(): number {
    return 13;
  }
}

const kelm = new Instagram("portrait", "vintage", 10);
export {};

// abstract classes are classes that cannot be instantiated
// they can only be inherited from and used as a base class for other classes
// abstract methods are methods that must be implemented in the child class
// abstract methods can only be defined in abstract classes and must be implemented in the child class
// methods defined in abstract classes can be overridden in the child class but not abstract methods
// abstract methods cannot be private
// abstract methods cannot be static
