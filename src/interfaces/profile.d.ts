interface UserProfile {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  age?: number;
  address?: Address;
  pic:string;
  notification: number;
}

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

declare global {
  interface Window {
    userProfile: UserProfile | null;
  }
}

