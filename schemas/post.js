/** @format */

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
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
      name: 'keywords',
      title: 'Anahtar kelimeler',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'featured',
      title: 'Anasayfada yayınlansın mı?',
      type: 'boolean',
      description: 'Seçtiğinde ana sayfada yer alacak!',
    },
    {
      name: 'pinned',
      title: 'Pinlensin mi?',
      description: 'Pinlersen blog sayfasında en üstte yer alacak!',
      type: 'boolean',
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
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
      name: 'excerpt',
      title: 'Özet',
      type: 'text',
    },
    {
      name: 'file',
      title: 'Dosya',
      type: 'file',
      description: 'Sadece pdf formatında dosyalar yüklenebilir!',
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
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
