const getDateString = (date = new Date()) => {
  return `${date.getDate()}/${date.getMonth() + 1}/${
    date.getFullYear() - 2000
  }`;
};

const getHebMonth = (date = new Date()) => {
switch (date.getMonth()) {
  case 0:
    return 'חודש ינואר';
  case 1:
    return 'חודש פברואר';
  case 2:
    return 'חודש מרץ';
  case 3:
    return 'חודש אפריל';
  case 4:
    return 'חודש מאי';
  case 5:
    return 'חודש יוני';
  case 6:
    return 'חודש יולי';
  case 7:
    return 'חודש אוגוסט';
  case 8:
    return 'חודש ספטמבר';
  case 9:
    return 'חודש אוקטובר';
  case 10:
    return 'חודש נובמבר';
  case 11:
    return 'חודש דצמבר';

  default:
    return;
}
  
};

export const utilsService = {
  getDateString,
  getHebMonth
};
