using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apimastery.Models
{
    public class Subject
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public virtual ICollection<Field> Fields { get; set; }

        public Subject()
        {

        }
    }
}
