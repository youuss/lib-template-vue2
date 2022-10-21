import Vue, { VueConstructor, PluginObject } from 'vue';
import capitalize from 'lodash/capitalize';

export function withInstall<T>(comp: T, dep?: PluginObject<any>) {
  const c = comp as any;

  const name = c?.options?.name || c.name;

  c.install = function (Vue: VueConstructor, config?: object) {
    Vue.component(name, comp);
  };

  if (dep && Vue?._installedPlugins?.indexOf(dep) === -1) {
    Vue.use(dep);
  }

  return comp as T & PluginObject<T>;
}

export default withInstall;
