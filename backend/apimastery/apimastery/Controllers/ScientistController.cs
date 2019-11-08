using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Models;
using apimastery.Repositories;
using Microsoft.AspNetCore.Mvc;


namespace apimastery.Controllers
{
    [Route("api/scientist")]
    [ApiController]
    public class ScientistController : ControllerBase
    {
        private IRepository<Scientist> scientistRepo;

        public ScientistController(IRepository<Scientist> scientistRepo)
        {
            this.scientistRepo = scientistRepo;
        }
        // GET api/Scientist
        [HttpGet]
        public IEnumerable<Scientist> Get()
        {
            return scientistRepo.GetAll();
        }

        // GET api/Scientist/5
        [HttpGet("{id}")]
        public Scientist Get(int id)
        {
            return scientistRepo.GetById(id);
        }

        // POST api/Scientist
        [HttpPost]
        public IEnumerable<Scientist> Post([FromBody] Scientist scientist)
        {
            scientist.Create(scientist);
            return scientistRepo.GetAll();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
