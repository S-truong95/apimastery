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
    public class FieldControllerTests
    {
        private FieldController underTest;
        IRepository<Field> fieldRepo;

        public FieldControllerTests()
        {
            fieldRepo = Substitute.For<IRepository<Field>>();
            underTest = new FieldController(fieldRepo);
        }

        [Fact]
        public void Get_Returns_List_of_Fields()
        {
            var expectedField = new List<Field>()
            {
                new Field(1, "first field"),
                new Field(2, "second field"),
            };

            fieldRepo.GetAll().Returns(expectedField);

            var result = underTest.Get();

            Assert.Equal(expectedField, result.ToList());
        }

        [Fact]
        public void Post_Creates_New_Field()
        {
            var newField = new Field(1, "New field");
            var fieldList = new List<Field>();

            fieldRepo.When(t => t.Create(newField))
                .Do(t => fieldList.Add(newField));

            fieldRepo.GetAll().Returns(fieldList);

            var result = underTest.Post(newField);

            Assert.Contains(newField, result);
        }

        [Fact]
        public void Delete_Removes_Field()
        {
            var fieldId = 1;
            var deletedField = new Field(fieldId, "First field");
            var fieldList = new List<Field>()
            {
                deletedField,
                new Field(2, "Second field")
            };

            fieldRepo.GetById(fieldId).Returns(deletedField);
            fieldRepo.When(d => d.Delete(deletedField))
                .Do(d => fieldList.Remove(deletedField));

            fieldRepo.GetAll().Returns(fieldList);
            var result = underTest.Delete(fieldId);
            Assert.DoesNotContain(deletedField, result);
        }

        [Fact]
        public void Put_Updates_Field()
        {
            var originalField = new Field(1, "First field");
            var expectedField = new List<Field>()
            {
                originalField
            };

            var updatedField = new Field(1, "Updated field");

            fieldRepo.When(t => fieldRepo.Update(updatedField))
                .Do(Callback.First(t => expectedField.Remove(originalField))
                .Then(t => expectedField.Add(updatedField)));

            fieldRepo.GetAll().Returns(expectedField);
            var result = underTest.Put(updatedField);

            Assert.Equal(expectedField, result.ToList());
        }
    }
}
