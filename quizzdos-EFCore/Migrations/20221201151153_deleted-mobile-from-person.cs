using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace quizzdos_EFCore.Migrations
{
    public partial class deletedmobilefromperson : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Mobile",
                table: "Person");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Mobile",
                table: "Person",
                type: "nvarchar(15)",
                nullable: false,
                defaultValue: "");
        }
    }
}
