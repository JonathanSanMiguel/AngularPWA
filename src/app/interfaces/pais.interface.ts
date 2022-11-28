interface Pais {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  cioc?: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion: string;
  languages: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  gini?: Gini;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
}

interface PostalCode {
  format: string;
  regex: string;
}

interface CapitalInfo {
  latlng: number[];
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface Flags {
  png: string;
  svg: string;
}

interface Car {
  signs: string[];
  side: string;
}

interface Gini {
  '2019'?: number;
  '2014'?: number;
  '2006'?: number;
  '2018'?: number;
  '1999'?: number;
  '2017'?: number;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Demonyms {
  eng: Eng;
  fra?: Eng;
}

interface Eng {
  f: string;
  m: string;
}

interface Translations {
  ara: Spa;
  bre: Spa;
  ces: Spa;
  cym: Spa;
  deu: Spa;
  est: Spa;
  fin: Spa;
  fra: Spa;
  hrv: Spa;
  hun: Spa;
  ita: Spa;
  jpn: Spa;
  kor: Spa;
  nld: Spa;
  per: Spa;
  pol: Spa;
  por: Spa;
  rus: Spa;
  slk: Spa;
  spa: Spa;
  swe: Spa;
  tur: Spa;
  urd: Spa;
  zho: Spa;
}

interface Languages {
  spa: string;
  aym?: string;
  que?: string;
  eng?: string;
  fra?: string;
  por?: string;
  grn?: string;
  bjz?: string;
  cha?: string;
  ber?: string;
  mey?: string;
}

interface Idd {
  root: string;
  suffixes: string[];
}

interface Currencies {
  PAB?: PAB;
  USD?: PAB;
  COP?: PAB;
  PEN?: PAB;
  GTQ?: PAB;
  XAF?: PAB;
  ARS?: PAB;
  VES?: PAB;
  EUR?: PAB;
  HNL?: PAB;
  BZD?: PAB;
  MXN?: PAB;
  UYU?: PAB;
  PYG?: PAB;
  DZD?: PAB;
  MAD?: PAB;
  MRU?: PAB;
  BOB?: PAB;
  CRC?: PAB;
  CUC?: PAB;
  CUP?: PAB;
  NIO?: PAB;
  DOP?: PAB;
  CLP?: PAB;
}

interface PAB {
  name: string;
  symbol: string;
}

interface Name {
  common: string;
  official: string;
  nativeName: NativeName;
}

interface NativeName {
  spa: Spa;
  aym?: Spa;
  que?: Spa;
  eng?: Spa;
  fra?: Spa;
  por?: Spa;
  grn?: Spa;
  bjz?: Spa;
  cha?: Spa;
  ber?: Spa;
  mey?: Spa;
}

interface Spa {
  official: string;
  common: string;
}