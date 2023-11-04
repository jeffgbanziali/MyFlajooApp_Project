import React from 'react';
import { Shaders, Node } from 'gl-react';

const shaders = Shaders.create({
    Sepia: {
        frag: `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      void main() {
        vec4 color = texture2D(inputImageTexture, uv);
        vec3 outputColor = vec3(
          dot(color.rgb, vec3(0.393, 0.769, 0.189)),
          dot(color.rgb, vec3(0.349, 0.686, 0.168)),
          dot(color.rgb, vec3(0.272, 0.534, 0.131))
        );
        gl_FragColor = vec4(outputColor, color.a);
      }
    `,
    },
});

const Sepia = ({ on, children: inputImageTexture }) => {
    if (!on) {
        return <>{inputImageTexture}</>;
    }

    return (
        <Node
            shader={shaders.Sepia}
            uniforms={{ inputImageTexture }}
        />
    );
};

export default Sepia;
