export function timeDiffFromNow(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (diff < 60000) {
    return '방금';
  } else if (diff < 3600000) {
    return minutes + '분';
  } else if (diff < 86400000) {
    return hours + '시간';
  } else if (diff < 2592000000) {
    return days + '일';
  } else if (diff < 31536000000) {
    return months + '개월';
  } else {
    return years + '년';
  }
}
