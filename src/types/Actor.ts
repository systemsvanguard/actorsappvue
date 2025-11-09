// src/types/Actor.ts

export interface Actor {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  picture: string;
  wiki: string;
  major_movie: string;
}

export interface ThunderboltActor {
  id: number;
  first_name: string;
  last_name: string;
  picture: string;
  wiki: string;
}
