using Microsoft.EntityFrameworkCore;

namespace crud_angular_api.Data
{
  public class EmployeeRepository
  {

    private readonly AppDbContext _appDbcontext;

    public EmployeeRepository(AppDbContext appDbContext)
    {
      _appDbcontext = appDbContext;
    }

    public async Task AddEmployeeAsync(Employee employee)
    {
      await _appDbcontext.Set<Employee>().AddAsync(employee);
      await _appDbcontext.SaveChangesAsync();
    }

    public async Task<List<Employee>> GetAllEmployeeAsync()
    {
      return await _appDbcontext.Employees.ToListAsync();
    }

    public async Task<Employee> GetEmployeeByIdAsync(int id)
    {
      return await _appDbcontext.Employees.FindAsync(id);
    }

    public async Task UpdateEmployeeAsync(int id, Employee model)
    {
      var employeee = await _appDbcontext.Employees.FindAsync(id);
      if (employeee == null)
      {
        throw new Exception("Employee not found");
      }
      employeee.Name = model.Name;
      employeee.Phone = model.Phone;
      employeee.Age = model.Age;
      employeee.Salary = model.Salary;
      await _appDbcontext.SaveChangesAsync();
    }

    public async Task DeleteEmployeeAsnyc(int id)
    {
      var employeee = await _appDbcontext.Employees.FindAsync(id);
      if (employeee == null)
      {
        throw new Exception("Employee not found");
      }
      _appDbcontext.Employees.Remove(employeee);
      await _appDbcontext.SaveChangesAsync();
    }

  }

}
