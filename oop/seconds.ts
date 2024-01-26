interface TakePhoto {
  cameraMode: string;
  filter: string;
  bursts: number;
}

interface Stories {
  createStory(): string;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public bursts: number
  ) {}
}

class Youtube implements TakePhoto, Stories {
  constructor(
    public cameraMode: string,
    public filter: string,
    public bursts: number,
    public shorts: string
  ) {}

  createStory(): string {
    return "Story done!";
  }
}

export {};

// interfaces are used to define the structure of an object or class
// they can be used to define the structure of a function as well as a variable or constant
// interfaces can be used to extend other interfaces and classes can implement interfaces
// interfaces can be used to type-check objects and classes and can be used to define optional properties
// interfaces can be used to define readonly properties
// interfaces can be used to define function types
