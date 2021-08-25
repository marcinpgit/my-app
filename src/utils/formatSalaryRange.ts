const formatSalary = (salary: number) => salary.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");

export const formatSalaryRange = (salaryFrom?: number, salaryTo?: number, currency?: string) => {
  if (salaryFrom && salaryTo && currency) {
    return `${formatSalary(salaryFrom)} - ${formatSalary(salaryTo)} ${currency.toUpperCase()}`;
  }
  return "Undisclosed Salary";
};
