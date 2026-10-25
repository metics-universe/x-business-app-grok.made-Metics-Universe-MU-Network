// Real-time synchronization elements
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
const postName = document.getElementById('postName');
const postHandle = document.getElementById('postHandle');

bizName.addEventListener('input', (e) => {
    previewName.textContent = e.target.value || 'Business Name';
    postName.textContent = e.target.value || 'Business Name';
});

bizHandle.addEventListener('input', (e) => {
    let val = e.target.value;
    if (!val.startsWith('@')) val = '@' + val;
    previewHandle.textContent = val;
    postHandle.textContent = val;
});

bizBio.addEventListener('input', (e) => {
    previewBio.textContent = e.target.value;
});

bizCategory.addEventListener('change', (e) => {
    previewCategory.textContent = e.target.value;
});

bizWebsite.addEventListener('input', (e) => {
    let url = e.target.value;
    previewWebsite.textContent = url.replace(/^https?:\/\//, '');
    previewWebsite.href = url.startsWith('http') ? url : 'https://' + url;
});

document.getElementById('exportBtn').addEventListener('click', () => {
    alert('Success! Your application code is fully formatted and ready to deploy onto GitHub Pages.');
});