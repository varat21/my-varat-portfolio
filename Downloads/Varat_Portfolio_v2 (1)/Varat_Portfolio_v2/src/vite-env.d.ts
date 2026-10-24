/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional Formspree-style endpoint. When unset, the contact form opens the visitor's email app instead. */
  readonly VITE_CONTACT_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare const __APP_VERSION__: string;
declare const __BUILD_DATE__: string;
