using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Models;
using apimastery.Data;
using Microsoft.EntityFrameworkCore;

namespace apimastery.Repositories
{
    public class FieldRepository : Repository<Field>, IRepository<Field>
    {
        private DbContext db;

        public FieldRepository(ScienceContext context) : base(context)
        {
            this.db = context;
        }

        public override Field GetById(int id)
        {
            return db.Set<Field>().Where(i => i.Id == id).Include("Scientists").FirstOrDefault();
        }
    }
}
