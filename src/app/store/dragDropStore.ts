import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {produce} from 'immer';

interface IState {
  selectedElementPath: string;
  hiddenElementPathList: string[];
  loading: boolean;
  error: any;
  reset: () => void;
}

const initialState: Pick<IState, 'selectedElementPath' | 'hiddenElementPathList' | 'loading' | 'error'> = {
  selectedElementPath: '',
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
