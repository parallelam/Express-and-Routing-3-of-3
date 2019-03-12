// ===============================================================================
// DATA
// Below data will hold all of the waitlist tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

const waitingArray = [
  {
    customerName: "Tim",
    customerEmail: "tim@example.com",
    customerID: "gotimgo",
    phoneNumber: "555-987-6543"
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = waitingArray;
