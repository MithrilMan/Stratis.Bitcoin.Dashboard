using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Stratis.Bitcoin.Dashboard.Controllers {
    public class HomeController : Controller {
        private FullNode node;


        public HomeController(FullNode node) {
            this.node = node;
        }

        public IActionResult Index() {
            return View();
        }

        public IActionResult Error() {
            return View();
        }
    }
}
