// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

const tableArray = [
  {
    customerName: "Alper",
    customerEmail: "alper@example.com",
    customerID: "goalpergo",
    phoneNumber: "555-123-4567"
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;
