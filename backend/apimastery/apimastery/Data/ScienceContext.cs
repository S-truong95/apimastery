using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apimastery.Models;
using Microsoft.EntityFrameworkCore;

namespace apimastery.Data
{
    public class ScienceContext : DbContext
    {
        public DbSet<Subject> Subjects { get; set; }
        public DbSet<Scientist> Scientists { get; set; }
        public DbSet<Field> Fields { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connectionString = "Server=(localdb)\\mssqllocaldb;Database=ScienceDb;Trusted_Connection=True;";
            optionsBuilder.UseSqlServer(connectionString);
                          //.UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subject>().HasData(
                new Subject()
                {
                    Id = 1,
                    Name = "Biology",
                    Description = "Study of Life",
                    Image = "/Images/biology.jpeg"
                },
                new Subject()
                {
                    Id = 2,
                    Name = "Physics",
                    Description = "Study of Nature and Properties of Matter and Energy",
                    Image = "/Images/physics.jpeg"
                },
                new Subject()
                {
                    Id = 3,
                    Name = "Chemistry",
                    Description = "Study of Elements and Compounds",
                    Image = "/Images/chemistry.jpeg"
                });

            modelBuilder.Entity<Field>().HasData(
                new Field()
                {
                    Id = 1,
                    Name ="Botany",
                    Description = "Study of Plants",
                    Image = "/Images/botany.jpeg",
                    SubjectId = 1
                },
                new Field()
                {
                    Id = 2,
                    Name = "Zoology",
                    Description = "Study of Animals",
                    Image = "/Images/zoology.jpeg",
                    SubjectId = 1
                },
                new Field()
                {
                    Id = 3,
                    Name = "Classical",
                    Description = "Refers to theories of physics that predate modern, more complete, or widely applicable theories",
                    Image = "/Images/classicalphys.jpeg",
                    SubjectId = 2
                },
                new Field()
                {
                    Id = 4,
                    Name = "Nuclear",
                    Description = "Refers to the study of atomic nuclei and their constituents and interactions",
                    Image = "/Images/nuclearphys.jpeg",
                    SubjectId = 2
                },
                new Field()
                {
                    Id = 5,
                    Name = "Organic",
                    Description = "Study of Structures, Properties, and Reactions of Organic Compounds Which Contains Carbon Bonds",
                    Image = "/Images/organic.jpeg",
                    SubjectId = 3
                },
                new Field()
                {
                    Id = 6,
                    Name = "Physical",
                    Description = "Study of Macroscopic, Atomic, Subatomic, and Particulate Phenomena in Chemical Systems",
                    Image = "/Images/physicalchem.jpeg",
                    SubjectId = 3
                });

            modelBuilder.Entity<Scientist>().HasData(

                new Scientist()
                {
                    Id = 1,
                    Name = "Gregor Mendel",
                    Age = 62,
                    Birthplace = "Austria",
                    Contribution = "Creating the science of Genetics",
                    Image = "/Images/mendel.jpg",
                    FieldId = 1
                },

                new Scientist()
                {
                    Id = 2,
                    Name = "Charles Darwin",
                    Age = 73,
                    Birthplace = "England",
                    Contribution = "On the Origin of Species",
                    Image = "/Images/darwin.jpg",
                    FieldId = 2
                },

                new Scientist()
                {
                    Id = 3,
                    Name = "Michael Faraday",
                    Age = 75,
                    Birthplace = "England",
                    Contribution = "Faraday's Law of Induction",
                    Image = "/Images/faraday.jpg",
                    FieldId = 3
                },

                new Scientist()
                {
                    Id = 4,
                    Name = "Albert Einstein",
                    Age = 76,
                    Birthplace = "Germany",
                    Contribution = "General relativity",
                    Image = "/Images/einstein.jpg",
                    FieldId = 4                
                },

                new Scientist()
                {
                    Id = 5,
                    Name = "Robert Burns Woodward",
                    Age = 62,
                    Birthplace = "USA",
                    Contribution = "Molecular Structure determination",
                    Image = "/Images/woodward.jpg",
                    FieldId = 5              
               
                },

                new Scientist()
                {
                    Id = 6,
                    Name = "Richard Robert Ernst",
                    Age = 86,
                    Birthplace = "Switzerland",
                    Contribution = "NMR Spectroscopy",
                    Image = "/Images/ernst.jpg",
                    FieldId = 6
                }

                );



        }
    }
}
