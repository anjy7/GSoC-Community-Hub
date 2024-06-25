// types.ts
import { TypeWithID } from 'payload/types';

export interface PaginatedDocs<T> {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number | undefined;
  pagingCounter: number | undefined;
  hasPrevPage: boolean | undefined;
  hasNextPage: boolean | undefined;
  prevPage: number | null | undefined;
  nextPage: number | null | undefined;
}

export interface EventFields {
  speaker: string;
  speakerDescription: string;
  title: string;
  start: string;
  end: string;
  duration: string;
  youtube: string;
}

export type Event = TypeWithID & Partial<EventFields> & Record<string, unknown>;