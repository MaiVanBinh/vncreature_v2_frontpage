import * as moment from 'moment'
import 'moment/locale/vi';
moment.locale('vi')

export const timeSince = (date: string) => {
  return moment(date).fromNow()
};
