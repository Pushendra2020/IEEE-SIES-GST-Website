import React, { useEffect, useRef } from "react";

export default function Starfield() {
  const mountRef = useRef(null);

  useEffect(() => {
    let THREE;
    let renderer, scene, camera, starMesh, stars = [];
    let mouseX = 0, mouseY = 0;
    let animationId;

    async function init() {
      THREE = await import("three");
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      mountRef.current.appendChild(renderer.domElement);
      camera.position.z = 5;
      const starGeometry = new THREE.BufferGeometry();
      const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
      const starVertices = [];
      const starCount = 200;
      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 0.1 + 0.05;
        const x = (Math.random() - 0.5) * 20;
        const y = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        starVertices.push(x, y, z, x + size, y + size, z, x - size, y + size, z);
        stars.push({ x, y, z, originalX: x, originalY: y, speed: Math.random() * 0.02 + 0.01, size });
      }
      starGeometry.setAttribute("position", new THREE.Float32BufferAttribute(starVertices, 3));
      starMesh = new THREE.Mesh(starGeometry, starMaterial);
      scene.add(starMesh);
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
      const positions = starMesh.geometry.attributes.position.array;
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const index = i * 9;
        const moveX = mouseX * 2 * star.speed;
        const moveY = mouseY * 2 * star.speed;
        positions[index] = star.originalX + moveX;
        positions[index + 1] = star.originalY + moveY;
        positions[index + 2] = star.z;
        positions[index + 3] = star.originalX + star.size + moveX;
        positions[index + 4] = star.originalY + star.size + moveY;
        positions[index + 5] = star.z;
        positions[index + 6] = star.originalX - star.size + moveX;
        positions[index + 7] = star.originalY + star.size + moveY;
        positions[index + 8] = star.z;
      }
      starMesh.geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }
    init();
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationId) cancelAnimationFrame(animationId);
      if (renderer) {
        renderer.dispose();
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="starfield-container" ref={mountRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none" />;
}
