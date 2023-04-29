// declare class CustomizePlugin {
//   eventStore: {
//     event: string;
//     value: any;
//   }[];
//   constructor();
//   setValueStore: (event: string, value: boolean) => void;
//   setDomStore: (event: string, callback: (value: any) => any) => void;
//   setFilterStore: (event: string, callback: (value: any) => any) => void;
//   setSyncEventStore: (event: string, callback: (value: any) => any) => void;
//   setAsyncEventStore: (event: string, callback: (value: any) => any) => void;
// }

declare class CustomizePlugin {
  valueStore: {
    event: string;
    value: any;
  }[];
  domStore: {
    event: string;
    callback: (value: any) => any;
  }[];
  filterStore: {
    event: string;
    callback: (value: any) => any;
  }[];
  syncEventStore: {
    event: string;
    callback: (value: any) => any;
  }[];
  asyncEventStore: {
    event: string;
    callback: (value: any) => any;
  }[];
  constructor();
  setValueStore: (event: string, value: boolean) => void;
  setDomStore: (event: string, callback: (value: any) => any) => void;
  setFilterStore: (event: string, callback: (value: any) => any) => void;
  setSyncEventStore: (event: string, callback: (value: any) => any) => void;
  setAsyncEventStore: (event: string, callback: (value: any) => any) => void;
}
