import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'

const pkg = JSON.parse(await readFile('package.json', 'utf8'))
assert(/^\d+\.\d+\.\d+$/.test(pkg.version), 'Only stable releases can be published')
assert.equal(process.env.GITHUB_REF, `refs/tags/v${pkg.version}`, 'Select the matching release tag')
assert.equal(process.env.GITHUB_REPOSITORY, 'AntoineW/luge')
assert.equal(pkg.repository.url, 'https://github.com/AntoineW/luge.git')
const npm = process.env.npm_execpath
assert(npm, 'Run through npm run release:pack')
const [packed] = JSON.parse(execFileSync(process.execPath, [npm, 'pack', '--ignore-scripts', '--json'], { encoding: 'utf8' }))
for (const file of packed.files) assert(/^(dist\/|package\.json$|README\.md$|CHANGELOG\.md$|LICENSE$)/.test(file.path), `Unexpected package file: ${file.path}`)
assert(packed.files.some(file => file.path === 'dist/js/luge.modern.js'))
assert(packed.files.some(file => file.path === 'dist/css/luge.css'))
console.log(`Verified ${packed.filename}`)
