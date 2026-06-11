using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SunshineBouquet.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    CustomerStore = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    OriginCountry = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    DestinationCity = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: false),
                    BouquetQuantity = table.Column<int>(type: "int", nullable: false),
                    Status = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    CreatedAt = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Orders");
        }
    }
}
