using Microsoft.EntityFrameworkCore.Migrations;

namespace apimastery.Migrations
{
    public partial class PicturesMigration3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "/Images/botany.jpeg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: "/Images/zoology.jpeg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: "/Images/classicalphys.jpeg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 4,
                column: "Image",
                value: "/Images/nuclearphys.jpeg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 5,
                column: "Image",
                value: "/Images/organic.jpeg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 6,
                column: "Image",
                value: "/Images/physicalchem.jpeg");

            migrationBuilder.UpdateData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "/Images/biology.jpeg");

            migrationBuilder.UpdateData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: "/Images/physics.jpeg");

            migrationBuilder.UpdateData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: "/Images/chemistry.jpeg");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "/Images/botany.jpg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: "/Images/zoology.jpg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: "/Images/classicalphys.jpg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 4,
                column: "Image",
                value: "/Images/nuclearphys.jpg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 5,
                column: "Image",
                value: "/Images/organic.jpg");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 6,
                column: "Image",
                value: "/Images/physicalchem.jpg");

            migrationBuilder.UpdateData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "/Images/biology.jpg");

            migrationBuilder.UpdateData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: "/Images/physics.jpg");

            migrationBuilder.UpdateData(
                table: "Subjects",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: "/Images/chemistry.jpg");
        }
    }
}
