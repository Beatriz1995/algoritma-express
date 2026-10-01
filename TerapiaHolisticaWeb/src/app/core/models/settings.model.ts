export interface Settings {

  siteName: string;

  siteDescription: string;

  logo: string;

  favicon: string;

  email: string;

  phone: string;

  whatsapp: string;

  address: string;

  businessHours: BusinessHour[];

  seo: SeoSettings;

  active: boolean;

}

export interface BusinessHour {

  day: string;

  open: string;

  close: string;

}

export interface SeoSettings {

  title: string;

  description: string;

  keywords: string[];

}