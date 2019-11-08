using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Data;
using apimastery.Models;

namespace apimastery.Repositories
{
    public class ScientistRepository : Repository<Scientist>, IRepository<Scientist>
    {
        public ScientistRepository(ScienceContext context) : base(context)
        {

        }
    }
}
