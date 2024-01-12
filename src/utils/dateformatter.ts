export const dateFormatter = (inputDate: string): string => {
    const date = new Date(inputDate);
  
    const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate: string = date.toLocaleDateString(undefined, options);
  
    return formattedDate;
  }