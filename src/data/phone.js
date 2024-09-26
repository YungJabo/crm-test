export const cleanPhoneNumber = (phone) => {
  return phone.replace(/[^\d]/g, "");
};
