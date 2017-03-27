using System;

namespace Stratis.Bitcoin.Dashboard.Models {
    public class Alert {
        public enum AlertLevel {
            Info,
            Success,
            Warning,
            Danger
        }

        public DateTime Date { get; set; }

        public AlertLevel Level { get; set; }

        public string Text { get; set; }
    }
}
