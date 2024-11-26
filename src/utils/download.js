const apkUrl = new URL('/brandholder.apk', import.meta.url);

export function downloadAndroidAPK() {
    const link = document.createElement('a');
    link.href = apkUrl.href;
    link.download = 'brandholder.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}