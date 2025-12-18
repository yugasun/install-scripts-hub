export interface Script {
  id: string;
  name: string;
  url: string;
  sourceUrl: string;
  description: string;
  command?: string;
}

export interface RawScript {
  id: string;
  url: string;
  sourceUrl: string;
  translations: {
    [lang: string]: {
      name: string;
      description: string;
    };
  };
  command?: string;
}

export interface ScriptsData {
  scripts: Script[];
}
