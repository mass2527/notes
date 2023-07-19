export const isEmpty = <T extends Record<string, unknown>>(obj: T) => {
  return Object.values(obj).every((value) => value === '');
};

const isToday = (date: Date) => {
  const today = new Date();

  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

function formatDateAsHHMM(date: Date) {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

const formatDateTime = (date: Date, locale: string = 'ko-KR') => {
  return new Intl.DateTimeFormat(locale).format(date);
};

export const getFormattedDate = (date: Date) => {
  return isToday(date) ? formatDateAsHHMM(date) : formatDateTime(date);
};

export const getFormattedFullDate = (date: Date) => {
  return `${formatDateTime(date)} ${formatDateAsHHMM(date)}`;
};
