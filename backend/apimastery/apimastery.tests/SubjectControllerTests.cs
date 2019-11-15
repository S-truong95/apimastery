using System;
using System.Collections.Generic;
using System.Linq;
using apimastery.Controllers;
using apimastery.Models;
using apimastery.Repositories;
using NSubstitute;
using Xunit;

namespace apimastery.tests
{
    public class SubjectControllerTests
    {
        private SubjectController underTest;
        IRepository<Subject> subjectRepo;

        public SubjectControllerTests()
        {
            subjectRepo = Substitute.For<IRepository<Subject>>();
            underTest = new SubjectController(subjectRepo);
        }

        [Fact]
        public void Get_Returns_List_of_Subjects()
        {
            var expectedSubject = new List<Subject>()
            {
                new Subject(1, "first subject"),
                new Subject(2, "second subject"),
            };

            subjectRepo.GetAll().Returns(expectedSubject);

            var result = underTest.Get();

            Assert.Equal(expectedSubject, result.ToList());
        }

        [Fact]
        public void Post_Creates_New_Scientist()
        {
            var newSubject = new Subject(1, "New subject");
            var subjectList = new List<Subject>();

            subjectRepo.When(t => t.Create(newSubject))
                .Do(t => subjectList.Add(newSubject));

            subjectRepo.GetAll().Returns(subjectList);

            var result = underTest.Post(newSubject);

            Assert.Contains(newSubject, result);
        }

        [Fact]
        public void Delete_Removes_Subject()
        {
            var subjectId = 1;
            var deletedSubject = new Subject(subjectId, "First subject");
            var subjectList = new List<Subject>()
            {
                deletedSubject,
                new Subject(2, "Second subject")
            };

            subjectRepo.GetById(subjectId).Returns(deletedSubject);
            subjectRepo.When(d => d.Delete(deletedSubject))
                .Do(d => subjectList.Remove(deletedSubject));

            subjectRepo.GetAll().Returns(subjectList);
            var result = underTest.Delete(subjectId);
            Assert.DoesNotContain(deletedSubject, result);
            //Assert.All(result, item => Assert.Contains("second item", item.Name));
        }

        [Fact]
        public void Put_Updates_Subject()
        {
            var originalSubject = new Subject(1, "First subject");
            var expectedSubject = new List<Subject>()
            {
                originalSubject
            };

            var updatedSubject = new Subject(1, "Updated subject");

            subjectRepo.When(t => subjectRepo.Update(updatedSubject))
                .Do(Callback.First(t => expectedSubject.Remove(originalSubject))
                .Then(t => expectedSubject.Add(updatedSubject)));

            subjectRepo.GetAll().Returns(expectedSubject);
            var result = underTest.Put(updatedSubject);

            Assert.Equal(expectedSubject, result.ToList());
        }
    }
}
