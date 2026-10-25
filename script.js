const bizName = document.getElementById('bizName');
const bizHandle = document.getElementById('bizHandle');
const bizBio = document.getElementById('bizBio');
const bizCategory = document.getElementById('bizCategory');
const bizWebsite = document.getElementById('bizWebsite');
const previewName = document.getElementById('previewName');
const previewHandle = document.getElementById('previewHandle');
const previewBio = document.getElementById('previewBio');
const previewCategory = document.getElementById('previewCategory');
const previewWebsite = document.getElementById('previewWebsite');
const websiteMeta = document.getElementById('websiteMeta');
const postName = document.getElementById('postName');
const postHandle = document.getElementById('postHandle');
const followLink = document.getElementById('followLink');
const exportStatus = document.getElementById('exportStatus');

function getHandle(value) {
    return value.trim().replace(/^@/, '');
}

function getSafeWebsite(value) {
    const input = value.trim();
    if (!input) return null;
    if (/^[a-z][a-z\d+.-]*:/i.test(input) && !/^https?:\/\//i.test(input)) return null;

    try {
        const candidate = /^https?:\/\//i.test(input) ? input : `https://${input}`;
        const url = new URL(candidate);
        return ['http:', 'https:'].includes(url.protocol) && !url.username && !url.password ? url : null;
    } catch {
        return null;
    }
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function updatePreview() {
    const name = bizName.value.trim() || 'Business Name';
    const handle = getHandle(bizHandle.value);
    const safeHandle = /^[A-Za-z0-9_]{1,15}$/.test(handle);
    const website = getSafeWebsite(bizWebsite.value);

    previewName.textContent = name;
    postName.textContent = name;
    previewHandle.textContent = handle ? `@${handle}` : '@yourbusiness';
    postHandle.textContent = previewHandle.textContent;
    previewBio.textContent = bizBio.value;
    previewCategory.textContent = bizCategory.value;

    followLink.href = safeHandle ? `https://x.com/${encodeURIComponent(handle)}` : '#';
    followLink.setAttribute('aria-disabled', String(!safeHandle));
    followLink.tabIndex = safeHandle ? 0 : -1;

    websiteMeta.hidden = !website;
    if (website) {
        const path = website.pathname.replace(/\/$/, '');
        previewWebsite.textContent = `${website.host}${path}`;
        previewWebsite.href = website.href;
    }
}

function createExportHtml(name, handle, bio, category, website) {
    const profileBlock = handle
        ? `<p><a href="https://x.com/${encodeURIComponent(handle)}" target="_blank" rel="noopener noreferrer">View on X</a></p>`
        : '';
    const websiteBlock = website
        ? `<p><strong>Website:</strong> <a href="${escapeHtml(website.href)}" target="_blank" rel="noopener noreferrer">${escapeHtml(website.host)}</a></p>`
        : '';

    return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escapeHtml(bio)}">
  <title>${escapeHtml(name)} | Business Profile</title>
  <style>
    :root { color-scheme: dark; font-family: system-ui, sans-serif; background: #000; color: #e7e9ea; }
    body { margin: 0; padding: 2rem 1rem; }
    main { max-width: 40rem; margin: 0 auto; }
    .banner { height: 9rem; background: linear-gradient(135deg, #1d9bf0, #00ba7c); }
    article { padding: 1.5rem; border: 1px solid #2f3336; border-radius: .5rem; }
    h1 { margin-bottom: .25rem; }
    .handle, .category { color: #9ca3a8; }
    a { color: #1d9bf0; }
  </style>
</head>
<body>
  <main>
    <div class="banner" aria-hidden="true"></div>
    <article>
      <h1>${escapeHtml(name)}</h1>
      <p class="handle">${escapeHtml(handle ? `@${handle}` : '')}</p>
      <p>${escapeHtml(bio)}</p>
      <p class="category">${escapeHtml(category)}</p>
    ${profileBlock}
      ${websiteBlock}
    </article>
  </main>
</body>
</html>
`;
}

function slugify(value) {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'business';
}

[bizName, bizHandle, bizBio, bizWebsite].forEach((input) => {
    input.addEventListener('input', updatePreview);
});
bizCategory.addEventListener('change', updatePreview);

document.getElementById('exportBtn').addEventListener('click', () => {
    const handle = getHandle(bizHandle.value);
    if (handle && !/^[A-Za-z0-9_]{1,15}$/.test(handle)) {
        exportStatus.textContent = 'Enter a valid X handle using 1-15 letters, numbers, or underscores.';
        bizHandle.focus();
        return;
    }

    const websiteInput = bizWebsite.value.trim();
    const website = getSafeWebsite(websiteInput);
    if (websiteInput && !website) {
        exportStatus.textContent = 'Enter a valid website address using http:// or https://.';
        bizWebsite.focus();
        return;
    }

    const name = bizName.value.trim() || 'Business Name';
    const html = createExportHtml(name, handle, bizBio.value.trim(), bizCategory.value, website);
    const downloadUrl = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
    const downloadLink = document.createElement('a');
    downloadLink.href = downloadUrl;
    downloadLink.download = `${slugify(name)}-profile.html`;
    document.body.append(downloadLink);
    downloadLink.click();
    downloadLink.remove();
    window.setTimeout(() => URL.revokeObjectURL(downloadUrl), 1000);
    exportStatus.textContent = `Downloaded ${downloadLink.download}.`;
});

updatePreview();