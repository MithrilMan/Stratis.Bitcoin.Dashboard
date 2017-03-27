using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Stratis.Bitcoin.Configuration;
using Stratis.Bitcoin.Dashboard.Models;

namespace Stratis.Bitcoin.Dashboard.Controllers {
    [Route("api/[controller]")]
    public class NodeController : Controller {
        private FullNode node;

        public NodeController(FullNode node) {
            this.node = node;
        }

        [HttpGet("[action]")]
        public NodeSettings Settings() {
            return this.node?.Settings;
        }


        /// <summary>
        /// returns top peers
        /// </summary>
        /// <param name="howMany"></param>
        /// <returns></returns>
        [HttpGet("[action]")]
        public IEnumerable<PeerItem> TopPeers(int? howMany) {
            var peers = (
                from node in this.node.ConnectionManager.ConnectedNodes
                where node.IsConnected
                let peer = node.Peer
                select new PeerItem {
                    ConnectedAt = node.ConnectedAt,
                    Read = node.Counter.ReadenBytes,
                    Written = node.Counter.WrittenBytes,
                    EndPoint = peer.Endpoint,
                    PeerUserAgent = node.PeerVersion.UserAgent,
                    PeerVersion = node.PeerVersion.Version.ToString(),
                    NegotiatedVersion = node.Version.ToString(),
                });

            return peers;
        }


        [HttpGet("[action]")]
        public BandStatistics BandStatistics() {
            var statistics = node.ConnectionManager.ConnectedNodes
                .Select(n => n.Counter)
                .Aggregate(
                    new BandStatistics(),
                    (accumulator, it) => {
                        accumulator.Received += it.ReadenBytes;
                        accumulator.Sent += it.WrittenBytes;
                        return accumulator;
                    }
                );

            return statistics;
        }
    }
}
