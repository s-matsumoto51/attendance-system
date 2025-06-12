using Microsoft.EntityFrameworkCore;
using Apiren.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using System.Linq;



var builder = WebApplication.CreateBuilder(args);

// CORS設定
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// DbContextの登録
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// コントローラーの登録
builder.Services.AddControllers();

var app = builder.Build();

app.UseCors();

app.MapControllers();

using (var scope = app.Services.CreateScope())
{
    var context = scope.ServiceProvider.GetRequiredService<AppDbContext>();

    // マイグレーション適用（DBがなければ作成）
    context.Database.Migrate();

    // Usersテーブルにデータがなければ初期データを追加
    // if (!context.Users.Any())
    // {
    //     context.Users.AddRange(
    //         new Apiren.Models.User { Name = "admin", Email = "admin@example.com", Address = "A.tStreet", TelNo = "090-3333-5555", Status = "1" },
    //         new Apiren.Models.User { Name = "user1", Email = "user1@example.com", Address = "B.tStreet", TelNo = "090-6666-4567", Status = "1" }
    //     );
    //     context.SaveChanges();
    // }
}

app.Run();
