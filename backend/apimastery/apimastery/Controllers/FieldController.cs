using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Models;
using apimastery.Repositories;
using Microsoft.AspNetCore.Mvc;


namespace apimastery.Controllers
{
    [Route("api/field")]
    [ApiController]
    public class FieldController : ControllerBase
    {
        private IRepository<Field> fieldRepo;

        public FieldController(IRepository<Field> fieldRepo)
        {
            this.fieldRepo = fieldRepo;
        }
        // GET api/Field
        [HttpGet]
        public IEnumerable<Field> Get()
        {
            return fieldRepo.GetAll();
        }

        // GET api/Field/5
        [HttpGet("{id}")]
        public Field Get(int id)
        {
            return fieldRepo.GetById(id);
        }

        // POST api/Field
        [HttpPost]
        public IEnumerable<Field> Post([FromBody] Field field)
        {
            fieldRepo.Create(field);
            return fieldRepo.GetAll();
        }

        // PUT api/Field/5
        [HttpPut("{id}")]
        public IEnumerable<Field> Put([FromBody] Field field)
        {
            fieldRepo.Update(field);
            return fieldRepo.GetAll();
        }

        // DELETE api/ApiWithAction/5
        [HttpDelete("{id}")]
        public IEnumerable<Field> Delete(int id)
        {
            var deleteField = fieldRepo.GetById(id);
            fieldRepo.Delete(deleteField);
            return fieldRepo.GetAll();
        }
    }
}
