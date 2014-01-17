using System.Web.Mvc;

namespace Bouvet.NgAppTest.Controllers
{
    public class RootController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}