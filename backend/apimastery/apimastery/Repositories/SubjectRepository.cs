using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Data;
using apimastery.Models;

namespace apimastery.Repositories
{
    public class SubjectRepository : Repository<Subject>, IRepository<Subject>
    {
        public SubjectRepository(ScienceContext context) : base(context)
        {

        }
    }
}
