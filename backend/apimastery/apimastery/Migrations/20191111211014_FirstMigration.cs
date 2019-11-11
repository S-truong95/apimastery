using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace apimastery.Migrations
{
    public partial class FirstMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Subjects",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Subjects", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Fields",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    SubjectId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fields", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Fields_Subjects_SubjectId",
                        column: x => x.SubjectId,
                        principalTable: "Subjects",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Scientists",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Name = table.Column<string>(nullable: true),
                    Age = table.Column<int>(nullable: false),
                    Birthplace = table.Column<string>(nullable: true),
                    Contribution = table.Column<string>(nullable: true),
                    Image = table.Column<string>(nullable: true),
                    FieldId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Scientists", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Scientists_Fields_FieldId",
                        column: x => x.FieldId,
                        principalTable: "Fields",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Subjects",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 1, "Study of Life", "Biology" });

            migrationBuilder.InsertData(
                table: "Subjects",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 2, "Study of Nature and Properties of Matter and Energy", "Physics" });

            migrationBuilder.InsertData(
                table: "Subjects",
                columns: new[] { "Id", "Description", "Name" },
                values: new object[] { 3, "Study of Elements and Compounds", "Chemistry" });

            migrationBuilder.InsertData(
                table: "Fields",
                columns: new[] { "Id", "Description", "Image", "Name", "SubjectId" },
                values: new object[,]
                {
                    { 1, "Study of Plants", "", "Botany", 1 },
                    { 2, "Study of Animals", "", "Zoology", 1 },
                    { 3, "Refers to Theories of physics that predate modern, more complete, or more widely applicable theories", "", "Classical", 2 },
                    { 4, "Study of atomic nuclei and their constituents and interactions", "", "Nuclear", 2 },
                    { 5, "Study of Structures, Properties, and Reactions of Organic Compounds Which Contains Carbon Bonds", "", "Organic", 3 },
                    { 6, "Study of Macroscopic, Atomic, Subatomic, and Particulate Phenomena in Chemical Systems", "", "Physical", 3 }
                });

            migrationBuilder.InsertData(
                table: "Scientists",
                columns: new[] { "Id", "Age", "Birthplace", "Contribution", "FieldId", "Image", "Name" },
                values: new object[,]
                {
                    { 1, 62, "Austria", "Creating the science of Genetics", 1, null, "Gregor Mendel" },
                    { 2, 73, "England", "On the Origin of Species", 2, null, "Charles Darwin" },
                    { 3, 75, "England", "Faraday's Law of Induction", 3, null, "Michael Faraday" },
                    { 4, 76, "Germany", "General relativity", 4, null, "Albert Einstein" },
                    { 5, 62, "USA", "Molecular Structure determination", 5, null, "Robert Burns Woodward" },
                    { 6, 86, "Switzerland", "NMR Spectroscopy", 6, null, "Richard Robert Ernst" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Fields_SubjectId",
                table: "Fields",
                column: "SubjectId");

            migrationBuilder.CreateIndex(
                name: "IX_Scientists_FieldId",
                table: "Scientists",
                column: "FieldId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Scientists");

            migrationBuilder.DropTable(
                name: "Fields");

            migrationBuilder.DropTable(
                name: "Subjects");
        }
    }
}
