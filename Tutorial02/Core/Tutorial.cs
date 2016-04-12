using System;
using Fusee.Base.Common;
using Fusee.Base.Core;
using Fusee.Engine.Common;
using Fusee.Engine.Core;
using Fusee.Engine.Core.GUI;
using Fusee.Math.Core;
using Fusee.Serialization;
using static Fusee.Engine.Core.Input;



namespace Fusee.Tutorial.Core
{

    [FuseeApplication(Name = "Tutorial Example", Description = "The official FUSEE Tutorial.")]
    public class Tutorial : RenderCanvas
    {
        private IShaderParam _degreesParam;
        private float2 _degrees;

        private IShaderParam _mousePositionParam;
        private float2 _mousePosition;

        private Mesh _mesh;

        private const string _vertexShader = @"
        attribute vec3 fuVertex;
        uniform vec2 degrees;
        varying vec3 modelpos;

        varying vec4 position;

        void main()
        {
            modelpos = fuVertex;
            float s = sin(degrees.x);
            float c = cos(degrees.x);
            float s2 = sin(degrees.y);
            float c2 = cos(degrees.y);
           
            mat4 xrotation;
            mat4 yrotation; 

            xrotation = mat4 (1, 0, 0, 0,
                              0, c, -s, 0,
                              0, s, c, 0,
                              0, 0, 0, 1);

            yrotation = mat4 (c2, 0, s2, 0,
                              0, 1, 0, 0,
                              -s2, 0, c2, 0,
                              0, 0, 0, 1);

            gl_Position = xrotation * yrotation * vec4(fuVertex, 1.0);
            position = gl_Position;
        }";

        private const string _pixelShader = @"
            #ifdef GL_ES
                precision highp float;
            #endif
            varying vec3 modelpos;
            varying vec4 position;
            uniform vec2 mousePosition;
            float dist;

            void main()
            {
                dist = distance(mousePosition, vec2(position.x, position.y));  

                gl_FragColor = vec4(modelpos,1) - vec4(dist,dist,dist,1) + 1.0;
            }";


        // Init is called on startup. 
        public override void Init()
        {
            Width = 750;
            Height = 750;

            _mesh = new Mesh
            {
                Vertices = new[]
                {
                    new float3(-0.15f, -0.5f, -0.05f),  // Vertex 0
                    new float3(0, -0.5f, -0.05f),       // Vertex 1
                    new float3(0, 0, -0.05f),           // Vertex 2
                    new float3(0.3f, 0, -0.05f),        // Vertex 3
                    new float3(0.3f, 0.15f, -0.05f),    // Vertex 4
                    new float3(0, 0.15f, -0.05f),       // Vertex 5
                    new float3(0, 0.35f, -0.05f),       // Vertex 6
                    new float3(0.3f, 0.35f, -0.05f),    // Vertex 7
                    new float3(0.3f, 0.5f, -0.05f),     // Vertex 8
                    new float3(0, 0.5f, -0.05f),        // Vertex 9
                    new float3(-0.15f, 0.5f, -0.05f),   // Vertex 10

                    new float3(-0.15f, -0.5f, 0.05f),   // Vertex 11
                    new float3(0, -0.5f, 0.05f),        // Vertex 12
                    new float3(0, 0, 0.05f),            // Vertex 13
                    new float3(0.3f, 0, 0.05f),         // Vertex 14
                    new float3(0.3f, 0.15f, 0.05f),     // Vertex 15
                    new float3(0, 0.15f, 0.05f),        // Vertex 16
                    new float3(0, 0.35f, 0.05f),        // Vertex 17
                    new float3(0.3f, 0.35f, 0.05f),     // Vertex 18
                    new float3(0.3f, 0.5f, 0.05f),      // Vertex 19
                    new float3(0, 0.5f, 0.05f),         // Vertex 20
                    new float3(-0.15f, 0.5f, 0.05f),    // Vertex 21
                },
                Triangles = new ushort[]
                {
                    //Front
                    0, 1, 10,  
                    1, 9, 10,  
                    2, 3, 5,  
                    3, 4, 5,  
                    6, 7, 9,
                    7, 8, 9,

                    //Back
                    12, 11, 21,  
                    12, 21, 20,  
                    14, 13, 16,  
                    14, 16, 15,  
                    18, 17, 20,
                    18, 20, 19,

                    //Connections between Back and Front
                    0, 12, 1,
                    0, 11, 12,
                    1, 13, 2,
                    1, 12, 13,
                    2, 14, 3,
                    2, 13, 14,
                    3, 15, 4,
                    3, 14, 15,
                    4, 16, 5,
                    4, 15, 16,
                    5, 17, 6,
                    5, 16, 17,
                    6, 18, 7,
                    6, 17, 18,
                    7, 19, 8,
                    7, 18, 19,
                    8, 21, 10,
                    8, 19, 21,
                    10, 11, 0,
                    10, 21, 11,
                },
            };

            var shader = RC.CreateShader(_vertexShader, _pixelShader);
            RC.SetShader(shader);
            _degreesParam = RC.GetShaderParam(shader, "degrees");
            _degrees = new float2(0, 0);

            _mousePositionParam = RC.GetShaderParam(shader, "mousePosition");
            _mousePosition = new float2(0, 0);

            // Set the clear color for the backbuffer.
            RC.ClearColor = new float4(1.0f, 1.0f, 1.0f, 1);
        }

        // RenderAFrame is called once a frame
        public override void RenderAFrame()
        {
            // Clear the backbuffer
            RC.Clear(ClearFlags.Color | ClearFlags.Depth);

            RC.Render(_mesh);

            float2 speed = Mouse.Velocity;

            if (Mouse.LeftButton)
            {
                _degrees.x += speed.y * 0.0001f;
                _degrees.y += speed.x * 0.0001f;
            }

            _degrees.x += Keyboard.UpDownAxis * 0.01f;
            _degrees.y += Keyboard.LeftRightAxis * 0.01f;
            /*
            _mousePosition.x = Mouse.Position.x/Width;
            _mousePosition.y = Mouse.Position.y/Height;
            */
            _mousePosition = new float2((1.0f / (Width / 2.0f) * Mouse.Position.x) - 1.0f, (((1.0f / (Height / 2.0f)) * Mouse.Position.y) - 1.0f) * -1.0f);

            RC.SetShaderParam(_degreesParam, _degrees);
            RC.SetShaderParam(_mousePositionParam, _mousePosition);


            // Swap buffers: Show the contents of the backbuffer (containing the currently rerndered farame) on the front buffer.
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
            var projection = float4x4.CreatePerspectiveFieldOfView(MathHelper.PiOver4, aspectRatio, 1, 20000);
            RC.Projection = projection;
        }

    }
}