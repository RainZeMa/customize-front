class PluginSlot {
  onValue(event: string, defaultValue: any) {
    try {
      const item = window.ProjectPlugin.valueStore.find(
        (item) => item.event === event
      );
      if (!item) {
        return defaultValue;
      }
      return item.value;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  }

  onDom(event: string, ref: any) {
    try {
      const item = window.ProjectPlugin.domStore.find(
        (item) => item.event === event
      );
      if (!item) {
        return false;
      }
      item.callback(ref);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  onFilter(event: string, defaultValue: any) {
    try {
      const item = window.ProjectPlugin.filterStore.find(
        (item) => item.event === event
      );
      if (!item) {
        return defaultValue;
      }
      const newValue = item.callback(defaultValue);
      return newValue;
    } catch (error) {
      console.log(error);
      return defaultValue;
    }
  }

  onSyncEvent(event: string, fun: any) {
    try {
      const item = window.ProjectPlugin.syncEventStore.find(
        (item) => item.event === event
      );
      if (!item) {
        return fun();
      }
      item.callback(fun);
    } catch (error) {
      console.log(error);
      return fun();
    }
  }

  async onAsyncEvent(event: string, fun: any) {
    try {
      const item = window.ProjectPlugin.syncEventStore.find(
        (item) => item.event === event
      );
      if (!item) {
        return await fun();
      }
      await item.callback(fun);
    } catch (error) {
      console.log(error);
      return await fun();
    }
  }
}
const pluginSlot = new PluginSlot();
export default pluginSlot;
