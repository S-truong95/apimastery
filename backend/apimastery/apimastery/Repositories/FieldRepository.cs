using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Models;
using apimastery.Data;

namespace apimastery.Repositories
{
    public class FieldRepository : Repository<Field>, IRepository<Field>
    {
        public FieldRepository(ScienceContext context) : base(context)
        {

        }
    }
}
