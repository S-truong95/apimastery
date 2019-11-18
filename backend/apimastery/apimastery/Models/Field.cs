using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace apimastery.Models
{
    public class Field
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }

        public virtual ICollection<Scientist> Scientists { get; set; }
        public virtual Subject Subject { get; set; }
        public int SubjectId { get; set; }

        public Field()
        {

        }

        public Field(int id, string name)
        {
            Id = id;
            Name = name;
        }

    }
}
