import { FcAddressBook } from 'react-icons/fc';

export default {
  name: 'contact',
  title: 'İletişim',
  type: 'document',
  icon: FcAddressBook,
  fields: [
    {
      name: 'ad',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'mesaj',
      title: 'Message',
      type: 'text',
    },
  ],
};
