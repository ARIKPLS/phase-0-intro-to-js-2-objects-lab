// Write your solution in this file!
const employee = {
    name: 'Eric',
    streetAddress: '3654 Morgan Ct', 
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {... employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}