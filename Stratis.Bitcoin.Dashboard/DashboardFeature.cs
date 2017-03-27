using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Stratis.Bitcoin.Builder;
using Stratis.Bitcoin.Builder.Feature;
using Stratis.Bitcoin.Logging;

namespace Stratis.Bitcoin.Dashboard {
    public class DashboardFeature : FullNodeFeature {
        public class DashboardOptions {
            public string ContentRoot { get; set; } = Directory.GetCurrentDirectory();
            public int Port { get; set; }

            internal DashboardOptions() {

            }
        }

        private IWebHost host;
        private DashboardOptions configuration;
        private FullNode node;

        public FullNode FullNode { get; private set; }


        public DashboardFeature(FullNode node, DashboardOptions configuration) {
            this.node = node;
            this.configuration = configuration ?? new DashboardOptions();
        }


        /// <summary>
        /// fluent configuration, allow to tweak 
        /// </summary>
        /// <param name="configureAction"></param>
        /// <returns></returns>
        internal DashboardFeature Configure(Action<DashboardOptions> configureAction) {
            configureAction?.Invoke(this.configuration);
            return this;
        }

        public override void Start() {
            if (host == null) {

                try {
                    var hostBuilder = new WebHostBuilder()
                      .UseKestrel();

                    if (configuration.ContentRoot != null) {
                        hostBuilder.UseContentRoot(configuration.ContentRoot);
                    }
                    
                    hostBuilder.UseUrls($"http://localhost:{configuration.Port}")
                      .UseStartup<Startup>()
                      .ConfigureServices(services => {
                          services.AddSingleton<FullNode>(node); //register the FullNode instance in the local dashboard webhost service provider
                      });



                    host = hostBuilder.Build();

                    host.Start();

                    Logs.FullNode.LogInformation($"WebWallet STARTED on port {configuration.Port}");
                }
                catch (Exception ex) {
                    Logs.FullNode.LogError($"Error starting WebWallet on port {configuration.Port}: {ex.Message}");
                }
            }
            else {
                Logs.FullNode.LogWarning($"WebWallet already started");
            }
        }

        public override void Stop() {
            if (host != null) {
                //can Kestrel be stopped?
            }
        }
    }


    public static class DasboardFeatureBuilderExtension {
        public static IFullNodeBuilder UseDashboard(this IFullNodeBuilder fullNodeBuilder) {
            return UseDashboard(fullNodeBuilder, null);
        }

        public static IFullNodeBuilder UseDashboard(this IFullNodeBuilder fullNodeBuilder, Action<DashboardFeature.DashboardOptions> configureAction) {
            fullNodeBuilder.ConfigureFeature(features => {

                features
                .AddFeature<DashboardFeature>()
                .FeatureServices(services => {
                    //register eventual services that the feature need to use or want to expose to other features

                    //register the configuration object used by the dashboard.
                    //it can be 
                    services.AddSingleton<DashboardFeature.DashboardOptions>(serviceProvider => {
                        DashboardFeature.DashboardOptions configuration = new DashboardFeature.DashboardOptions();
                        configureAction?.Invoke(configuration);
                        return configuration;
                    });

                });

            });

            return fullNodeBuilder;
        }
    }
}
