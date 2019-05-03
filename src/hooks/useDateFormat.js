import { format } from 'date-fns';

export default function useDateFormat(date, formatTo = 'MM/DD/YYYY') {
  const dateArr = date.split('-');
  return format(new Date(dateArr[0], dateArr[1] - 1, dateArr[2]), formatTo);
}
