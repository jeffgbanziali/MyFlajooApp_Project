import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';
import resolveAssetSource from 'react-native/Libraries/Image/resolveAssetSource';

const shaders = Shaders.create({
    Grayscale: {
        frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      void main() {
        vec4 color = texture2D(inputImageTexture, uv);
        float luminance = dot(color.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor = vec4(vec3(luminance), color.a);
      }
    `,
    },
});

const Grayscale = ({ on, children: inputImageTexture }) => {
    if (!on) {
        return <>{inputImageTexture}</>;
    }

    return (
        <Node
            shader={shaders.Grayscale}
            uniforms={{
                inputImageTexture,
            }}
        />
    );
};

export default Grayscale;
