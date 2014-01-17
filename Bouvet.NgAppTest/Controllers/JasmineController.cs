using System;
using System.Web.Mvc;

namespace Bouvet.NgAppTest.Controllers
{
    public class JasmineController : Controller
    {
        public ViewResult Run()
        {
            return View("SpecRunner");
        }
    }
}
