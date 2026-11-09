import { readFile, copyFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'

const { version } = JSON.parse(await readFile(new URL('../package.json', import.meta.url)))
const target = process.argv[2] || 'pkg'
const watch = process.argv.includes('--watch')
const args = [
  'node_modules/microbundle/dist/cli.js',
  ...(watch ? ['watch'] : []),
  '--define', `VERSION_WIN=${version},VERSION_BASH=${version}`,
  ...(target === 'umd'
    ? ['-i', 'src/js/luge.umd.js', '-o', 'dist/js/luge.umd.js', '--format', 'umd']
    : ['--format', 'modern,esm,cjs']),
]
const result = spawnSync(process.execPath, args, { stdio: 'inherit' })
if (result.error) throw result.error
if (result.status !== 0) process.exit(result.status || 1)
if (target === 'umd' && !watch) {
  for (const suffix of ['', '.map']) {
    await copyFile(`dist/js/luge.umd.js${suffix}`, `dist/luge.umd.js${suffix}`)
  }
}
