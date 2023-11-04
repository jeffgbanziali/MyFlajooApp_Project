import React from 'react';
import { Shaders, Node } from 'gl-react';

const shaders = Shaders.create({
    Brightness: {
        frag: `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      void main() {
        vec4 color = texture2D(inputImageTexture, uv);
        // Ajoutez le code du shader Brightness ici
        // Assurez-vous d'ajuster le code selon vos besoins
        gl_FragColor = color;
      }
    `,
    },
});

const Brightness = ({ on, children: inputImageTexture }) => {
    if (!on) {
        return <>{inputImageTexture}</>;
    }

    return (
        <Node
            shader={shaders.Brightness}
            uniforms={{ inputImageTexture }}
        />
    );
};

export default Brightness;
