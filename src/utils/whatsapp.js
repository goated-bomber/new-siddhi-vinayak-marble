/* =====================================
   BUSINESS DETAILS
===================================== */

export const BUSINESS_WHATSAPP =
  "919331575229";

/* =====================================
   GENERATE WHATSAPP URL
===================================== */

export const createWhatsAppLink = (
  message = ""
) => {

  return `https://wa.me/${BUSINESS_WHATSAPP}?text=${encodeURIComponent(
    message
  )}`;

};

/* =====================================
   COMMON MESSAGES
===================================== */

export const generalInquiry = () => {

  return createWhatsAppLink(
    "Hello, I would like to know more about your marble and tile collection."
  );

};

export const tileInquiry = (
  tileName
) => {

  return createWhatsAppLink(
    `Hello, I am interested in ${tileName}. Can you provide more details?`
  );

};

export const projectInquiry = (
  projectName
) => {

  return createWhatsAppLink(
    `Hello, I would like more information regarding the project "${projectName}".`
  );

};

export const showroomVisitInquiry = () => {

  return createWhatsAppLink(
    "Hello, I would like to visit your showroom. Please share the address and timings."
  );

};

export const quotationInquiry = (
  tileName
) => {

  return createWhatsAppLink(
    `Hello, I would like a quotation for ${tileName}.`
  );

};