using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.PlatformAbstractions;
using Swashbuckle.Swagger.Model;

namespace Stratis.Bitcoin.Dashboard {
    public class Startup {
        public bool IsDevelopment { get; set; }

        public bool UseEmbeddedResources { get; set; }

        public IConfigurationRoot Configuration { get; }

        public Startup(IHostingEnvironment env) {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
            Configuration = builder.Build();

#if DEBUG
            this.IsDevelopment = true;
#else
         this.IsDevelopment = env.IsDevelopment();
#endif

            UseEmbeddedResources = !IsDevelopment;
        }


        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services) {
            // Add framework services.
            services.AddMvc();

            if (UseEmbeddedResources) {
                var embeddedProvider = new EmbeddedFileProvider(this.GetType().GetTypeInfo().Assembly);

                //using embeddedProvider to load files (all embedded into the wallet dll)
                services.Configure<RazorViewEngineOptions>(options => {
                    options.FileProviders.Clear();
                    options.FileProviders.Add(embeddedProvider);
                });
            }


            services.AddSwaggerGen(options => {
                options.SingleApiVersion(new Info {
                    Version = "v1",
                    Title = "Stratis Dashboard API",
                    Description = "Stratis Dashboard ASP.NET Core Web API",
                    TermsOfService = "None",
                    Contact = new Contact { Name = "Mithril Man", Email = "info@mithrilman.com", Url = "http://www.mithrilman.com" },
                    //License = new License { Name = "Use under LICX", Url = "http://url.com" }
                });

                //Determine base path for the application.
                var basePath = PlatformServices.Default.Application.ApplicationBasePath;

                //Set the comments path for the swagger json and ui.
                var xmlPath = Path.Combine(basePath, "Stratis.Bitcoin.Dashboard.xml");

                options.IncludeXmlComments(xmlPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory) {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true
                });
            }
            else {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();



            app.UseSwagger();

            app.UseSwaggerUi();

            app.UseMvc(routes => {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");

                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new { controller = "Home", action = "Index" });
            });
        }
    }
}
