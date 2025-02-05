#ifdef GL_ES
    precision highp float;
#endif
varying vec3 viewpos;
varying vec3 normal;
varying vec2 uv;
uniform vec3 albedo;
uniform float shininess;
uniform float specfactor;
uniform vec3 speccolor;
uniform vec3 ambientcolor;
uniform sampler2D texture;
uniform float texmix;


void main()
{
    vec3 nnormal = normalize(normal);
	vec2 uv = normal.xy * 0.5 + vec2(0.5, 0.5);
    vec3 albedoResult = (1.0-texmix) * albedo + texmix * vec3(texture2D(texture, uv));

    gl_FragColor = vec4(albedoResult, 1);
}