using Microsoft.EntityFrameworkCore.Migrations;

namespace apimastery.Migrations
{
    public partial class DataContextUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 3,
                column: "Description",
                value: "Refers to theories of physics that predate modern, more complete, or widely applicable theories");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 4,
                column: "Description",
                value: "Refers to the study of atomic nuclei and their constituents and interactions");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 3,
                column: "Description",
                value: "Refers to Theories of physics that predate modern, more complete, or more widely applicable theories");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 4,
                column: "Description",
                value: "Study of atomic nuclei and their constituents and interactions");
        }
    }
}
