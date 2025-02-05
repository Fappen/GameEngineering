/* Generated by JSIL v0.8.2 build 17617. See http://jsil.org/ for more information. */ 
'use strict';
var $asm09 = JSIL.DeclareAssembly("Fusee.Tutorial.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");

JSIL.DeclareNamespace("Fusee");
JSIL.DeclareNamespace("Fusee.Tutorial");
JSIL.DeclareNamespace("Fusee.Tutorial.Core");
/* class Fusee.Tutorial.Core.Renderer */ 

(function Renderer$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderContext)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm14.System.Collections.Generic.Dictionary$b2.Of($asm07.Fusee.Serialization.MeshComponent, $asm04.Fusee.Engine.Core.Mesh))) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm0B.Fusee.Xene.CollapsingStateStack$b1.Of($asm06.Fusee.Math.Core.float4x4))) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm0B.Fusee.Xene.SceneVisitor)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm14.System.String)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm01.Fusee.Base.Core.AssetStorage)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm04.Fusee.Engine.Core.ShaderProgram)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm06.Fusee.Math.Core.float4x4)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm07.Fusee.Serialization.MeshComponent)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm04.Fusee.Engine.Core.Mesh)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm14.System.Boolean)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm07.Fusee.Serialization.MaterialComponent)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm07.Fusee.Serialization.TransformComponent)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm0B.Fusee.Xene.ContainerExtensions)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm14.TypeRef("System.Collections.Generic.Dictionary`2", [$asm07.TypeRef("Fusee.Serialization.MeshComponent"), $asm04.TypeRef("Fusee.Engine.Core.Mesh")]), null))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [$asm06.TypeRef("Fusee.Math.Core.float4x4"), $asm06.TypeRef("Fusee.Math.Core.float4x4")]))) ();
  };


  function Renderer__ctor (rc) {
    this._meshes = $S00().Construct();
    this._model = new ($T02())(4);
    $T03().prototype._ctor.call(this);
    this.RC = rc;
    var vs = $T05().Get$b1($T04())("VertexShader.vert");
    var ps = $T05().Get$b1($T04())("PixelShader.frag");
    var shaderProgram = (this.RC).CreateShader(vs, ps);
    (this.RC).SetShader(shaderProgram);
    this.AlbedoParam = (this.RC).GetShaderParam(shaderProgram, "albedo");
    this.ShininessParam = (this.RC).GetShaderParam(shaderProgram, "shininess");
    this.ShininessFactorParam = (this.RC).GetShaderParam(shaderProgram, "shininessFactor");
  }; 

  function Renderer_InitState () {
    (this._model).Clear();
    (this._model).set_Tos($T07().Identity.MemberwiseClone());
  }; 

  function Renderer_LookupMesh (mc) {
    var mesh = new JSIL.BoxedVariable(null);
    var flag = !(this._meshes).TryGetValue(mc, /* ref */ mesh);
    if (flag) {
      var expr_1C = new ($T09())();
      expr_1C.set_Vertices(mc.Vertices);
      expr_1C.set_Normals(mc.Normals);
      expr_1C.set_Triangles(mc.Triangles);
      mesh.set(expr_1C);
      (this._meshes).set_Item(mc, mesh.get());
    }
    return mesh.get();
  }; 

  function Renderer_OnMaterial (material) {
    (this.RC).SetShaderParam3f(this.AlbedoParam, material.Diffuse.Color.MemberwiseClone());
    (this.RC).SetShaderParam1f(this.ShininessParam, material.Specular.Shininess);
  }; 

  function Renderer_OnMesh (mesh) {
    (this.RC).Render(this.LookupMesh(mesh));
  }; 

  function Renderer_OnTransform (xform) {
    this._model.Tos = $S01().CallStatic($T07(), "op_Multiply", null, this._model.Tos.MemberwiseClone(), $T0D().Matrix(xform).MemberwiseClone()).MemberwiseClone();
    (this.RC.ModelView = $S01().CallStatic($T07(), "op_Multiply", null, this.View.MemberwiseClone(), (this._model).get_Tos().MemberwiseClone()).MemberwiseClone());
  }; 

  function Renderer_PopState () {
    (this._model).Pop();
    (this.RC.ModelView = $S01().CallStatic($T07(), "op_Multiply", null, this.View.MemberwiseClone(), (this._model).get_Tos().MemberwiseClone()).MemberwiseClone());
  }; 

  function Renderer_PushState () {
    (this._model).Push();
  }; 

  JSIL.MakeType({
      BaseType: $asm0B.TypeRef("Fusee.Xene.SceneVisitor"), 
      Name: "Fusee.Tutorial.Core.Renderer", 
      IsPublic: false, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 1, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Action($asm04.TypeRef("Fusee.Engine.Core.RenderContext")), 
      Renderer__ctor
    );

    $.Method({Static:false, Public:false, Virtual:true }, "InitState", 
      JSIL.MethodSignature.Void, 
      Renderer_InitState
    );

    $.Method({Static:false, Public:false}, "LookupMesh", 
      new JSIL.MethodSignature($asm04.TypeRef("Fusee.Engine.Core.Mesh"), [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]), 
      Renderer_LookupMesh
    );

    $.Method({Static:false, Public:false}, "OnMaterial", 
      JSIL.MethodSignature.Action($asm07.TypeRef("Fusee.Serialization.MaterialComponent")), 
      Renderer_OnMaterial
    )
      .Attribute($asm0B.TypeRef("Fusee.Xene.VisitMethodAttribute"));

    $.Method({Static:false, Public:false}, "OnMesh", 
      JSIL.MethodSignature.Action($asm07.TypeRef("Fusee.Serialization.MeshComponent")), 
      Renderer_OnMesh
    )
      .Attribute($asm0B.TypeRef("Fusee.Xene.VisitMethodAttribute"));

    $.Method({Static:false, Public:false}, "OnTransform", 
      JSIL.MethodSignature.Action($asm07.TypeRef("Fusee.Serialization.TransformComponent")), 
      Renderer_OnTransform
    )
      .Attribute($asm0B.TypeRef("Fusee.Xene.VisitMethodAttribute"));

    $.Method({Static:false, Public:false, Virtual:true }, "PopState", 
      JSIL.MethodSignature.Void, 
      Renderer_PopState
    );

    $.Method({Static:false, Public:false, Virtual:true }, "PushState", 
      JSIL.MethodSignature.Void, 
      Renderer_PushState
    );

    $.Field({Static:false, Public:true }, "RC", $asm04.TypeRef("Fusee.Engine.Core.RenderContext"));

    $.Field({Static:false, Public:true }, "AlbedoParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:true }, "ShininessParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:true }, "ShininessFactorParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:true }, "View", $asm06.TypeRef("Fusee.Math.Core.float4x4"));

    $.Field({Static:false, Public:false}, "_meshes", $asm14.TypeRef("System.Collections.Generic.Dictionary`2", [$asm07.TypeRef("Fusee.Serialization.MeshComponent"), $asm04.TypeRef("Fusee.Engine.Core.Mesh")]));

    $.Field({Static:false, Public:false}, "_model", $asm0B.TypeRef("Fusee.Xene.CollapsingStateStack`1", [$asm06.TypeRef("Fusee.Math.Core.float4x4")]));


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class Fusee.Tutorial.Core.SceneOb */ 

(function SceneOb$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm06.Fusee.Math.Core.float3)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float3"), [
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single"), 
        $asm14.TypeRef("System.Single")
      ]))) ();
  };


  function SceneOb__ctor () {
    this.Albedo = $S00().Construct(0.8, 0.8, 0.8);
    this.Pos = $T00().Zero.MemberwiseClone();
    this.Rot = $T00().Zero.MemberwiseClone();
    this.Pivot = $T00().Zero.MemberwiseClone();
    this.Scale = $T00().One.MemberwiseClone();
    this.ModelScale = $T00().One.MemberwiseClone();
  }; 

  JSIL.MakeType({
      BaseType: $asm14.TypeRef("System.Object"), 
      Name: "Fusee.Tutorial.Core.SceneOb", 
      IsPublic: true, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      SceneOb__ctor
    );

    $.Field({Static:false, Public:true }, "Mesh", $asm04.TypeRef("Fusee.Engine.Core.Mesh"));

    $.Field({Static:false, Public:true }, "Albedo", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Pos", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Rot", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Pivot", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Scale", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "ModelScale", $asm06.TypeRef("Fusee.Math.Core.float3"));

    $.Field({Static:false, Public:true }, "Children", $asm14.TypeRef("System.Collections.Generic.List`1", [$.Type]));


    return function (newThisType) { $thisType = newThisType; }; 
  });

})();

/* class Fusee.Tutorial.Core.Tutorial */ 

(function Tutorial$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderCanvas)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm14.System.Single)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm14.System.Predicate$b1.Of($asm07.Fusee.Serialization.SceneNodeContainer))) ();
  };
  var $T03 = function () {
    return ($T03 = JSIL.Memoize($asm07.Fusee.Serialization.SceneContainer)) ();
  };
  var $T04 = function () {
    return ($T04 = JSIL.Memoize($asm01.Fusee.Base.Core.AssetStorage)) ();
  };
  var $T05 = function () {
    return ($T05 = JSIL.Memoize($asm0B.Fusee.Xene.ContainerExtensions)) ();
  };
  var $T06 = function () {
    return ($T06 = JSIL.Memoize($asm07.Fusee.Serialization.SceneNodeContainer)) ();
  };
  var $T07 = function () {
    return ($T07 = JSIL.Memoize($asm11.System.Linq.Enumerable)) ();
  };
  var $T08 = function () {
    return ($T08 = JSIL.Memoize($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc)) ();
  };
  var $T09 = function () {
    return ($T09 = JSIL.Memoize($asm0B.Fusee.Xene.SceneFinderExtensions)) ();
  };
  var $T0A = function () {
    return ($T0A = JSIL.Memoize($asm06.Fusee.Math.Core.float3)) ();
  };
  var $T0B = function () {
    return ($T0B = JSIL.Memoize($asm09.Fusee.Tutorial.Core.Renderer)) ();
  };
  var $T0C = function () {
    return ($T0C = JSIL.Memoize($asm04.Fusee.Engine.Core.RenderContext)) ();
  };
  var $T0D = function () {
    return ($T0D = JSIL.Memoize($asm06.Fusee.Math.Core.float4)) ();
  };
  var $T0E = function () {
    return ($T0E = JSIL.Memoize($asm14.System.String)) ();
  };
  var $T0F = function () {
    return ($T0F = JSIL.Memoize($asm14.System.Predicate$b1.Of($asm07.Fusee.Serialization.MeshComponent))) ();
  };
  var $T10 = function () {
    return ($T10 = JSIL.Memoize($asm14.System.Collections.Generic.IEnumerable$b1.Of($asm07.Fusee.Serialization.SceneNodeContainer))) ();
  };
  var $T11 = function () {
    return ($T11 = JSIL.Memoize($asm07.Fusee.Serialization.MeshComponent)) ();
  };
  var $T12 = function () {
    return ($T12 = JSIL.Memoize($asm04.Fusee.Engine.Core.Mesh)) ();
  };
  var $T13 = function () {
    return ($T13 = JSIL.Memoize($asm06.Fusee.Math.Core.float4x4)) ();
  };
  var $T14 = function () {
    return ($T14 = JSIL.Memoize($asm03.Fusee.Engine.Common.ClearFlags)) ();
  };
  var $T15 = function () {
    return ($T15 = JSIL.Memoize($asm06.Fusee.Math.Core.float2)) ();
  };
  var $T16 = function () {
    return ($T16 = JSIL.Memoize($asm04.Fusee.Engine.Core.MouseDevice)) ();
  };
  var $T17 = function () {
    return ($T17 = JSIL.Memoize($asm04.Fusee.Engine.Core.Input)) ();
  };
  var $T18 = function () {
    return ($T18 = JSIL.Memoize($asm04.Fusee.Engine.Core.TouchDevice)) ();
  };
  var $T19 = function () {
    return ($T19 = JSIL.Memoize($asm03.Fusee.Engine.Common.TouchPoints)) ();
  };
  var $T1A = function () {
    return ($T1A = JSIL.Memoize($asm14.System.Boolean)) ();
  };
  var $T1B = function () {
    return ($T1B = JSIL.Memoize($asm04.Fusee.Engine.Core.KeyboardDevice)) ();
  };
  var $T1C = function () {
    return ($T1C = JSIL.Memoize($asm03.Fusee.Engine.Common.KeyCodes)) ();
  };
  var $T1D = function () {
    return ($T1D = JSIL.Memoize($asm07.Fusee.Serialization.TransformComponent)) ();
  };
  var $T1E = function () {
    return ($T1E = JSIL.Memoize($asm14.System.Math)) ();
  };
  var $T1F = function () {
    return ($T1F = JSIL.Memoize($asm14.System.Double)) ();
  };
  var $T20 = function () {
    return ($T20 = JSIL.Memoize($asm0B.Fusee.Xene.SceneVisitor)) ();
  };
  var $T21 = function () {
    return ($T21 = JSIL.Memoize($asm09.Fusee.Tutorial.Core.SceneOb)) ();
  };
  var $T22 = function () {
    return ($T22 = JSIL.Memoize($asm14.System.Int32)) ();
  };
  var $S00 = function () {
    return ($S00 = JSIL.Memoize(new JSIL.MethodSignature("!!0", [$asm0D.TypeRef("System.Collections.Generic.IEnumerable`1", ["!!0"])], ["TSource"]))) ();
  };
  var $S01 = function () {
    return ($S01 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]))) ();
  };
  var $S02 = function () {
    return ($S02 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), [$asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")])]))) ();
  };
  var $S03 = function () {
    return ($S03 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]))) ();
  };
  var $S04 = function () {
    return ($S04 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]))) ();
  };
  var $S05 = function () {
    return ($S05 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]))) ();
  };
  var $S06 = function () {
    return ($S06 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]))) ();
  };
  var $S07 = function () {
    return ($S07 = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]))) ();
  };
  var $S08 = function () {
    return ($S08 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float3"), [
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single"), 
        $asm14.TypeRef("System.Single")
      ]))) ();
  };
  var $S09 = function () {
    return ($S09 = JSIL.Memoize(new JSIL.ConstructorSignature($asm06.TypeRef("Fusee.Math.Core.float4"), [
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single"), 
        $asm14.TypeRef("System.Single"), $asm14.TypeRef("System.Single")
      ]))) ();
  };
  var $S0A = function () {
    return ($S0A = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Boolean"), [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]))) ();
  };
  var $S0B = function () {
    return ($S0B = JSIL.Memoize(new JSIL.MethodSignature("!!0", [$asm0D.TypeRef("System.Collections.Generic.IEnumerable`1", ["!!0"])], ["TSource"]))) ();
  };
  var $S0C = function () {
    return ($S0C = JSIL.Memoize(new JSIL.MethodSignature($asm14.TypeRef("System.Collections.Generic.IEnumerable`1", ["!!0"]), [$asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), $asm14.TypeRef("System.Predicate`1", ["!!0"])], ["TComponent"]))) ();
  };
  var $S0D = function () {
    return ($S0D = JSIL.Memoize(new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [$asm06.TypeRef("Fusee.Math.Core.float4x4"), $asm06.TypeRef("Fusee.Math.Core.float4x4")]))) ();
  };
  var $S0E = function () {
    return ($S0E = JSIL.Memoize(JSIL.MethodSignature.Action($asm14.TypeRef("System.Collections.Generic.IEnumerable`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")])))) ();
  };
  var $S0F = function () {
    return ($S0F = JSIL.Memoize(new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [$asm06.TypeRef("Fusee.Math.Core.float3")]))) ();
  };


  function Tutorial__ctor () {
    this._alpha = 0.001;
    this.cameraTilt = -0.5;
    $T00().prototype._ctor.call(this);
  }; 

  function Tutorial_Clamp (value, min, max) {
    return (
      (+value < +min)
         ? min
         : (
          (+value > +max)
             ? max
             : value)
    )
    ;
  }; 

  function Tutorial_Init () {
    var arg_63_1 = null, arg_A3_1 = null, arg_E3_1 = null, arg_123_1 = null, arg_163_1 = null, arg_1B3_1 = null;
    this.shine = 1;
    this._wuggy = $T04().Get$b1($T03())("wuggy.fus");
    this._wuggyTrans = $T05().GetTransform($S00().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], this._wuggy.Children), 0);
    if ((arg_63_1 = $T08().$l$g9__18_0) === null) {
      arg_63_1 = $T08().$l$g9__18_0 = $T02().New($T08().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lInit$gb__18_0", $S01(), false, false));
    }
    this._wheelBigL = $T05().GetTransform($S00().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], $S02().CallStatic($T09(), "FindNodes", null, this._wuggy.Children, arg_63_1)), 0);
    if ((arg_A3_1 = $T08().$l$g9__18_1) === null) {
      arg_A3_1 = $T08().$l$g9__18_1 = $T02().New($T08().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lInit$gb__18_1", $S03(), false, false));
    }
    this._wheelBigR = $T05().GetTransform($S00().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], $S02().CallStatic($T09(), "FindNodes", null, this._wuggy.Children, arg_A3_1)), 0);
    if ((arg_E3_1 = $T08().$l$g9__18_2) === null) {
      arg_E3_1 = $T08().$l$g9__18_2 = $T02().New($T08().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lInit$gb__18_2", $S04(), false, false));
    }
    this._wheelSmallL = $T05().GetTransform($S00().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], $S02().CallStatic($T09(), "FindNodes", null, this._wuggy.Children, arg_E3_1)), 0);
    if ((arg_123_1 = $T08().$l$g9__18_3) === null) {
      arg_123_1 = $T08().$l$g9__18_3 = $T02().New($T08().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lInit$gb__18_3", $S05(), false, false));
    }
    this._wheelSmallR = $T05().GetTransform($S00().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], $S02().CallStatic($T09(), "FindNodes", null, this._wuggy.Children, arg_123_1)), 0);
    if ((arg_163_1 = $T08().$l$g9__18_4) === null) {
      arg_163_1 = $T08().$l$g9__18_4 = $T02().New($T08().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lInit$gb__18_4", $S06(), false, false));
    }
    this._wuggyHead = $T05().GetTransform($S00().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], $S02().CallStatic($T09(), "FindNodes", null, this._wuggy.Children, arg_163_1)), 0);
    this._floor = $T04().Get$b1($T03())("Cube.fus");
    if ((arg_1B3_1 = $T08().$l$g9__18_5) === null) {
      arg_1B3_1 = $T08().$l$g9__18_5 = $T02().New($T08().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lInit$gb__18_5", $S07(), false, false));
    }
    this._floorTrans = $T05().GetTransform($S00().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.SceneNodeContainer], $S02().CallStatic($T09(), "FindNodes", null, this._floor.Children, arg_1B3_1)), 0);
    this._floorTrans.Scale = $S08().Construct(1, 1, 1);
    this._floorTrans.Translation = $S08().Construct(0, 0, 0);
    this._renderer = new ($T0B())(this.RenderCanvas$RC$value);
    (this.RenderCanvas$RC$value.ClearColor = $S09().Construct(1, 1, 1, 1));
  }; 

  function Tutorial_LoadMesh (assetName) {
    var arg_2D_1 = null;
    var sceneContainer = $T04().Get$b1($T03())(assetName);
    var arg_2D_0 = sceneContainer.Children;
    if ((arg_2D_1 = $T08().$l$g9__17_0) === null) {
      arg_2D_1 = $T08().$l$g9__17_0 = $T0F().New($T08().$l$g9, null, new JSIL.MethodPointerInfo($asm09.Fusee.Tutorial.Core.Tutorial_$l$gc, "$lLoadMesh$gb__17_0", $S0A(), false, false));
    }
    var meshComponent = $S0B().CallStatic($T07(), "First$b1", [$asm07.Fusee.Serialization.MeshComponent], $S0C().CallStatic($T09(), "FindComponents$b1", [$asm07.Fusee.Serialization.MeshComponent], arg_2D_0, arg_2D_1));
    var expr_3D = new ($T12())();
    expr_3D.set_Vertices(meshComponent.Vertices);
    expr_3D.set_Normals(meshComponent.Normals);
    expr_3D.set_Triangles(meshComponent.Triangles);
    return expr_3D;
  }; 

  function Tutorial_ModelXForm (pos, rot, pivot) {
    return $S0D().CallStatic($T13(), "op_Multiply", null, 
      $S0D().CallStatic($T13(), "op_Multiply", null, 
        $S0D().CallStatic($T13(), "op_Multiply", null, 
          $S0D().CallStatic($T13(), "op_Multiply", null, 
            $T13().CreateTranslation($T0A().op_Addition(pos.MemberwiseClone(), pivot).MemberwiseClone()).MemberwiseClone(), 
            $T13().CreateRotationY(rot.y).MemberwiseClone()
          ).MemberwiseClone(), 
          $T13().CreateRotationX(rot.x).MemberwiseClone()
        ).MemberwiseClone(), 
        $T13().CreateRotationZ(rot.z).MemberwiseClone()
      ).MemberwiseClone(), 
      $T13().CreateTranslation($T0A().op_UnaryNegation(pivot.MemberwiseClone()).MemberwiseClone()).MemberwiseClone()
    );
  }; 

  function Tutorial_RenderAFrame () {
    (this.RenderCanvas$RC$value).Clear($T14().$Flags("Color", "Depth"));
    var float = $T15().op_Addition(
      $T17().get_Mouse().get_Velocity().MemberwiseClone(), 
      $T17().get_Touch().GetVelocity($T19().Touchpoint_0)
    );
    var flag = $T17().get_Mouse().get_LeftButton() || 
    $T17().get_Touch().GetTouchActive($T19().Touchpoint_0);
    if (flag) {
      this._alpha = +this._alpha - (+float.x * 0.0001);
      this._beta = +this._beta - (+float.y * 0.0001);
    }
    var num = +((+(this.get_Width()) / +(this.get_Height())));
    this._wheelBigL.Rotation = $T0A().op_Addition(this._wheelBigL.Rotation.MemberwiseClone(), $S08().Construct((-0.05 * +$T17().get_Keyboard().get_WSAxis()), 0, 0));
    this._wheelBigR.Rotation = $T0A().op_Addition(this._wheelBigR.Rotation.MemberwiseClone(), $S08().Construct((-0.05 * +$T17().get_Keyboard().get_WSAxis()), 0, 0));
    this._wheelSmallL.Rotation = $T0A().op_Addition(this._wheelSmallL.Rotation.MemberwiseClone(), $S08().Construct((-0.1 * +$T17().get_Keyboard().get_WSAxis()), (-0.05 * +$T17().get_Keyboard().get_ADAxis()), 0));
    if (+this._wheelSmallL.Rotation.y > 0.3) {
      this._wheelSmallL.Rotation.y = 0.3;
    } else {
      if (+this._wheelSmallL.Rotation.y < -0.3) {
        this._wheelSmallL.Rotation.y = -0.3;
      }
    }
    this._wheelSmallR.Rotation = $T0A().op_Addition(this._wheelSmallR.Rotation.MemberwiseClone(), $S08().Construct((-0.1 * +$T17().get_Keyboard().get_WSAxis()), (-0.05 * +$T17().get_Keyboard().get_ADAxis()), 0));
    if (+this._wheelSmallR.Rotation.y > 0.3) {
      this._wheelSmallR.Rotation.y = 0.3;
    } else {
      if (+this._wheelSmallR.Rotation.y < -0.3) {
        this._wheelSmallR.Rotation.y = -0.3;
      }
    }
    var flag6 = !$T17().get_Keyboard().GetKey($T1C().A) && 
    !$T17().get_Keyboard().GetKey($T1C().D);
    if (flag6) {
      if (+this._wheelSmallR.Rotation.y > 0) {
        var expr_2A5_cp_0_cp_0 = this._wheelSmallR;
        expr_2A5_cp_0_cp_0.Rotation.y = +expr_2A5_cp_0_cp_0.Rotation.y - 0.025;
      } else {
        if (+this._wheelSmallR.Rotation.y < 0) {
          var expr_2DF_cp_0_cp_0 = this._wheelSmallR;
          expr_2DF_cp_0_cp_0.Rotation.y = +expr_2DF_cp_0_cp_0.Rotation.y + 0.025;
        }
      }
      if (+this._wheelSmallL.Rotation.y > 0) {
        var expr_317_cp_0_cp_0 = this._wheelSmallL;
        expr_317_cp_0_cp_0.Rotation.y = +expr_317_cp_0_cp_0.Rotation.y - 0.025;
      } else {
        if (+this._wheelSmallL.Rotation.y < 0) {
          var expr_351_cp_0_cp_0 = this._wheelSmallL;
          expr_351_cp_0_cp_0.Rotation.y = +expr_351_cp_0_cp_0.Rotation.y + 0.025;
        }
      }
    }
    var key = $T17().get_Keyboard().GetKey($T1C().W);
    if (key) {
      this._wuggyTrans.Rotation = $T0A().op_Addition(this._wuggyTrans.Rotation.MemberwiseClone(), $S08().Construct(0, (+this._wheelSmallL.Rotation.y * -0.1), 0));
    } else {
      var key2 = $T17().get_Keyboard().GetKey($T1C().S);
      if (key2) {
        this._wuggyTrans.Rotation = $T0A().op_Addition(this._wuggyTrans.Rotation.MemberwiseClone(), $S08().Construct(0, (+this._wheelSmallL.Rotation.y * 0.1), 0));
      }
    }
    this._wuggyTrans.Translation = $T0A().op_Addition(this._wuggyTrans.Translation.MemberwiseClone(), $S08().Construct(((-0.05 * +$T17().get_Keyboard().get_WSAxis()) * Math.fround(Math.sin(this._wuggyTrans.Rotation.y))), 0, ((-0.05 * +$T17().get_Keyboard().get_WSAxis()) * Math.fround(Math.cos(this._wuggyTrans.Rotation.y)))));
    var key3 = $T17().get_Keyboard().GetKey($T1C().Q);
    if (key3) {
      this.cameraTilt = +this.cameraTilt + 0.05;
      this.cameraTilt = +$thisType.Clamp(this.cameraTilt, -1, 1);
    }
    var key4 = $T17().get_Keyboard().GetKey($T1C().E);
    if (key4) {
      this.cameraTilt = +this.cameraTilt - 0.05;
      this.cameraTilt = +$thisType.Clamp(this.cameraTilt, -1, 1);
    }
    this._wuggyHead.Rotation.y = (+this._wuggyTrans.Rotation.y * -1) + Math.fround(Math.atan2(this._wuggyTrans.Translation.x, +this._wuggyTrans.Translation.z + 8));
    this._wuggyHead.Rotation.x = -this.cameraTilt;
    this.cameraPan = +this.cameraPan + (+$T17().get_Keyboard().get_LeftRightAxis() * 0.05);
    this.cameraZoom = +this.cameraZoom + (+$T17().get_Keyboard().get_UpDownAxis() * 0.05);
    var view = $S0D().CallStatic($T13(), "op_Multiply", null, 
      $S0D().CallStatic($T13(), "op_Multiply", null, 
        $S0D().CallStatic($T13(), "op_Multiply", null, 
          $T13().CreateTranslation(0, 0, 10).MemberwiseClone(), 
          $T13().CreateRotationX(this.cameraTilt).MemberwiseClone()
        ).MemberwiseClone(), 
        $T13().CreateRotationY(this.cameraPan).MemberwiseClone()
      ).MemberwiseClone(), 
      $T13().CreateTranslation(0, -0.5, this.cameraZoom).MemberwiseClone()
    ).MemberwiseClone();
    this._renderer.View = view.MemberwiseClone();
    $S0E().CallVirtual("Traverse", null, this._renderer, this._wuggy.Children);
    var key5 = $T17().get_Keyboard().GetKey($T1C().R);
    if (key5) {
      this.shine = +this.shine + 0.05;
      this.shine = +$thisType.Clamp(this.shine, 0, 2);
    }
    var key6 = $T17().get_Keyboard().GetKey($T1C().F);
    if (key6) {
      this.shine = +this.shine - 0.05;
      this.shine = +$thisType.Clamp(this.shine, 0, 2);
    }
    (this._renderer.RC).SetShaderParam1f(this._renderer.ShininessFactorParam, this.shine);
    this.Present();
  }; 

  function Tutorial_RenderSceneOb (so, modelView) {
    var $temp00;
    modelView = $S0D().CallStatic($T13(), "op_Multiply", null, 
      $S0D().CallStatic($T13(), "op_Multiply", null, modelView.MemberwiseClone(), $thisType.ModelXForm(so.Pos.MemberwiseClone(), so.Rot.MemberwiseClone(), so.Pivot.MemberwiseClone()).MemberwiseClone()).MemberwiseClone(), 
      $S0F().CallStatic($T13(), "CreateScale", null, so.Scale.MemberwiseClone()).MemberwiseClone()
    ).MemberwiseClone();
    var flag = so.Mesh !== null;
    if (flag) {
      (this.RenderCanvas$RC$value.ModelView = $S0D().CallStatic($T13(), "op_Multiply", null, modelView.MemberwiseClone(), $S0F().CallStatic($T13(), "CreateScale", null, so.ModelScale.MemberwiseClone()).MemberwiseClone()).MemberwiseClone());
      (this.RenderCanvas$RC$value).SetShaderParam3f(this._albedoParam, so.Albedo.MemberwiseClone());
      (this.RenderCanvas$RC$value).Render(so.Mesh);
    }
    var flag2 = so.Children !== null;
    if (flag2) {

      for (var a$0 = so.Children._items, i$0 = 0, l$0 = (so.Children._size | 0); i$0 < l$0; ($temp00 = i$0, 
          i$0 = ((i$0 + 1) | 0), 
          $temp00)) {
        var current = a$0[i$0];
        this.RenderSceneOb(current, modelView.MemberwiseClone());
      }
    }
  }; 

  function Tutorial_Resize () {
    (this.RenderCanvas$RC$value).Viewport(
      0, 
      0, 
      this.get_Width(), 
      this.get_Height()
    );
    var aspect = +((+(this.get_Width()) / +(this.get_Height())));
    var projection = $T13().CreatePerspectiveFieldOfView(0.785398, aspect, 1, 20000);
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

    $.Method({Static:true , Public:true }, "Clamp", 
      new JSIL.MethodSignature($.Single, [
          $.Single, $.Single, 
          $.Single
        ]), 
      Tutorial_Clamp
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Init", 
      JSIL.MethodSignature.Void, 
      Tutorial_Init
    );

    $.Method({Static:true , Public:true }, "LoadMesh", 
      new JSIL.MethodSignature($asm04.TypeRef("Fusee.Engine.Core.Mesh"), [$.String]), 
      Tutorial_LoadMesh
    );

    $.Method({Static:true , Public:false}, "ModelXForm", 
      new JSIL.MethodSignature($asm06.TypeRef("Fusee.Math.Core.float4x4"), [
          $asm06.TypeRef("Fusee.Math.Core.float3"), $asm06.TypeRef("Fusee.Math.Core.float3"), 
          $asm06.TypeRef("Fusee.Math.Core.float3")
        ]), 
      Tutorial_ModelXForm
    );

    $.Method({Static:false, Public:true , Virtual:true }, "RenderAFrame", 
      JSIL.MethodSignature.Void, 
      Tutorial_RenderAFrame
    );

    $.Method({Static:false, Public:false}, "RenderSceneOb", 
      new JSIL.MethodSignature(null, [$asm09.TypeRef("Fusee.Tutorial.Core.SceneOb"), $asm06.TypeRef("Fusee.Math.Core.float4x4")]), 
      Tutorial_RenderSceneOb
    );

    $.Method({Static:false, Public:true , Virtual:true }, "Resize", 
      JSIL.MethodSignature.Void, 
      Tutorial_Resize
    );

    $.Field({Static:false, Public:false}, "_albedoParam", $asm03.TypeRef("Fusee.Engine.Common.IShaderParam"));

    $.Field({Static:false, Public:false}, "_alpha", $.Single);

    $.Field({Static:false, Public:false}, "_beta", $.Single);

    $.Field({Static:false, Public:false}, "shine", $.Single);

    $.Field({Static:false, Public:false}, "cameraPan", $.Single);

    $.Field({Static:false, Public:false}, "cameraZoom", $.Single);

    $.Field({Static:false, Public:false}, "cameraTilt", $.Single);

    $.Field({Static:false, Public:false}, "_wuggy", $asm07.TypeRef("Fusee.Serialization.SceneContainer"));

    $.Field({Static:false, Public:false}, "_floor", $asm07.TypeRef("Fusee.Serialization.SceneContainer"));

    $.Field({Static:false, Public:false}, "_wuggyTrans", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_wheelBigL", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_wheelBigR", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_wheelSmallL", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_wheelSmallR", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_wuggyHead", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_floorTrans", $asm07.TypeRef("Fusee.Serialization.TransformComponent"));

    $.Field({Static:false, Public:false}, "_renderer", $asm09.TypeRef("Fusee.Tutorial.Core.Renderer"));


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm03.TypeRef("Fusee.Engine.Common.FuseeApplicationAttribute"));

})();

/* class Fusee.Tutorial.Core.Tutorial+<>c */ 

(function $l$gc$Members () {
  var $, $thisType;
  var $T00 = function () {
    return ($T00 = JSIL.Memoize($asm07.Fusee.Serialization.SceneNodeContainer)) ();
  };
  var $T01 = function () {
    return ($T01 = JSIL.Memoize($asm14.System.String)) ();
  };
  var $T02 = function () {
    return ($T02 = JSIL.Memoize($asm07.Fusee.Serialization.MeshComponent)) ();
  };


  function $l$gc__ctor () {
  }; 

  function $l$gc_$lInit$gb__18_0 (n) {
    return n.Name == "WheelBigL";
  }; 

  function $l$gc_$lInit$gb__18_1 (n) {
    return n.Name == "WheelBigR";
  }; 

  function $l$gc_$lInit$gb__18_2 (n) {
    return n.Name == "WheelSmallL";
  }; 

  function $l$gc_$lInit$gb__18_3 (n) {
    return n.Name == "WheelSmallR";
  }; 

  function $l$gc_$lInit$gb__18_4 (n) {
    return n.Name == "Eyes_Pitch";
  }; 

  function $l$gc_$lInit$gb__18_5 (n) {
    return n.Name == "Cube";
  }; 

  function $l$gc_$lLoadMesh$gb__17_0 (c) {
    return true;
  }; 

  JSIL.MakeType({
      BaseType: $asm14.TypeRef("System.Object"), 
      Name: "Fusee.Tutorial.Core.Tutorial+<>c", 
      IsPublic: false, 
      IsReferenceType: true, 
      MaximumConstructorArguments: 0, 
    }, function ($ib) {
    $ = $ib;

    $.Method({Static:false, Public:true }, ".ctor", 
      JSIL.MethodSignature.Void, 
      $l$gc__ctor
    );

    $.Method({Static:false, Public:false}, "$lInit$gb__18_0", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), 
      $l$gc_$lInit$gb__18_0
    );

    $.Method({Static:false, Public:false}, "$lInit$gb__18_1", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), 
      $l$gc_$lInit$gb__18_1
    );

    $.Method({Static:false, Public:false}, "$lInit$gb__18_2", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), 
      $l$gc_$lInit$gb__18_2
    );

    $.Method({Static:false, Public:false}, "$lInit$gb__18_3", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), 
      $l$gc_$lInit$gb__18_3
    );

    $.Method({Static:false, Public:false}, "$lInit$gb__18_4", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), 
      $l$gc_$lInit$gb__18_4
    );

    $.Method({Static:false, Public:false}, "$lInit$gb__18_5", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]), 
      $l$gc_$lInit$gb__18_5
    );

    $.Method({Static:false, Public:false}, "$lLoadMesh$gb__17_0", 
      new JSIL.MethodSignature($.Boolean, [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]), 
      $l$gc_$lLoadMesh$gb__17_0
    );

    $.Field({Static:true , Public:true , ReadOnly:true }, "$l$g9", $.Type);

    $.Field({Static:true , Public:true }, "$l$g9__17_0", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.MeshComponent")]));

    $.Field({Static:true , Public:true }, "$l$g9__18_0", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]));

    $.Field({Static:true , Public:true }, "$l$g9__18_1", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]));

    $.Field({Static:true , Public:true }, "$l$g9__18_2", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]));

    $.Field({Static:true , Public:true }, "$l$g9__18_3", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]));

    $.Field({Static:true , Public:true }, "$l$g9__18_4", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]));

    $.Field({Static:true , Public:true }, "$l$g9__18_5", $asm14.TypeRef("System.Predicate`1", [$asm07.TypeRef("Fusee.Serialization.SceneNodeContainer")]));


    function $l$gc__cctor () {
      $thisType.$l$g9 = new $thisType();
    }; 

    $.Method({Static:true , Public:false}, ".cctor", 
      JSIL.MethodSignature.Void, 
      $l$gc__cctor
    );


    return function (newThisType) { $thisType = newThisType; }; 
  })
    .Attribute($asm14.TypeRef("System.Runtime.CompilerServices.CompilerGeneratedAttribute"));

})();

