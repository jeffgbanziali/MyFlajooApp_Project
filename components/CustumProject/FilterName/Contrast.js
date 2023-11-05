import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';

const shaders = Shaders.create({
  Contrast: {
    frag:GLSL `
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      void main() {
        vec4 color = texture2D(inputImageTexture, uv);
        // Ajoutez le code du shader Contrast ici
        // Assurez-vous d'ajuster le code selon vos besoins
        gl_FragColor = color;
      }
    `,
  },
});

const Contrast = ({ on, children: inputImageTexture }) => {
  if (!on) {
    return <>{inputImageTexture}</>;
  }

  return (
    <Node
      shader={shaders.Contrast}
      uniforms={{ inputImageTexture }}
    />
  );
};

export default Contrast;
