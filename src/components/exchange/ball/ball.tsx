import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { EffectComposer, Glitch } from '@react-three/postprocessing';
import { GlitchMode } from 'postprocessing';
import Scene from './scene';

function Ball({ isWrong }: Readonly<{ isWrong: boolean }>) {
    return (
        <div className="h-full w-full">
            <Canvas className="canvas" dpr={[1, 2]}>
                <Scene />
                <OrbitControls
                    enablePan={false}
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <EffectComposer>
                    <Glitch mode={GlitchMode.SPORADIC} active={isWrong} ratio={1} columns={0.1} />
                </EffectComposer>
            </Canvas>
        </div>
    );
}

export default Ball;
