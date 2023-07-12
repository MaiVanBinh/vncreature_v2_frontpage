export function getCookie(name: any, cookie?: string) {
  if (cookie) {
    const v = cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return v ? v[2] : null;
  }
  if (typeof document === 'undefined') return null;
  const v = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return v ? v[2] : null;
}

export function setCookie(name: any, value: string, hours?: number) {
  if (typeof document === 'undefined') return;
  const d = new Date();
  d.setTime(d.getTime() + 60 * 60 * 1000 * (hours || 24));
  document.cookie = `${name}=${value};path=/;expires=${d.toUTCString()}`;
}
export function deleteCookie(name: any) { setCookie(name, '', -1); }
