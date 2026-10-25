# Metics Universe X Business Profile Builder

A static, browser-based tool for previewing and exporting a business profile page. It does not connect to X or publish profile changes on your behalf.

## Use locally

Open `index.html` in a browser, or serve the repository root with a local static server:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`. The **Export Profile** button downloads a standalone HTML profile. The app requires no build step or runtime package dependencies.

## Validation

```sh
npm test
```

This checks the application JavaScript syntax and runs the repository smoke tests.

## Deploy to GitHub Pages

The `Deploy static content to Pages` workflow deploys the repository root when changes are pushed to `main`. In repository settings, enable GitHub Pages with **GitHub Actions** as the build and deployment source. The page entry point is `index.html`.

## Publish to GitHub Packages

The `Publish package` workflow publishes `@metics-universe/x-business-app` to GitHub Packages when a GitHub Release is published. Before releasing, update the version in `package.json` and push that change. The workflow uses the repository's `GITHUB_TOKEN`; no personal access token is committed. Set package visibility in the repository's package settings if public access is required.

For the complete step-by-step release and deployment checklist, see [RELEASE.md](RELEASE.md).

## License

MIT. See [LICENSE](LICENSE).
