import React, { useRef } from 'react';
import { GLSL, Node, Shaders } from 'gl-react';
import { Surface } from 'gl-react-expo';
import { Image } from 'react-native';
import { View } from 'react-native-animatable';

const shaders = Shaders.create({
    GLImage: {
        frag: GLSL`
      precision highp float;
      varying vec2 uv;
      uniform sampler2D t;
      void main() {
        gl_FragColor = texture2D(t, uv);
      }
    `,
    },
});


const GLImage = ({ source, aspectRatio, onDraw }) => {
    const surfaceRef = useRef();
    console.log("GLImage source:", source);


    return (
        <View
            style={{ width: 200, height: 200 }}
        >
            <Node
                ref={surfaceRef}
                onLoad={() => {
                    console.log('Surface loaded');
                    onDraw && onDraw(surfaceRef.current);
                }}
                shader={shaders.GLImage}
                uniforms={{
                    t: source,
                }}
            />
        </View>
    );
};

export default GLImage;
