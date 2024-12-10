export interface CustomJwtPayload {
  user: {
    userId: number;
    role: string;
  };
  exp: number;
}
