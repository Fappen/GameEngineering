using System.Linq;
using Fusee.Base.Common;
using Fusee.Base.Core;
using Fusee.Engine.Common;
using Fusee.Engine.Core;
using Fusee.Math.Core;
using Fusee.Serialization;
using Fusee.Xene;
using static Fusee.Engine.Core.Input;
using System.Collections.Generic;

namespace Fusee.Tutorial.Core
{

    [FuseeApplication(Name = "Tutorial Example", Description = "The official FUSEE Tutorial.")]
    public class Tutorial : RenderCanvas
    {
        private Mesh _mesh;
        private const string _vertexShader = @"
            attribute vec3 fuVertex;
            attribute vec3 fuNormal;
            uniform mat4 FUSEE_MVP;
            uniform mat4 FUSEE_MV;
            uniform mat4 FUSEE_ITMV;
            varying vec3 modelpos;
            varying vec3 normal;
            void main()
            {
                modelpos = fuVertex;
                normal = normalize(mat3(FUSEE_ITMV) * fuNormal);
                gl_Position = FUSEE_MVP * vec4(fuVertex, 1.0);
            }";

        private const string _pixelShader = @"
            #ifdef GL_ES
                precision highp float;
            #endif
            varying vec3 modelpos;
            varying vec3 normal;
            uniform vec3 albedo;

            void main()
            {
                float intensity = dot(normal, vec3(0, 0, -1));
                gl_FragColor = vec4(intensity * albedo, 1);
            }";

        private IShaderParam _albedoParam;
        private SceneOb _root;
        private float _alpha;
        private float _beta;

        private float _leftArmZ;
        private float _leftArmX;
        private float _rightArmZ;
        private float _rightArmX;
        private float _armMovement;
        private float _legMovement;
        private bool direction;

        // Init is called on startup. 
        public override void Init()
        {
            // Initialize the shader(s)
            var shader = RC.CreateShader(_vertexShader, _pixelShader);
            RC.SetShader(shader);
            _albedoParam = RC.GetShaderParam(shader, "albedo");

            // Load some meshes
            Mesh cone = LoadMesh("Cone.fus");
            Mesh cube = LoadMesh("Cube.fus");
            Mesh cylinder = LoadMesh("Cylinder.fus");
            Mesh pyramid = LoadMesh("Pyramid.fus");
            Mesh sphere = LoadMesh("Sphere.fus");

            // Setup a list of objects
            _root = new SceneOb {
                Children = new List<SceneOb>(new[]
                {
                    // Body
                    new SceneOb {Name = "Body", Mesh = cube, Pos = new float3(0, 2.75f, 0), ModelScale = new float3(0.5f, 1, 0.25f), Albedo = new float3(0.1f, 0.2f, 0.3f)},
                    // Legs
                    new SceneOb {Name = "LeftThigh", Mesh = cylinder, Pos = new float3(-0.25f, 1.35f, 0), ModelScale = new float3(0.15f, 0.5f, 0.15f), Albedo = new float3(0.1f, 0.9f, 0.3f), Pivot = new float3(0, 0.25f, 0),
                        Children = new List<SceneOb>(new[]
                        {
                            new SceneOb {Name = "LeftKnee", Mesh = sphere, Pos = new float3(0, -0.5f, 0), ModelScale = new float3(0.2f, 0.2f, 0.2f), Albedo = new float3(0.9f, 0.2f, 0.3f),
                                Children = new List<SceneOb>(new[]
                                {
                                    new SceneOb {Name = "LeftShank", Mesh = cylinder, Pos = new float3(0, -0.5f, 0), ModelScale = new float3(0.15f, 0.5f, 0.15f), Albedo = new float3(0.1f, 0.9f, 0.3f),
                                        Children = new List<SceneOb>(new[]
                                        {
                                            new SceneOb {Name = "LeftFeet", Mesh = cube, Pos = new float3(0, -0.55f, -0.125f), ModelScale = new float3(0.15f, 0.05f, 0.25f), Albedo = new float3(0.1f, 0.1f, 0.1f)},
                                        })
                                    },
                                })
                            },
                        })
                    },
                    new SceneOb {Name = "RightThigh", Mesh = cylinder, Pos = new float3( 0.25f, 1.35f, 0), ModelScale = new float3(0.15f, 0.5f, 0.15f), Albedo = new float3(0.1f, 0.9f, 0.3f), Pivot = new float3(0, 0.25f, 0),
                        Children = new List<SceneOb>(new[]
                        {
                            new SceneOb {Name = "RightKnee", Mesh = sphere, Pos = new float3(0, -0.5f, 0), ModelScale = new float3(0.2f, 0.2f, 0.2f), Albedo = new float3(0.9f, 0.2f, 0.3f),
                                Children = new List<SceneOb>(new[]
                                {
                                    new SceneOb {Name = "RightShank", Mesh = cylinder, Pos = new float3(0, -0.5f, 0), ModelScale = new float3(0.15f, 0.5f, 0.15f), Albedo = new float3(0.1f, 0.9f, 0.3f),
                                        Children = new List<SceneOb>(new[]
                                        {
                                            new SceneOb {Name = "RightFeet", Mesh = cube, Pos = new float3(0, -0.55f, -0.125f), ModelScale = new float3(0.15f, 0.05f, 0.25f), Albedo = new float3(0.1f, 0.1f, 0.1f)},
                                        })
                                    },
                                })
                            },
                        })

                    },
                    // Shoulders
                    new SceneOb {Name = "LeftShoulder", Mesh = sphere, Pos = new float3(-0.75f, 3.5f, 0), ModelScale = new float3(0.25f, 0.25f, 0.25f), Albedo = new float3(0.9f, 0.2f, 0.3f),
                        Children = new List<SceneOb>(new[]
                        {
                            new SceneOb {Name = "LeftArm", Mesh = cylinder, Pos = new float3(0, -1.0f, 0), ModelScale = new float3(0.15f, 1, 0.15f), Albedo = new float3(0.1f, 0.9f, 0.3f)},
                        })
                    },
                    new SceneOb {Name = "RightShoulder", Mesh = sphere, Pos = new float3( 0.75f, 3.5f, 0), ModelScale = new float3(0.25f, 0.25f, 0.25f), Albedo = new float3(0.9f, 0.2f, 0.3f),
                    Children = new List<SceneOb>(new[]
                        {
                            new SceneOb {Name = "RightArm", Mesh = cylinder, Pos = new float3(0, -1.0f, 0), ModelScale = new float3(0.15f, 1, 0.15f), Albedo = new float3(0.1f, 0.9f, 0.3f)},
                        })
                    },
                    // Head
                    new SceneOb {Name = "Head", Mesh = sphere, Pos = new float3(0, 4.2f, 0), ModelScale = new float3(0.35f, 0.5f, 0.35f), Albedo = new float3(0.9f, 0.9f, 0.1f)},
                })
            };


            // Set the clear color for the backbuffer
            RC.ClearColor = new float4(1, 1, 1, 1);
        }

        static float4x4 ModelXForm(float3 pos, float3 rot, float3 pivot)
        {
            return float4x4.CreateTranslation(pos + pivot)
                   *float4x4.CreateRotationY(rot.y)
                   *float4x4.CreateRotationX(rot.x)
                   *float4x4.CreateRotationZ(rot.z)
                   *float4x4.CreateTranslation(-pivot);
        }

        // RenderAFrame is called once a frame
        public override void RenderAFrame()
        {
            // Clear the backbuffer
            RC.Clear(ClearFlags.Color | ClearFlags.Depth);

            float2 speed = Mouse.Velocity + Touch.GetVelocity(TouchPoints.Touchpoint_0);
            if (Mouse.LeftButton || Touch.GetTouchActive(TouchPoints.Touchpoint_0))
            {
                _alpha -= speed.x*0.0001f;
                _beta  -= speed.y*0.0001f;
            }
            /*
            _leftArmZ += Keyboard.ADAxis * 0.1f;
            _leftArmX += Keyboard.WSAxis * 0.1f;
            _rightArmZ += Keyboard.LeftRightAxis * 0.1f;
            _rightArmX += Keyboard.UpDownAxis * 0.1f;

            if (_leftArmX < -0.6f)
            {
                _leftArmX = -0.6f;
            }
            else if (_leftArmX > 3.75f)
            {
                _leftArmX = 3.75f;
            }

            if (_rightArmX < -0.6f)
            {
                _rightArmX = -0.6f;
            }
            else if (_rightArmX > 3.2f)
            {
                _rightArmX = 3.2f;
            }
            */
            if (Keyboard.GetKey(KeyCodes.F))
            {

                if (direction == true)
                {
                    _legMovement += 0.025f;
                    _armMovement += 0.025f;

                    if (_legMovement >= 0.6f)
                    {
                        direction = false;
                    }

                }
                else if (direction == false)
                {
                    _legMovement -= 0.025f;
                    _armMovement -= 0.025f;

                    if (_legMovement <= -0.6f)
                    {
                        direction = true;
                    }
                }

            }


            // Setup matrices
            var aspectRatio = Width / (float)Height;
            RC.Projection = float4x4.CreatePerspectiveFieldOfView(3.141592f * 0.25f, aspectRatio, 0.01f, 20);
            var view = float4x4.CreateTranslation(0, 0, 8)*float4x4.CreateRotationY(_alpha)*float4x4.CreateRotationX(_beta) * float4x4.CreateTranslation(0, -2f, 0);

            /*FindSceneOb(_root, "LeftShoulder").Rot.z = _leftArmZ;
            FindSceneOb(_root, "LeftShoulder").Rot.x = _leftArmX;

            FindSceneOb(_root, "RightShoulder").Rot.z = _rightArmZ;
            FindSceneOb(_root, "RightShoulder").Rot.x = _rightArmX;*/

            FindSceneOb(_root, "LeftShoulder").Rot.x = _armMovement * -1.0f;
            FindSceneOb(_root, "RightShoulder").Rot.x = _armMovement;

            FindSceneOb(_root, "LeftThigh").Rot.x = _legMovement;
            FindSceneOb(_root, "RightThigh").Rot.x = _legMovement * -1.0f;

            RenderSceneOb(_root, view);

            // Swap buffers: Show the contents of the backbuffer (containing the currently rendered farame) on the front buffer.
            Present();
        }


        // Is called when the window was resized
        public override void Resize()
        {
            // Set the new rendering area to the entire new windows size
            RC.Viewport(0, 0, Width, Height);

            // Create a new projection matrix generating undistorted images on the new aspect ratio.
            var aspectRatio = Width/(float) Height;

            // 0.25*PI Rad -> 45° Opening angle along the vertical direction. Horizontal opening angle is calculated based on the aspect ratio
            // Front clipping happens at 1 (Objects nearer than 1 world unit get clipped)
            // Back clipping happens at 2000 (Anything further away from the camera than 2000 world units gets clipped, polygons will be cut)
            var projection = float4x4.CreatePerspectiveFieldOfView(3.141592f * 0.25f, aspectRatio, 1, 20000);
            RC.Projection = projection;
        }

        public static Mesh LoadMesh(string assetName)
        {
            SceneContainer sc = AssetStorage.Get<SceneContainer>(assetName);
            MeshComponent mc = sc.Children.FindComponents<MeshComponent>(c => true).First();
            return new Mesh
            {
                Vertices = mc.Vertices,
                Normals = mc.Normals,
                Triangles = mc.Triangles
            };
        }

        void RenderSceneOb(SceneOb so, float4x4 modelView)
        {
            modelView = modelView * ModelXForm(so.Pos, so.Rot, so.Pivot) * float4x4.CreateScale(so.Scale);
            if (so.Mesh != null)
            {
                RC.ModelView = modelView * float4x4.CreateScale(so.ModelScale);
                RC.SetShaderParam(_albedoParam, so.Albedo);
                RC.Render(so.Mesh);
            }

            if (so.Children != null)
            {
                foreach (var child in so.Children)
                {
                    RenderSceneOb(child, modelView);
                }
            }
        }

        public static SceneOb FindSceneOb(SceneOb so, string name)
        {
               if (so.Name == name)
                {
                    //Diagnostics.Log("Found " + name);
                    return so;
                }
                else if (so.Children != null)
                {
                    //Diagnostics.Log("Childs: " + so.Children.Count);
                    foreach (var child in so.Children)
                    {
                        if (child.Name == name)
                        {
                            return child;
                        } else if (FindSceneOb(child, name) != null)
                        {
                            return FindSceneOb(child, name);
                        }
                    }
                }
            
            //Diagnostics.Log("Did not found " + so.Name);
            return null;
        }


    }
}