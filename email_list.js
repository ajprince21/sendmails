
const email_list_1 = [
   {
    SNo: 1001,
    firstName: "Ajay Raj",
    lastName: "Tiwari",
    email: "ajprince0607@gmail.com",
    designation: "Head HR",
    company_name: "Gram Tarang Employability Training Services",
  },
  {
    SNo: 1002,
    firstName: "Rahul",
    lastName: "Tiwari",
    email: "8804530776.rk@gmail.com",
    designation: "Head HR",
    company_name: "Gram Tarang Employability Training Services",
  },
];
const email_list_2 = [
   {
    SNo: 1001,
    firstName: "Ajay Raj",
    lastName: "Tiwari",
    email: "ajprince0607@gmail.com",
    designation: "Head HR",
    company_name: "Gram Tarang Employability Training Services",
  },
  {
    SNo: 1002,
    firstName: "Rahul",
    lastName: "Tiwari",
    email: "8804530776.rk@gmail.com",
    designation: "Head HR",
    company_name: "Gram Tarang Employability Training Services",
  },
]

function getHRList(level = 1) {
  if (level == 1) return email_list_1;
  if (level == 2) return email_list_2;

  return email_list_1;
}

module.exports = { getHRList };
