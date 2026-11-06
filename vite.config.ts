import {defineConfig,type Plugin} from 'vite';
import react from '@vitejs/plugin-react';
import {readFileSync} from 'node:fs';
// Flat repo layout: copy the PWA files from the repo root into dist/
const copy=():Plugin=>({name:'copy-root-assets',generateBundle(){
 for(const f of ['manifest.webmanifest','sw.js','icon-192.png','icon-512.png'])this.emitFile({type:'asset',fileName:f,source:readFileSync(f)})}});
export default defineConfig({base:'./',publicDir:false,plugins:[react(),copy()]});
