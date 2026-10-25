# Search and Share

The live site is `https://metics-universe.github.io/xbusines.metics.universe.crypto/`. It now includes a canonical URL, search and social descriptions, WebApplication structured data, `robots.txt`, and `sitemap.xml`. These help crawlers understand the page; they do not guarantee ranking or immediate indexing.

## Submit to search engines for free

### Google

1. Open [Google Search Console](https://search.google.com/search-console/) and add a **URL-prefix** property for the exact live URL above.
2. Complete one of Google's offered ownership-verification methods. For this static GitHub Pages site, use the supplied HTML verification file or meta tag and commit it to the repository root or page head, respectively.
3. In Search Console, open **Sitemaps** and submit `sitemap.xml`.
4. Use **URL Inspection** on the live home page and request indexing.
5. Later, search Google for `site:metics-universe.github.io/xbusines.metics.universe.crypto` to check whether pages have been indexed.

### Bing

1. Open [Bing Webmaster Tools](https://www.bing.com/webmasters/).
2. Import the verified site from Google Search Console, or add the exact URL-prefix property and complete Bing's verification steps.
3. Submit `https://metics-universe.github.io/xbusines.metics.universe.crypto/sitemap.xml`.
4. Check indexing with `site:metics-universe.github.io/xbusines.metics.universe.crypto` on Bing.

Search engines decide when to crawl and index a new site. Verification and sitemap submission are requests, not a promise of rankings.

## Make the package public

The GitHub Actions publish run completed, but this workspace's GitHub token cannot read or change package visibility. In GitHub, open the **metics-universe** organization, select **Packages**, open `x-business-app`, then **Package settings > Change visibility > Public**. Confirm GitHub's warning. The npm registry may require authentication when a package is private; the website's public status does not prove package visibility.

## Share it

- Put the live URL in the GitHub repository's **About** section and add accurate topics such as `x-profile-builder`, `business-tools`, and `metics-universe`.
- Share one clear sentence about what the tool does, the live URL, and a real screenshot on Metics Universe's verified social accounts and relevant professional communities. Avoid mass posting or unsolicited investor messages.
- Keep the project name, description, logo, and links consistent across GitHub, X, LinkedIn, and any official company profile.
- For a strong social preview, create a real 1200 x 630 brand image, commit it to the site, then add its absolute URL as `og:image` and `twitter:image` in `index.html`. No image is configured until an approved asset exists.
- Use the repository README and release page as shareable links for technical audiences; use the live site for people who want to try the tool.

## Investor-facing improvements

This repository currently presents a profile-builder tool, not a complete investor-relations site. To make it credible to potential investors, add verified information rather than promotional claims: what Metics Universe does, the product's current status, who is building it, how it earns revenue, dated traction with sources, a realistic roadmap, risks, and a monitored business contact address. Add a privacy notice if the product begins collecting personal information. Never publish secrets, private keys, unverified metrics, or personal contact details without permission.

An investor page should answer what the product is, who it serves, what is working today, and how to request a conversation. The current demo content is not evidence of company traction. A memorable custom domain and a real product screenshot would also improve trust and sharing; both are optional and can be added later.