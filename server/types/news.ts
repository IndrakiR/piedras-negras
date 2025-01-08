export interface Image {
  url: string;
  [key: string]: any;
}

export interface GalleryItem {
  image: Image;
  [key: string]: any;
}

export interface NewsItem {
  id: string;
  image?: Image;
  banner?: Image;
  gallery?: GalleryItem[];
  [key: string]: any;
}

export interface NewsResponse {
  docs: NewsItem[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
