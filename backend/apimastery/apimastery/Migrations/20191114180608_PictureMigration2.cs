using Microsoft.EntityFrameworkCore.Migrations;

namespace apimastery.Migrations
{
    public partial class PictureMigration2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 6,
                column: "Image",
                value: "/Images/physicalchem.jpg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 6,
                column: "Image",
                value: "Images/physicalchem.jpg");
        }
    }
}
