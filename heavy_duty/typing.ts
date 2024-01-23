type User = {
  //
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  creditCard?: number;
};

type Created = {
  success: boolean;
  statusCode: number;
};

type CardOwner = {
  name: string;
  email: string;
};

type CardNumber = {
  cardCode: number;
};

type CardDetails = CardOwner &
  CardNumber & {
    cvv: number;
  };

function createUser(user: User): Created {
  return {
    success: true,
    statusCode: 201,
  };
}

export {};
