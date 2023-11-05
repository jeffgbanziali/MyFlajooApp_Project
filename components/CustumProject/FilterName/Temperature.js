import React from 'react';
import { Shaders, Node, GLSL } from 'gl-react';

const shaders = Shaders.create({
  Temperature: {
    frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D inputImageTexture;
      void main() {
        vec4 color = texture2D(inputImageTexture, uv);
        // Ajoutez le code du shader Temperature ici
        // Assurez-vous d'ajuster le code selon vos besoins
        gl_FragColor = color;
      }
    `,
  },
});

const Temperature = ({ on, children: inputImageTexture }) => {
  if (!on) {
    return <>{inputImageTexture}</>;
  }

  return (
    <Node
      shader={shaders.Temperature}
      uniforms={{ inputImageTexture }}
    />
  );
};

export default Temperature;
