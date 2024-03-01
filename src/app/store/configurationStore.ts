import { create } from 'zustand';
import { devtools} from 'zustand/middleware'
import { produce } from 'immer';
import { set as lset } from 'lodash';
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
    loading: boolean;
    error: Error | null;
    getConfiguration: () => Promise<void>;
    reset: () => void;
}

const initialState: Pick<IState, 'configuration' | 'loading' | 'error'> = {
    configuration: {},
    loading: false,
    error: null,
};

const useConfigurationStore = create<IState>()(devtools((set) => ({
    ...initialState,

    getConfiguration: async () => {
        const configuration = await getRequest({url: '/api/configuration'});
        set({configuration});
    },

    reset: () => set(initialState),
})));

export default useConfigurationStore;
