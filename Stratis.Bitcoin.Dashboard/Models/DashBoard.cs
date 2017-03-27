namespace Stratis.Bitcoin.Dashboard.Models {
    public class DashBoard {
        public int ConnectedPeers { get; set; }

        public int CurrentHeight { get; set; }

        public long MemPoolTransactionsCount { get; set; }
    }
}