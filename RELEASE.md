# Release and Deploy

This repository can be hosted free on GitHub Pages when it is public. The app is a static website; it does not connect to X or change an X account. The package workflow publishes to GitHub Packages, not npmjs.com.

## 1. Check the package locally

From the repository root, run:

```sh
npm test
npm publish --dry-run
```

Both commands should pass. `--dry-run` does not upload the package.

## 2. Push the site to GitHub Pages

In GitHub, open the repository and select **Settings > Pages**. Set **Build and deployment > Source** to **GitHub Actions**. This is a one-time setting.

Review what will be committed before staging files. If every listed change is intended, use:

```sh
git status --short
git add -A
git diff --cached --check
git diff --cached --stat
git commit -m "Prepare X business app release"
git push origin main
```

If your working branch is not `main`, merge or push these changes to `main`; the Pages workflow runs on pushes to `main`. In GitHub, open **Actions** and wait for **Deploy static content to Pages** to finish successfully. The live URL is shown in that workflow run and under **Settings > Pages**.

## 3. Publish the package to GitHub Packages

The package workflow runs when a GitHub Release is published. Before creating the release:

1. Confirm the version in `package.json` is unused. For a later release, increment it (for example, `1.0.0` to `1.0.1`), then run `npm test` and commit/push that change to `main`.
2. In the repository, open **Releases > Draft a new release**.
3. Create a matching tag, such as `v1.0.0`, targeting `main`. Use the same numeric version as `package.json` without the leading `v`.
4. Select **Publish release**.
5. Open **Actions** and confirm **Publish package** succeeds. The package is published as `@metics-universe/x-business-app` to `https://npm.pkg.github.com`.

If you want the package visible publicly, open its page in GitHub's **Packages** section and set its visibility to **Public**. The publishing workflow uses the repository's `GITHUB_TOKEN`; do not add a token to the repository. If publishing is denied, confirm that the repository owner is allowed to publish under the `@metics-universe` scope and that Actions has package write permission.

## What is free

GitHub Pages hosting is free for public repositories. Public GitHub Packages are free to publish. GitHub may charge for private repository or package storage and usage depending on the account plan. Publishing here does not list the package on npmjs.com; that would require changing the registry configuration and creating a separate npmjs.com publishing workflow.