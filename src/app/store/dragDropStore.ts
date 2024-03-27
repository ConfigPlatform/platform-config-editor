import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {produce} from 'immer';

interface IState {
  hiddenElementPathList: string[];
  dragging: boolean;
  loading: boolean;
  error: any;
  reset: () => void;
}

const initialState: Pick<IState, 'dragging' | 'hiddenElementPathList' | 'loading' | 'error'> = {
  dragging: false,
  hiddenElementPathList: [],
  loading: false,
  error: null,
};

const useDragDropStore = create<IState>()(
  devtools((set) => ({
    ...initialState,

    reset: () => set(initialState),
  })),
);

export default useDragDropStore;
