import { createClient } from 'contentful';

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
});

export const getArticles = async (category = null) => {
  const query = {
    content_type: 'article',
    order: '-fields.dato',
    include: 2,
  };
  if (category && category !== 'Alle') {
    query['fields.kategori'] = category;
  }
  const res = await client.getEntries(query);
  return res.items;
};

export const getArticleBySlug = async (slug) => {
  const res = await client.getEntries({
    content_type: 'article',
    'fields.slug': slug,
    include: 2,
  });
  return res.items[0] || null;
};

export default client;
