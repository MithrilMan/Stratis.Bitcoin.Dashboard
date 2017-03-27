using System;

namespace Stratis.Bitcoin.Dashboard.Models {
    public class Message {
        public DateTime Date { get; set; }

        public string From { get; set; }

        public string Text { get; set; }
    }
}
