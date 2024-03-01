import { create } from 'zustand';
import { devtools} from 'zustand/middleware'
import {getRequest} from "@/app/util/request/request";

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
    selectedElement: object;
    loading: boolean;
    error: Error | null;
    getConfiguration: () => Promise<void>;
    selectElement: (element: object) => void;
    reset: () => void;
}

const initialState: Pick<IState, 'configuration' | 'selectedElement' | 'loading' | 'error'> = {
    configuration: {},
    selectedElement: {},
    loading: false,
    error: null,
};

const useConfigurationStore = create<IState>()(devtools((set) => ({
    ...initialState,

    getConfiguration: async () => {
        const configuration = await getRequest({url: '/api/configuration'});
        set({configuration});
    },

    selectElement: (element) => {
        set({ selectedElement: element });
    },

    reset: () => set(initialState),
})));

export default useConfigurationStore;
