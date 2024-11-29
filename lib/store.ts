import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface VoteStore {
  votes: Record<number, number>;
  upvote: (id: number) => void;
  getVotes: (id: number) => number;
}

export const useVoteStore = create<VoteStore>()(
  persist(
    (set, get) => ({
      votes: {},
      upvote: (id: number) => 
        set((state) => ({
          votes: {
            ...state.votes,
            [id]: (state.votes[id] || 0) + 1,
          },
        })),
      getVotes: (id: number): number => get().votes[id] || 0,
    }),
    {
      name: 'trending-votes',
      skipHydration: true,
    }
  )
);