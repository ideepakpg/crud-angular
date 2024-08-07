namespace crud_angular_api.Data
{
    public class EmployeeRepository
    {
        private readonly AppDbContext _appDbcontext;
        public EmployeeRepository(AppDbContext appDbContext)
        {
            _appDbcontext = appDbContext;
        }

        public async Task AddEmployee(Employee employee)
        {
            await _appDbcontext.Set<Employee>().AddAsync(employee);
            await _appDbcontext.SaveChangesAsync();
        }
    }
}
