import { getCollection } from 'astro:content';

let _allPages: any[] | null = null;

export async function loadAllPages() {
  if (_allPages) return _allPages;
  const entries = await getCollection('pages');
  _allPages = entries.map((e: any) => ({
    ...e.data,
    slug: e.slug,
    bodyRaw: e.body,
    id: e.id,
  }));
  return _allPages;
}

export async function getPagesByCollection(collectionName: string) {
  const all = await loadAllPages();
  return all.filter((p: any) => p.collection === collectionName);
}

export async function getPageByUrl(url: string) {
  const all = await loadAllPages();
  return all.find((p: any) => p.url === url) || null;
}
