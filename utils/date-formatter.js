import { parseISO, format } from 'date-fns';
import { tr } from 'date-fns/locale';
export const formatDate = (timestamp) => format(parseISO(timestamp), 'PPP', { locale: tr });
