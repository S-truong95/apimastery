using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apimastery.Models
{
    public class Scientist
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string Birthplace { get; set; }
        public string Contribution { get; set; }
        public string Image { get; set; }

        public virtual Field Field { get; set; }
        public int FieldId { get; set; }

        public Scientist()
        {

        }
    }
}
