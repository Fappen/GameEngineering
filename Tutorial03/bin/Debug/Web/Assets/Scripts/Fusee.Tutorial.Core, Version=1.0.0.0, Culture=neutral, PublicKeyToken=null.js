/* Generated by JSIL v0.8.2 build 17617. See http://jsil.org/ for more information. */ 
'use strict';
var $asm09 = JSIL.DeclareAssembly("Fusee.Tutorial.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("Fusee");
JSIL.DeclareNamespace("Fusee.Tutorial");
JSIL.DeclareNamespace("Fusee.Tutorial.Core");
/* class Fusee.Tutorial.Core.Tutorial */ 

(function Tutorial$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderCanvas)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm04.Fusee.Engine.Core.Mesh)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm06.Fusee.Math.Core.float3)) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm0D.System.UInt16)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm04.Fusee.Engine.Core.ShaderProgram)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderContext)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm06.Fusee.Math.Core.float4)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm03.Fusee.Engine.Common.ClearFlags)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm06.Fusee.Math.Core.float2)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm04.Fusee.Engine.Core.MouseDevice)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm04.Fusee.Engine.Core.Input)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm04.Fusee.Engine.Core.TouchDevice)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm03.Fusee.Engine.Common.TouchPoints)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm0D.System.Boolean)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm0D.System.Single)) ();
  };
  var $T0F = function () {
    return ($T0F = JSIL.Memoize($asm06.Fusee.Math.Core.float4x4)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float3"), [
        $asm0D.TypeRef("System.Single"), $asm0D.TypeRef("System.Single"), 
        $asm0D.TypeRef("System.Single")
      ]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float4"), [
        $asm0D.TypeRef("System.Single"), $asm0D.TypeRef("System.Single"), 
        $asm0D.TypeRef("System.Single"), $asm0D.TypeRef("System.Single")
      ]))) ();
  };


  function Tutorial__ctor () {
    $T00().prototype._ctor.call(this);
  }; 

  function Tutorial_Init () {
    var mesh = new ($T01())();
    mesh.set_Vertices(JSIL.Array.New($T02(), [$S00().Construct(-1, -1, -1), $S00().Construct(-1, -1, -1), $S00().Construct(-1, -1, -1), $S00().Construct(-1, -1, 1), $S00().Construct(-1, -1, 1), $S00().Construct(-1, -1, 1), $S00().Construct(-1, 1, -1), $S00().Construct(-1, 1, -1), $S00().Construct(-1, 1, -1), $S00().Construct(-1, 1, 1), $S00().Construct(-1, 1, 1), $S00().Construct(-1, 1, 1), $S00().Construct(1, -1, -1), $S00().Construct(1, -1, -1), $S00().Construct(1, -1, -1), $S00().Construct(1, -1, 1), $S00().Construct(1, -1, 1), $S00().Construct(1, -1, 1), $S00().Construct(1, 1, -1), $S00().Construct(1, 1, -1), $S00().Construct(1, 1, -1), $S00().Construct(1, 1, 1), $S00().Construct(1, 1, 1), $S00().Construct(1, 1, 1)]));
    mesh.set_Normals(JSIL.Array.New($T02(), [$S00().Construct(-1, 0, 0), $S00().Construct(0, -1, 0), $S00().Construct(0, 0, -1), $S00().Construct(-1, 0, 0), $S00().Construct(0, -1, 0), $S00().Construct(0, 0, 1), $S00().Construct(-1, 0, 0), $S00().Construct(0, 1, 0), $S00().Construct(0, 0, -1), $S00().Construct(-1, 0, 0), $S00().Construct(0, 1, 0), $S00().Construct(0, 0, 1), $S00().Construct(1, 0, 0), $S00().Construct(0, -1, 0), $S00().Construct(0, 0, -1), $S00().Construct(1, 0, 0), $S00().Construct(0, -1, 0), $S00().Construct(0, 0, 1), $S00().Construct(1, 0, 0), $S00().Construct(0, 1, 0), $S00().Construct(0, 0, -1), $S00().Construct(1, 0, 0), $S00().Construct(0, 1, 0), $S00().Construct(0, 0, 1)]));
    mesh.set_Triangles(JSIL.Array.New($T03(), [0, 6, 3, 3, 6, 9, 2, 14, 20, 2, 20, 8, 12, 15, 18, 15, 21, 18, 5, 11, 17, 17, 11, 23, 7, 22, 10, 7, 19, 22, 1, 4, 16, 1, 16, 13]));
    this._mesh = mesh;
    var shader = (this.RenderCanvas$RC$value).CreateShader("\r\n        attribute vec3 fuVertex;\r\n        attribute vec3 fuNormal;\r\n        uniform float alpha;\r\n        varying vec3 modelpos;\r\n        varying vec3 normal;\r\n        void main()\r\n        {\r\n            modelpos = fuVertex;\r\n            normal = fuNormal;\r\n            float s = sin(alpha);\r\n            float c = cos(alpha);\r\n            gl_Position = vec4(0.5 * (fuVertex.x * c - fuVertex.z * s), \r\n                               0.5 *  fuVertex.y, \r\n                               0.5 * (fuVertex.x * s + fuVertex.z * c),\r\n                               1.0);\r\n        }", "\r\n        #ifdef GL_ES\r\n            precision highp float;\r\n        #endif\r\n        varying vec3 modelpos;\r\n        varying vec3 normal;\r\n\r\n        void main()\r\n        {\r\n            gl_FragColor = vec4(normal*0.5 + 0.5, 1);\r\n        }");
    (this.RenderCanvas$RC$value).SetShader(shader);
    this._alphaParam = (this.RenderCanvas$RC$value).GetShaderParam(shader, "alpha");
    this._alpha = 0;
    (this.RenderCanvas$RC$value.ClearColor = $S01().Construct(0.1, 0.3, 0.2, 1));
  }; 

  function Tutorial_RenderAFrame () {
    (this.RenderCanvas$RC$value).Clear($T07().$Flags("Color", "Depth"));
    var speed = $T08().op_Addition(
      $T0A().get_Mouse().get_Velocity().MemberwiseClone(), 
      $T0A().get_Touch().GetVelocity($T0C().Touchpoint_0)
    );
    var flag = $T0A().get_Mouse().get_LeftButton() || 
    $T0A().get_Touch().GetTouchActive($T0C().Touchpoint_0);
    if (flag) {
      this._alpha = +this._alpha + (+speed.x * 0.0001);
    }
    (this.RenderCanvas$RC$value).SetShaderParam1f(this._alphaParam, this._alpha);
    (this.RenderCanvas$RC$value).Render(this._mesh);
    this.Present();
  }; 

  function Tutorial_Resize () {
    (this.RenderCanvas$RC$value).Viewport(
      0, 
      0, 
      this.get_Width(), 
      this.get_Height()
    );
    var aspectRatio = +((+(this.get_Width()) / +(this.get_Height())));
    var projection = $T0F().CreatePerspectiveFieldOfView(0.785398, aspectRatio, 1, 20000);
    (this.RenderCanvas$RC$value.Projection = projection.MemberwiseClone());
  }; 

  JSIL.MakeType({
      BaseType: $asm04.TypeRef("Fusee.Engine.Core.RenderCanvas"), 
      Name: "Fusee.Tutorial.Core.Tutorial", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      Tutorial__ctor
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Init", 
      JSIL.MethodSignature.Void, 
      Tutorial_Init
    );

    $.Method({Static:false, Public:true , Virtual:true }, "RenderAFrame", 
      JSIL.MethodSignature.Void, 
      Tutorial_RenderAFrame
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Resize", 
      JSIL.MethodSignature.Void, 
      Tutorial_Resize
    );

    $.Field({Static:false, Public:false}, "_mesh", $asm04.TypeRef("Fusee.Engine.Core.Mesh"));

    $.Constant({Static:true , Public:false}, "_vertexShader", $.String, "\r\n        attribute vec3 fuVertex;\r\n        attribute vec3 fuNormal;\r\n        uniform float alpha;\r\n        varying vec3 modelpos;\r\n        varying vec3 normal;\r\n        void main()\r\n        {\r\n            modelpos = fuVertex;\r\n            normal = fuNormal;\r\n            float s = sin(alpha);\r\n            float c = cos(alpha);\r\n            gl_Position = vec4(0.5 * (fuVertex.x * c - fuVertex.z * s), \r\n                               0.5 *  fuVertex.y, \r\n                               0.5 * (fuVertex.x * s + fuVertex.z * c),\r\n                               1.0);\r\n        }");

    $.Constant({Static:true , Public:false}, "_pixelShader", $.String, "\r\n        #ifdef GL_ES\r\n            precision highp float;\r\n        #endif\r\n        varying vec3 modelpos;\r\n        varying vec3 normal;\r\n\r\n        void main()\r\n        {\r\n            gl_FragColor = vec4(normal*0.5 + 0.5, 1);\r\n        }");

    $.Field({Static:false, Public:false}, "_alphaParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:false}, "_alpha", $.Single);


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm03.TypeRef("Fusee.Engine.Common.FuseeApplicationAttribute"));

})();
