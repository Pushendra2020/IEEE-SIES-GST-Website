/* eslint-disable react/no-unknown-property */
import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();
    // Generate 9000 stars for a denser field
    const [sphere] = useState(() => random.inSphere(new Float32Array(9000), { radius: 1.2 }));

    // Use a ref to store mouse position to avoid re-renders
    const mouseParams = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position to -1 to 1
            mouseParams.current.x = (e.clientX / window.innerWidth) * 2 - 1;
            mouseParams.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            // Slower constant rotation
            ref.current.rotation.x -= delta / 50;
            ref.current.rotation.y -= delta / 60;

            // Global Mouse Interaction (independent of canvas pointer events)
            // Swap X/Y for correct rotation axis feel
            const targetX = mouseParams.current.y * 0.5;
            const targetY = mouseParams.current.x * 0.5;

            // Smooth interpolation
            ref.current.rotation.x += (targetX - ref.current.rotation.x) * delta * 2;
            ref.current.rotation.y += (targetY - ref.current.rotation.y) * delta * 2;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#ffffff"
                    size={0.0015}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

const EnhancedBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            {/* 3D Interactive Starfield */}
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Stars />
            </Canvas>
        </div>
    );
};

export default EnhancedBackground;
