using FluentMigrator;

namespace MovieTutorial.Migrations.DefaultDB
{
    [Migration(20221114_182500)]
    public class DefaultDB_20221114_182500_MovieKind : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Movie").InSchema("mov")
                .AddColumn("Kind").AsInt32().NotNullable()
                    .WithDefaultValue(1);
        }
    }
}