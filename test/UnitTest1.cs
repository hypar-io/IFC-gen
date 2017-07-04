using System;
using Xunit;
using IFC4;

namespace test
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            var el = new IFC4.IfcBeam();
            el.PredefinedType = IfcBeamTypeEnum.beam;

        }
    }
}
