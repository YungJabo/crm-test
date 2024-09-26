export const date = [
  { 1: "янв" },
  { 2: "фев" },
  { 3: "март" },
  { 4: "апр" },
  { 5: "мая" },
  { 6: "июня" },
  { 7: "июля" },
  { 8: "авг" },
  { 9: "сент" },
  { 10: "окт" },
  { 11: "нояб" },
  { 12: "дек" },
];

export const getAge = (birthDate) => {
  const today = new Date();
  const birth = new Date(birthDate);

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age--;
  }

  return age;
};

export const formatDate = (sendedDate) => {
  const currentDate = new Date(sendedDate);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();

  const monthName = date.find((item) => item[month])[month];

  return `${day} ${monthName} ${year}`;
};
