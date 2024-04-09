const employees = [
    { id: 1, name: "Alice", department: "sales", salary: 40000 },
    { id: 2, name: "Bob", department: "engineering", salary: 50000 },
    { id: 3, name: "Charlie", department: "marketing", salary: 45000 },
    { id: 4, name: "David", department: "sales", salary: 35000 },
    { id: 5, name: "Emily", department: "engineering", salary: 55000 }
  ];
  
  function increaseSalaries(employees) {
    // Implement your function here to modify the salary.
    let updatedObj = employees.map(employee => {
      let discount;
  
      switch (employee.department.toLowerCase()) {
        case 'sales':
          discount = 0.10;
          break;
        case 'engineering':
          discount = 0.15;
          break;
        default:
          discount = 0.05;
      }
  
      const updatedSalary = employee.salary + (employee.salary * discount);
      return {
        ...employee,
        salary: parseFloat(updatedSalary.toFixed(1))
      };
    });
  
    return updatedObj;
  }
  
  let sar = increaseSalaries(employees);
  console.log(sar);
  