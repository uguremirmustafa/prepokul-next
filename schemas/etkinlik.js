import { FcPuzzle } from 'react-icons/fc';

export default {
  name: 'etkinlik',
  title: 'Etkinlikler',
  type: 'document',
  icon: FcPuzzle,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'featured',
      title: 'Anasayfada yayınlansın mı?',
      type: 'boolean',
    },
    {
      name: 'keywords',
      title: 'Anahtar kelimeler',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'file',
      title: 'Dosya',
      type: 'file',
      description: 'Sadece pdf formatında dosyalar yüklenebilir!',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'etkinlikCategory',
      title: 'Kategori',
      description: 'Etkinlik hangi kategoriye giriyor? Sayılar, boyama vs.',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'etkinlikCategory' } }],
    },
  ],
  orderings: [
    {
      title: 'Kategoriye göre sırala, A->Z',
      name: 'titleAsc',
      by: [{ field: 'etkinlikCategory', direction: 'asc' }],
    },
    {
      title: 'Kategoriye göre sırala, Z->A',
      name: 'titleDsc',
      by: [{ field: 'etkinlikCategory', direction: 'desc' }],
    },
  ],
  initialValue: {
    featured: false,
    // author: {
    //   _type: 'authorReference',
    //   author: {
    //     _ref: '7ca4b38e-4fae-45b6-a0d0-7b288273f473',
    //     _type: 'reference',
    //   },
    // },
    publishedAt: new Date().toISOString(),
  },
};
