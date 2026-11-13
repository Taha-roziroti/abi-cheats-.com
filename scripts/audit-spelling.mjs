/**
 * Spell-check indexable ABI money-page copy and shared SEO metadata.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const pagesDir = path.join(root, 'content', 'pages');

const TARGETS = [
  ...fs
    .readdirSync(pagesDir)
    .filter((f) => f.endsWith('.md') && !f.includes('bodycam'))
    .map((f) => `content/pages/${f}`),
  'src/config/pageSeo.ts',
  'src/data/faq.ts',
  'src/i18n/en.ts',
];

const files = [...new Set(TARGETS.map((rel) => path.join(root, rel)))].filter((f) => fs.existsSync(f));
if (!files.length) {
  console.error('audit-spelling: no target files found');
  process.exit(1);
}

const cspellLocal = path.join(root, 'node_modules', 'cspell', 'bin', 'cspell.js');
const useLocal = fs.existsSync(cspellLocal);
const cmd = useLocal ? process.execPath : 'npx';
const args = useLocal
  ? [cspellLocal, '--no-progress', '--config', path.join(root, 'cspell.json'), ...files]
  : ['cspell', '--no-progress', '--config', path.join(root, 'cspell.json'), ...files];

const r = spawnSync(cmd, args, {
  cwd: root,
  stdio: 'inherit',
  shell: process.platform === 'win32' && !useLocal,
});

if (r.status !== 0) {
  console.error('audit-spelling failed');
  process.exit(1);
}

console.log(`audit-spelling: OK (${files.length} files)`);
