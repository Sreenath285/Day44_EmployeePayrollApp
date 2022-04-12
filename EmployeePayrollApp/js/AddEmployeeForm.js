window.addEventListener("DOMContentLoaded", (event) => {
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".text-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }
    try {
      new EmployeePayrollData().name = name.value;
      nameError.textContent = "";
    } catch (e) {
      nameError.textContent = e;
    }
  });

  const salary = document.querySelector("#salary");
  const output = document.querySelector(".salary-output");
  output.textContent = salary.value;
  salary.addEventListener("input", function () {
    output.textContent = salary.value;
  });

});

const save = () => {
 try {
   let employeePayrollData = createEmployeePayroll();
 }
 catch (e) {
   return;
 }
}  

const createEmployeePayroll = () => {
 let employeePayrollData = new EmployeePayrollData();
 try {
   employeePayrollData.name = getInputValueById('#name');
 }
 catch (e) {
   setTextValue('.text-error', e);
   throw e;
 }

 employeePayrollData.profileImage = getSelectedValues("[name=profile]").pop();
 employeePayrollData.gender = getSelectedValues("[name=gender]").pop();
 employeePayrollData.department = getSelectedValues("[name=department]");
 employeePayrollData.salary = getInputValueById("#salary");
 employeePayrollData.notes = getInputValueById("#notes");

 let date =  getInputValueById("#year") + "-" + getInputValueById("#month") + "-" + getInputValueById("#day");
 employeePayrollData.date = Date.parse(date);
 alert(employeePayrollData.toString());
 return employeePayrollData;
}

const getInputValueById = (id) => {
 let value = document.querySelector(id).value;
 return value;
} 

const getSelectedValues = (propertyValue) => {
 let allItems = document.querySelectorAll(propertyValue);
 let selItems = [];
 allItems.forEach((item) => {
   if (item.checked) selItems.push(item.value);
 });
 return selItems;
};


