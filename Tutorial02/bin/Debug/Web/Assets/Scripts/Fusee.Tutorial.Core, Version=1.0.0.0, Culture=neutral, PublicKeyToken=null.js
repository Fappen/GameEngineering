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
    return ($T06 = JSIL.Memoize($asm06.Fusee.Math.Core.float2)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm06.Fusee.Math.Core.float4)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm03.Fusee.Engine.Common.ClearFlags)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm04.Fusee.Engine.Core.MouseDevice)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm04.Fusee.Engine.Core.Input)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm0D.System.Boolean)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm04.Fusee.Engine.Core.KeyboardDevice)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm0D.System.Single)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm06.Fusee.Math.Core.float4x4)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float3"), [
        $asm0D.TypeRef("System.Single"), $asm0D.TypeRef("System.Single"), 
        $asm0D.TypeRef("System.Single")
      ]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float2"), [$asm0D.TypeRef("System.Single"), $asm0D.TypeRef("System.Single")]))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float4"), [
        $asm0D.TypeRef("System.Single"), $asm0D.TypeRef("System.Single"), 
        $asm0D.TypeRef("System.Single"), $asm0D.TypeRef("System.Single")
      ]))) ();
  };


  function Tutorial__ctor () {
    $T00().prototype._ctor.call(this);
  }; 

  function Tutorial_Init () {
    this.set_Width(750);
    this.set_Height(750);
    var mesh = new ($T01())();
    mesh.set_Vertices(JSIL.Array.New($T02(), [$S00().Construct(-0.15, -0.5, -0.05), $S00().Construct(0, -0.5, -0.05), $S00().Construct(0, 0, -0.05), $S00().Construct(0.3, 0, -0.05), $S00().Construct(0.3, 0.15, -0.05), $S00().Construct(0, 0.15, -0.05), $S00().Construct(0, 0.35, -0.05), $S00().Construct(0.3, 0.35, -0.05), $S00().Construct(0.3, 0.5, -0.05), $S00().Construct(0, 0.5, -0.05), $S00().Construct(-0.15, 0.5, -0.05), $S00().Construct(-0.15, -0.5, 0.05), $S00().Construct(0, -0.5, 0.05), $S00().Construct(0, 0, 0.05), $S00().Construct(0.3, 0, 0.05), $S00().Construct(0.3, 0.15, 0.05), $S00().Construct(0, 0.15, 0.05), $S00().Construct(0, 0.35, 0.05), $S00().Construct(0.3, 0.35, 0.05), $S00().Construct(0.3, 0.5, 0.05), $S00().Construct(0, 0.5, 0.05), $S00().Construct(-0.15, 0.5, 0.05)]));
    mesh.set_Triangles(JSIL.Array.New($T03(), [0, 1, 10, 1, 9, 10, 2, 3, 5, 3, 4, 5, 6, 7, 9, 7, 8, 9, 12, 11, 21, 12, 21, 20, 14, 13, 16, 14, 16, 15, 18, 17, 20, 18, 20, 19, 0, 12, 1, 0, 11, 12, 1, 13, 2, 1, 12, 13, 2, 14, 3, 2, 13, 14, 3, 15, 4, 3, 14, 15, 4, 16, 5, 4, 15, 16, 5, 17, 6, 5, 16, 17, 6, 18, 7, 6, 17, 18, 7, 19, 8, 7, 18, 19, 8, 21, 10, 8, 19, 21, 10, 11, 0, 10, 21, 11]));
    this._mesh = mesh;
    var shader = (this.RenderCanvas$RC$value).CreateShader("\r\n        attribute vec3 fuVertex;\r\n        uniform vec2 degrees;\r\n        varying vec3 modelpos;\r\n\r\n        varying vec4 position;\r\n\r\n        void main()\r\n        {\r\n            modelpos = fuVertex;\r\n            float s = sin(degrees.x);\r\n            float c = cos(degrees.x);\r\n            float s2 = sin(degrees.y);\r\n            float c2 = cos(degrees.y);\r\n           \r\n            mat4 xrotation;\r\n            mat4 yrotation; \r\n\r\n            xrotation = mat4 (1, 0, 0, 0,\r\n                              0, c, -s, 0,\r\n                              0, s, c, 0,\r\n                              0, 0, 0, 1);\r\n\r\n            yrotation = mat4 (c2, 0, s2, 0,\r\n                              0, 1, 0, 0,\r\n                              -s2, 0, c2, 0,\r\n                              0, 0, 0, 1);\r\n\r\n            gl_Position = xrotation * yrotation * vec4(fuVertex, 1.0);\r\n            position = gl_Position;\r\n        }", "\r\n            #ifdef GL_ES\r\n                precision highp float;\r\n            #endif\r\n            varying vec3 modelpos;\r\n            varying vec4 position;\r\n            uniform vec2 mousePosition;\r\n            float dist;\r\n\r\n            void main()\r\n            {\r\n                dist = distance(mousePosition, vec2(position.x, position.y));  \r\n\r\n                gl_FragColor = vec4(modelpos,1) - vec4(dist,dist,dist,1) + 1.0;\r\n            }");
    (this.RenderCanvas$RC$value).SetShader(shader);
    this._degreesParam = (this.RenderCanvas$RC$value).GetShaderParam(shader, "degrees");
    this._degrees = $S01().Construct(0, 0);
    this._mousePositionParam = (this.RenderCanvas$RC$value).GetShaderParam(shader, "mousePosition");
    this._mousePosition = $S01().Construct(0, 0);
    (this.RenderCanvas$RC$value.ClearColor = $S02().Construct(1, 1, 1, 1));
  }; 

  function Tutorial_RenderAFrame () {
    (this.RenderCanvas$RC$value).Clear($T08().$Flags("Color", "Depth"));
    (this.RenderCanvas$RC$value).Render(this._mesh);
    var speed = $T0A().get_Mouse().get_Velocity();
    var leftButton = $T0A().get_Mouse().get_LeftButton();
    if (leftButton) {
      this._degrees.x = +this._degrees.x + (+speed.y * 0.0001);
      this._degrees.y = +this._degrees.y + (+speed.x * 0.0001);
    }
    this._degrees.x = +this._degrees.x + (+$T0A().get_Keyboard().get_UpDownAxis() * 0.01);
    this._degrees.y = +this._degrees.y + (+$T0A().get_Keyboard().get_LeftRightAxis() * 0.01);
    this._mousePosition = $S01().Construct(((+((1 / +((+(this.get_Width()) / 2)))) * +$T0A().get_Mouse().get_Position().x) - 1), (((+((1 / +((+(this.get_Height()) / 2)))) * +$T0A().get_Mouse().get_Position().y) - 1) * -1));
    (this.RenderCanvas$RC$value).SetShaderParam2f(this._degreesParam, this._degrees.MemberwiseClone());
    (this.RenderCanvas$RC$value).SetShaderParam2f(this._mousePositionParam, this._mousePosition.MemberwiseClone());
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
    var projection = $T0E().CreatePerspectiveFieldOfView(0.7853982, aspectRatio, 1, 20000);
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

    $.Field({Static:false, Public:false}, "_degreesParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:false}, "_degrees", $asm06.TypeRef("Fusee.Math.Core.float2"));

    $.Field({Static:false, Public:false}, "_mousePositionParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:false}, "_mousePosition", $asm06.TypeRef("Fusee.Math.Core.float2"));

    $.Field({Static:false, Public:false}, "_mesh", $asm04.TypeRef("Fusee.Engine.Core.Mesh"));

    $.Constant({Static:true , Public:false}, "_vertexShader", $.String, "\r\n        attribute vec3 fuVertex;\r\n        uniform vec2 degrees;\r\n        varying vec3 modelpos;\r\n\r\n        varying vec4 position;\r\n\r\n        void main()\r\n        {\r\n            modelpos = fuVertex;\r\n            float s = sin(degrees.x);\r\n            float c = cos(degrees.x);\r\n            float s2 = sin(degrees.y);\r\n            float c2 = cos(degrees.y);\r\n           \r\n            mat4 xrotation;\r\n            mat4 yrotation; \r\n\r\n            xrotation = mat4 (1, 0, 0, 0,\r\n                              0, c, -s, 0,\r\n                              0, s, c, 0,\r\n                              0, 0, 0, 1);\r\n\r\n            yrotation = mat4 (c2, 0, s2, 0,\r\n                              0, 1, 0, 0,\r\n                              -s2, 0, c2, 0,\r\n                              0, 0, 0, 1);\r\n\r\n            gl_Position = xrotation * yrotation * vec4(fuVertex, 1.0);\r\n            position = gl_Position;\r\n        }");

    $.Constant({Static:true , Public:false}, "_pixelShader", $.String, "\r\n            #ifdef GL_ES\r\n                precision highp float;\r\n            #endif\r\n            varying vec3 modelpos;\r\n            varying vec4 position;\r\n            uniform vec2 mousePosition;\r\n            float dist;\r\n\r\n            void main()\r\n            {\r\n                dist = distance(mousePosition, vec2(position.x, position.y));  \r\n\r\n                gl_FragColor = vec4(modelpos,1) - vec4(dist,dist,dist,1) + 1.0;\r\n            }");


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm03.TypeRef("Fusee.Engine.Common.FuseeApplicationAttribute"));

})();

