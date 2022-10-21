/// <reference types="vite/client" />

import { VNode, PluginObject } from 'vue'; // eslint-disable-line

declare const __VERSION__: string;

declare global {
  namespace JSX {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Element extends VNode {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

declare module 'vue' {
  interface VueConstructor {
    _installedPlugins: PluginObject<any>[];
  }
}

declare module 'lib-template-vue2' {

}
