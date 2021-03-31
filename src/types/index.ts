import type { ReactNode } from 'react';

export type Children = { children: ReactNode };

export interface RepositoryOwner {
  login: string;
  avatarUrl: string;
}

export interface Repository {
  name: string;
  owner: RepositoryOwner;
}
