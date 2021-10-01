export default {
  name: 'etkinlikCategory',
  title: 'Etkinlik Kategorileri',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Etkinlik Türü',
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
  ],
};
