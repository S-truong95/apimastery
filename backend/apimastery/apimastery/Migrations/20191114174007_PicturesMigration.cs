using Microsoft.EntityFrameworkCore.Migrations;

namespace apimastery.Migrations
{
    public partial class PicturesMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Image",
                table: "Subjects",
                nullable: true);

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
                value: "Images/physicalchem.jpg");

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "/Images/mendel.jpg");

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: "/Images/darwin.jpg");

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: "/Images/faraday.jpg");

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 4,
                column: "Image",
                value: "/Images/einstein.jpg");

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 5,
                column: "Image",
                value: "/Images/woodward.jpg");

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 6,
                column: "Image",
                value: "/Images/ernst.jpg");

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Image",
                table: "Subjects");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: "");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: "");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: "");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 4,
                column: "Image",
                value: "");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 5,
                column: "Image",
                value: "");

            migrationBuilder.UpdateData(
                table: "Fields",
                keyColumn: "Id",
                keyValue: 6,
                column: "Image",
                value: "");

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 1,
                column: "Image",
                value: null);

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 2,
                column: "Image",
                value: null);

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 3,
                column: "Image",
                value: null);

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 4,
                column: "Image",
                value: null);

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 5,
                column: "Image",
                value: null);

            migrationBuilder.UpdateData(
                table: "Scientists",
                keyColumn: "Id",
                keyValue: 6,
                column: "Image",
                value: null);
        }
    }
}
