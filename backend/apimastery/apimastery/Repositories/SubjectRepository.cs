using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Data;
using apimastery.Models;
using Microsoft.EntityFrameworkCore;

namespace apimastery.Repositories
{
    public class SubjectRepository : Repository<Subject>, IRepository<Subject>
    {

        private DbContext db;

        public SubjectRepository(ScienceContext context) : base(context)
        {
            this.db = context;
        }

        public override Subject GetById(int id)
        {
            return db.Set<Subject>().Where(i => i.Id == id).Include("Fields").FirstOrDefault();
        }


        
    }
}
