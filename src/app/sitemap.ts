export default async function sitemap() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const routes = [
    '', 'about', 'contact',
    'search?city=Dubai',
    'destinations/Dubai',
    'destinations/Istanbul'
  ].map(p => ({ url: `${base}/${p}`.replace(/\/+$/,'/') }));
  return routes;
}
