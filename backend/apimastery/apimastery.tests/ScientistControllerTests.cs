using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using apimastery.Controllers;
using apimastery.Models;
using apimastery.Repositories;
using NSubstitute;
using Xunit;

namespace apimastery.tests
{
    public class ScientistControllerTests
    {
        private ScientistController underTest;
        IRepository<Scientist> scientistRepo;

        public ScientistControllerTests()
        {
            scientistRepo = Substitute.For<IRepository<Scientist>>();
            underTest = new ScientistController(scientistRepo);
        }

        [Fact]
        public void Get_Returns_List_of_Scientists()
        {
            var expectedScientist = new List<Scientist>()
            {
                new Scientist(1, "first scientist"),
                new Scientist(2, "second scientist"),
            };

            scientistRepo.GetAll().Returns(expectedScientist);

            var result = underTest.Get();

            Assert.Equal(expectedScientist, result.ToList());
        }

        [Fact]
        public void Post_Creates_New_Scientist()
        {
            var newScientist = new Scientist(1, "New scientist");
            var scientistList = new List<Scientist>();

            scientistRepo.When(t => t.Create(newScientist))
                .Do(t => scientistList.Add(newScientist));

            scientistRepo.GetAll().Returns(scientistList);

            var result = underTest.Post(newScientist);

            Assert.Contains(newScientist, result);
        }

        [Fact]
        public void Delete_Removes_Scientist()
        {
            var scientistId = 1;
            var deletedScientist = new Scientist(scientistId, "First scientist");
            var scientistList = new List<Scientist>()
            {
                deletedScientist,
                new Scientist(2, "Second second")
            };

            scientistRepo.GetById(scientistId).Returns(deletedScientist);
            scientistRepo.When(d => d.Delete(deletedScientist))
                .Do(d => scientistList.Remove(deletedScientist));

            scientistRepo.GetAll().Returns(scientistList);
            var result = underTest.Delete(scientistId);
            Assert.DoesNotContain(deletedScientist, result);
            //Assert.All(result, item => Assert.Contains("second item", item.Name));

        }

        [Fact]
        public void Put_Updates_Scientist()
        {
            var originalScientist = new Scientist(1, "First scientist");
            var expectedScientist = new List<Scientist>()
            {
                originalScientist
            };

            var updatedScientist = new Scientist(1, "Updated scientist");

            scientistRepo.When(t => scientistRepo.Update(updatedScientist))
                .Do(Callback.First(t => expectedScientist.Remove(originalScientist))
                .Then(t => expectedScientist.Add(updatedScientist)));

            scientistRepo.GetAll().Returns(expectedScientist);
            var result = underTest.Put(updatedScientist);

            Assert.Equal(expectedScientist, result.ToList());
            //Assert.All(result, item => Assert.Contains("Updated item", item.Name));
        }
    }
}
