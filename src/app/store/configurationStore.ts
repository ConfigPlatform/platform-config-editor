import {create} from 'zustand';
import {devtools} from 'zustand/middleware';
import {getRequest} from '@/app/util/request/request';

export interface IConfiguration {
  entities: object[];
  footer: object;
  navbar: object;
  handlers: object[];
  modals: object[];
  pages: object[];
  sidepanels: object[];
}

interface IState {
  configuration: Partial<IConfiguration>;
  selected: Partial<{
    entries: object;
    scope: string;
  }>;
  loading: boolean;
  error: Error | null;
  getConfiguration: () => Promise<void>;
  selectElement: (payload: {entries: object; scope: string}) => void;
  reset: () => void;
}

const initialState: Pick<IState, 'configuration' | 'selected' | 'loading' | 'error'> = {
  configuration: {},
  selected: {},
  loading: false,
  error: null,
};

const useConfigurationStore = create<IState>()(
  devtools((set) => ({
    ...initialState,

    getConfiguration: async () => {
      const configuration = await getRequest({url: '/api/configuration'});
      set({configuration});
    },

    selectElement: (payload) => {
      set({selected: payload});
    },

    reset: () => set(initialState),
  })),
);

export default useConfigurationStore;
