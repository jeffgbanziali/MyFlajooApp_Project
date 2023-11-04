import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';

const shaders = Shaders.create({
  Valencia: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      void main() {
        vec4 color = texture2D(inputImageTexture, uv);
        // Ajoutez le code du shader Valencia ici
        // Assurez-vous d'ajuster le code selon vos besoins
        gl_FragColor = color;
      }
    `,
  },
});

const Valencia = ({ on, children: inputImageTexture }) => {
  if (!on) {
    return <>{inputImageTexture}</>;
  }

  return (
    <Node
      shader={shaders.Valencia}
      uniforms={{ inputImageTexture }}
    />
  );
};

export default Valencia;
