export interface Genre {
  id: number;
  name: string;
  description: string;
  books?: Book[];
}
export interface Author {
  id:number;
  name:string;
}
export interface Book {
  id:number;
  title:string;
  author: Author;
  description:string;
  image:string;
  genres: Genre[],
  year_of_publication: number;
  num_of_pages:number;
  rating_count: number;
  rating_value: number;

}

export interface AuthToken{
  access:string,
  refresh:string
}
export interface library{
  access:string,
  refresh:string
}
