import * as vite from 'vite';

declare function RandomSeed(options?: RandomSeedPluginOptions): {
    name: string;
    apply: (this: void, _: vite.UserConfig, { mode }: vite.ConfigEnv) => boolean;
    config: () => {
        define: {
            [x: string]: string;
        };
    };
};
interface RandomSeedPluginOptions {
    /**
     * Hardcode a seed value.
     */
    seed?: number;
    /**
     * Definition added to Vite's [`define`](https://vitejs.dev/config/shared-options.html#define)
     * option. Set this value to change the variable the seed is accessed at.
     *
     * @default "import.meta.test.SEED"
     */
    define?: string;
}

export = RandomSeed;
export type { RandomSeedPluginOptions };
