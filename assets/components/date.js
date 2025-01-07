import { parseISO, format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/pro-regular-svg-icons';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <div className="date-wrapper">
      <FontAwesomeIcon icon={faCalendar} className="date-icon" />
      <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    </div>
  );
}