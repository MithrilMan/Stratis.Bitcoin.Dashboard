using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Stratis.Bitcoin.Builder;
using Stratis.Bitcoin.Configuration;
using Stratis.Bitcoin.MemoryPool;

namespace Stratis.Bitcoin.Dashboard.NodeStarter {
    public class Program {
        public static void Main(string[] args) {
            Logging.Logs.Configure(new LoggerFactory().AddConsole(LogLevel.Trace, false));
            NodeSettings nodeSettings = NodeSettings.FromArguments(args);

            var node = (FullNode)new FullNodeBuilder()
                .UseNodeSettings(nodeSettings)
                .UseMempool()
                .UseDashboard(options => {
                    //this parameter should be read from configuration file
                    //maybe something like
                    // nodeSettings.GetExtendedOption<int>("DashboardEnabled", defaultValue: 5002);
                    options.Port = 5002;

                    //in debug mode, it gets files from physical path, so i set a relative path to my web content.
                    //in production mode, it gets contents from embedded resource and this parameter isn't used
                    var appFolder = System.IO.Path.GetDirectoryName(System.Reflection.Assembly.GetEntryAssembly().Location);
                    options.ContentRoot = System.IO.Path.Combine(appFolder, "..", "..", "..", "..", "Stratis.Bitcoin.Dashboard");
                })
                .Build();

            // == shout down thread ==
            new Thread(() => {
                Console.WriteLine("Press one key to stop");
                Console.ReadLine();
                node.Dispose();
            }) {
                IsBackground = true //so the process terminate
            }.Start();

            // == mining thread ==
            if (args.Any(a => a.Contains("mine"))) {
                new Thread(() => {
                    Thread.Sleep(10000); // let the node start
                    while (!node.IsDisposed) {
                        Thread.Sleep(100); // wait 1 sec
                                           // generate 1 block
                        var res = node.Miner.GenerateBlocks(new Stratis.Bitcoin.Miner.ReserveScript() { reserveSfullNodecript = new NBitcoin.Key().ScriptPubKey }, 1, int.MaxValue, false);
                        if (res.Any())
                            Console.WriteLine("mined tip at: " + node?.Chain.Tip.Height);
                    }
                }) {
                    IsBackground = true //so the process terminate
                }.Start();
            }

            node.Start();
            node.WaitDisposed();
            node.Dispose();
        }
    }
}