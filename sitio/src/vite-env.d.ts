/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_ADS_CONVERSION_ID?: string;
  readonly VITE_GOOGLE_ADS_CONVERSION_LABEL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
