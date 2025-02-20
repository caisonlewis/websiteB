var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.UseStaticFiles(); // Allows serving static files like index.html

// Redirect the root URL ("/") to "index.html"
app.MapGet("/", async (HttpContext context) =>
{
    context.Response.Redirect("/index.html");
});

app.Run();
