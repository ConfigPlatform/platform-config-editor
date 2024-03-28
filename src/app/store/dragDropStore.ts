import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import sendRequest from '@/app/util/request/sendRequest';

interface IChangeElementLocation {
  activePath: string;
  overPath: string;
  scope?: string;
}

interface IState {
  hiddenElementPathList: string[];
  dragging: boolean;
  loading: boolean;
  error: any;
  changeElementLocation: (payload: IChangeElementLocation) => Promise<void>;
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

    changeElementLocation: async (payload) => {
      await sendRequest({set, method: 'patch', body: {url: '/api/configuration/drag_end', data: payload}});
    },

    reset: () => set(initialState),
  })),
);

export default useDragDropStore;
