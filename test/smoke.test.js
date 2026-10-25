const assert = require('node:assert/strict');
const { existsSync, readFileSync } = require('node:fs');
const { join } = require('node:path');
const test = require('node:test');

const root = join(__dirname, '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');

test('root page loads the packaged local assets', () => {
    assert.match(html, /href="style\.css"/);
    assert.match(html, /src="script\.js"/);
    assert.ok(existsSync(join(root, 'style.css')));
    assert.ok(existsSync(join(root, 'script.js')));
});

test('profile builder exposes its required controls and live preview', () => {
    for (const id of ['bizName', 'bizHandle', 'bizBio', 'bizCategory', 'bizWebsite', 'exportBtn', 'exportStatus', 'previewName']) {
        assert.match(html, new RegExp(`id="${id}"`));
    }
});

test('package metadata targets GitHub Packages and includes release files', () => {
    const manifest = JSON.parse(readFileSync(join(root, 'package.json'), 'utf8'));
    assert.equal(manifest.name, '@metics-universe/x-business-app');
    assert.equal(manifest.publishConfig.registry, 'https://npm.pkg.github.com');
    for (const file of manifest.files) {
        assert.ok(existsSync(join(root, file)), `Missing package file: ${file}`);
    }
});