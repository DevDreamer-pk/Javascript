function mapContactsToCompanies(contacts) {
    // Use reduce to transform the contacts array into an object
    const result = contacts.reduce((acc, contact) => {
      const { name, company } = contact;
  
      // Check if the company is already a key in the accumulator
      if (acc.hasOwnProperty(company)) {
        // If yes, push the contact name to the existing array
        acc[company].push(name);
      } else {
        // If no, create a new array with the contact name as the first element
        acc[company] = [name];
      }
  
      return acc;
    }, {});
  
    return result;
  }
  
  // Example usage:
  const contacts = [
    { name: "Alice", company: "ABC Inc." },
    { name: "Bob", company: "XYZ Corp." },
    { name: "Charlie", company: "ABC Inc." }
  ];
  
  const result = mapContactsToCompanies(contacts);
  console.log(result);
  