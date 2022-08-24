import {NewsInterface} from './news.interface';

export interface NewsReqInterface {
  articles: NewsInterface[];
  status: string;
  totalResults: number;
}

