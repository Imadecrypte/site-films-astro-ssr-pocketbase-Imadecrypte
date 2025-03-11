import { PocketBase } from 'pocketbase';

declare module 'astro' {
  interface Locals {
    pb: PocketBase;
  }
}
