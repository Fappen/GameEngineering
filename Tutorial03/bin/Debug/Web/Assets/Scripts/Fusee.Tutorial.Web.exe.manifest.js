// Generated by JSIL v0.8.2 build 17617. See http://jsil.org/ for more information. 

'use strict';
var $asm00 = JSIL.GetAssembly("Fusee.Base.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm01 = JSIL.GetAssembly("Fusee.Base.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm02 = JSIL.GetAssembly("Fusee.Base.Imp.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm03 = JSIL.GetAssembly("Fusee.Engine.Common, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null");
var $asm04 = JSIL.GetAssembly("Fusee.Engine.Core, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null");
var $asm05 = JSIL.GetAssembly("Fusee.Engine.Imp.Graphics.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm06 = JSIL.GetAssembly("Fusee.Math.Core, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null");
var $asm07 = JSIL.GetAssembly("Fusee.Serialization, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm08 = JSIL.GetAssembly("Fusee.SerializationSerializer, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm09 = JSIL.GetAssembly("Fusee.Tutorial.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0A = JSIL.GetAssembly("Fusee.Tutorial.Web, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0B = JSIL.GetAssembly("Fusee.Xene, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0C = JSIL.GetAssembly("Fusee.Xirkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null");
var $asm0D = JSIL.GetAssembly("mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm0E = JSIL.GetAssembly("protobuf-net, Version=2.0.0.668, Culture=neutral, PublicKeyToken=null");
var $asm0F = JSIL.GetAssembly("System, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm10 = JSIL.GetAssembly("System.Configuration, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm11 = JSIL.GetAssembly("System.Core, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm12 = JSIL.GetAssembly("System.Numerics, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm13 = JSIL.GetAssembly("System.Xml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");
var $asm14 = JSIL.GetAssembly("System.Security, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a");
var $asm15 = JSIL.GetAssembly("System.Data.SqlXml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089");

if (typeof (contentManifest) !== "object") { JSIL.GlobalNamespace.contentManifest = {}; };
contentManifest["Fusee.Tutorial.Web.exe"] = [
    ["Script", "Fusee.Tutorial.Web, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 10154 }],
    ["Script", "mscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 9208059 }],
    ["Script", "Fusee.Base.Imp.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 16032 }],
    ["Script", "Fusee.Tutorial.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 16834 }],
    ["Script", "Fusee.Base.Common, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 140899 }],
    ["Script", "Fusee.SerializationSerializer, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 142591 }],
    ["Script", "Fusee.Base.Core, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 13491 }],
    ["Script", "Fusee.Serialization, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 38508 }],
    ["Script", "Fusee.Engine.Imp.Graphics.Web, Version=0.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 152077 }],
    ["Script", "Fusee.Engine.Core, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 911509 }],
    ["Script", "Fusee.Engine.Common, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 111006 }],
    ["Script", "protobuf-net, Version=2.0.0.668, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 936391 }],
    ["Script", "Fusee.Math.Core, Version=0.5.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 531984 }],
    ["Script", "System, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 6378439 }],
    ["Script", "System.Core, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 3040262 }],
    ["Script", "Fusee.Xene, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 124478 }],
    ["Script", "Fusee.Xirkit, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null.js", { "sizeBytes": 175526 }],
    ["Script", "System.Configuration, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a.js", { "sizeBytes": 648484 }],
    ["Script", "System.Xml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 4199569 }],
    ["Script", "System.Numerics, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089.js", { "sizeBytes": 173084 }],
];
