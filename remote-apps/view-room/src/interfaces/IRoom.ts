export interface ICreateReview {
  rating: number;
  comment: string;
}

export interface IReviews extends ICreateReview {
  user: {};
}

export type TImage = {
  _id?: string;
  image: string;
};

export interface IRoom {
  _id: string;
  name: string;
  description: string;
  images: TImage[];
  pricePerNight: number;
  address: string;
  guestCapacity: number;
  numOfBeds: number;
  breakfast: boolean;
  internet: boolean;
  airConditioned: boolean;
  petsAllowed: boolean;
  roomCleaning: boolean;
  ratings?: number;
  numOfReviews?: number;
  category: "King" | "Single" | "Twins" | string;
  reviews: IReviews[];
  createdAt: Date;
}

export type TCreateRoom = Pick<
  IRoom,
  | "name"
  | "description"
  | "address"
  | "guestCapacity"
  | "numOfBeds"
  | "category"
  | "internet"
  | "airConditioned"
  | "breakfast"
  | "petsAllowed"
  | "roomCleaning"
  | "pricePerNight"
  | "images"
>;
