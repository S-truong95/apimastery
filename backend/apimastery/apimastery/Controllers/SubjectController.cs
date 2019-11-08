using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Models;
using apimastery.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace apimastery.Controllers
{
    [Route("api/subject")]
    [ApiController]
    public class SubjectController : ControllerBase
    {
        private IRepository<Subject> subjectRepo;

        public SubjectController(IRepository<Subject> subjectRepo)
        {
            this.subjectRepo = subjectRepo;
        }
        // GET api/Subject
        [HttpGet]
        public IEnumerable<Subject> Get()
        {
            return subjectRepo.GetAll();
        }

        // GET api/Subject/5
        [HttpGet("{id}")]
        public Subject Get(int id)
        {
            return subjectRepo.GetById(id);
        }

        // POST api/Subject
        [HttpPost]
        public IEnumerable<Subject> Post([FromBody] Subject subject)
        {
            subjectRepo.Create(subject);
            return subjectRepo.GetAll();
        }

        // PUT api/Subject/5
        [HttpPut("{id}")]
        public IEnumerable<Subject> Put([FromBody] Subject subject)
        {
            subjectRepo.Update(subject);
            return subjectRepo.GetAll();
        }

        // DELETE api/ApiWithAction/5
        [HttpDelete("{id}")]
        public IEnumerable<Subject> Delete(int id)
        {
            var deleteSubject = subjectRepo.GetById(id);
            subjectRepo.Delete(deleteSubject);
            return subjectRepo.GetAll();
        }
    }
}
