class PluginSlot {
  //   on(event:string,defaultValue:any) {
  // try {
  //   const value =  window.ProjectPlugin.eventStore.find(item=>item.event===event)
  //   if(!value){
  //     return defaultValue
  //   }

  // }catch (error) {
  //   console.log(error)
  //   return defaultValue
  // }
  // }
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
      console.log("ZZZ", item);
      if (!item) {
        return defaultValue;
      }
      const newValue = item.callback(defaultValue);
      console.log("YYY", newValue);
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
      console.log("ZZZ", item);
      if (!item) {
        return fun();
      }
      item.callback(fun);
    } catch (error) {
      console.log(error);
      return fun();
    }
  }
}
const pluginSlot = new PluginSlot();
export default pluginSlot;
