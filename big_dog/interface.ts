interface User {
  readonly dbid: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrial(): string;
  getCoupon(couponName: string): number;
}

//reopening interface
interface User {
  getDiscount?(recommender: string): number;
}

//Inheritance

interface Admin extends User {
  echelon: "admin" | "superadmin";
}

const kelmith: User = {
  dbid: 1,
  email: "kelmitho@gmail.com",
  userId: 1,
  googleId: "123",
  startTrial() {
    return "Trial started";
  },
  getCoupon(couponName: "bonanza") {
    return couponName === "bonanza" ? 20 : 10;
  },
};

const faye: Admin = {
  dbid: 2,
  email: "faye@faye.com",
  userId: 2,
  googleId: "123",
  startTrial() {
    return "Trial started";
  },
  getCoupon(couponName: "bonanza") {
    return couponName === "bonanza" ? 20 : 10;
  },
  echelon: "admin",
};

export {};
