/// <reference types="vite/client" />

import type { Alpine } from "alpinejs";
import type { LazyLoad } from "LazyLoad";

export {};

declare global {
  interface Window {
    Alpine: Alpine;
    LazyLoad: LazyLoad;
  }
}