import { cpSync, rmSync } from 'fs';

const STUBS = ['content-assets.mjs', 'content-modules.mjs'];
const DEPLOY = '../Homepage/deploy';
const APPS_SRC = '../Homepage/apps';
const APPS_DEST = `${DEPLOY}/apps`;

// Remove Astro content collection stubs
for (const f of STUBS) {
  try { rmSync(`${DEPLOY}/${f}`); } catch {}
}

// Copy apps into deploy folder
cpSync(APPS_SRC, APPS_DEST, { recursive: true });

console.log('✓ deploy/ ready for FileZilla upload');
