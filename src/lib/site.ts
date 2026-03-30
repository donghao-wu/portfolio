/** 站内绝对路径（以 / 开头）加上 Astro `base`，用于子路径部署 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL;
  const p = path.startsWith('/') ? path : `/${path}`;
  if (base === '/') return p;
  const prefix = base.endsWith('/') ? base.slice(0, -1) : base;
  return `${prefix}${p}`;
}
