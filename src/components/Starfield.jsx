import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Starfield() {
  const mountRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera, stars;
    let mouseX = 0, mouseY = 0;
    let animationId;
    const mount = mountRef.current;

    function init() {
      if (!mount) return;

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // limit DPR for performance
      mount.appendChild(renderer.domElement);

      camera.position.z = 5;

      // Create star triangles with enhanced visuals
      const starCount = 200;
      const geometry = new THREE.BufferGeometry();
      const starVertices = [];
      const starPositions = [];

      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 0.1 + 0.05;
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;

        // Create triangle vertices for each star
        starVertices.push(
          x, y, z,           // Center point
          x + size, y + size, z,  // Top right
          x - size, y + size, z   // Top left
        );

        // Store position for animation
        starPositions.push({
          x, y, z,
          originalX: x,
          originalY: y,
          speed: Math.random() * 0.02 + 0.01,
          size
        });
      }

      geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(starVertices, 3)
      );

      const material = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide
      });

      stars = new THREE.Mesh(geometry, material);
      stars.userData.positions = starPositions; // Store for animation
      scene.add(stars);

      window.addEventListener("resize", handleResize);
      document.addEventListener("mousemove", handleMouseMove);

      animate();
    }

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function handleMouseMove(event) {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    }

    function animate() {
      animationId = requestAnimationFrame(animate);

      if (stars) {
        // Update star positions based on mouse movement
        const positions = stars.geometry.attributes.position.array;
        const starPositions = stars.userData.positions;

        for (let i = 0; i < starPositions.length; i++) {
          const star = starPositions[i];
          const index = i * 9; // 3 vertices per triangle, 3 coordinates per vertex

          // Calculate movement based on mouse position and star speed
          const moveX = mouseX * 2 * star.speed;
          const moveY = mouseY * 2 * star.speed;

          // Update all three vertices of the triangle
          // Center point
          positions[index] = star.originalX + moveX;
          positions[index + 1] = star.originalY + moveY;
          positions[index + 2] = star.z;

          // Top right point
          positions[index + 3] = star.originalX + star.size + moveX;
          positions[index + 4] = star.originalY + star.size + moveY;
          positions[index + 5] = star.z;

          // Top left point
          positions[index + 6] = star.originalX - star.size + moveX;
          positions[index + 7] = star.originalY + star.size + moveY;
          positions[index + 8] = star.z;
        }

        stars.geometry.attributes.position.needsUpdate = true;
        stars.rotation.y += 0.0005; // Slow constant rotation
      }

      renderer.render(scene, camera);
    }

    init();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer && mount) {
        renderer.dispose();
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      id="starfield-container"
      ref={mountRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
