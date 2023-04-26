export interface Genre {
  id: number;
  name: string;
  description: string;
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