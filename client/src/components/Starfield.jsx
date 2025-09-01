// import React, { useEffect, useRef } from "react";
// import * as THREE from "three";

// export default function Starfield() {
//   const mountRef = useRef(null);

//   useEffect(() => {
//     let renderer, scene, camera, stars;
//     let mouseX = 0, mouseY = 0;
//     let animationId;

//     function init() {
//       scene = new THREE.Scene();
//       camera = new THREE.PerspectiveCamera(
//         75,
//         window.innerWidth / window.innerHeight,
//         0.1,
//         1000
//       );

//       renderer = new THREE.WebGLRenderer({ alpha: true });
//       renderer.setSize(window.innerWidth, window.innerHeight);
//       renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // limit DPR for performance
//       mountRef.current.appendChild(renderer.domElement);

//       camera.position.z = 5;

//       // ⭐ Create stars using Points instead of Mesh
//       const starCount = 500; // increase stars without performance hit
//       const geometry = new THREE.BufferGeometry();
//       const positions = new Float32Array(starCount * 3);

//       for (let i = 0; i < starCount * 3; i++) {
//         positions[i] = (Math.random() - 0.5) * 50; // spread out
//       }

//       geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//       const material = new THREE.PointsMaterial({
//         color: 0xffffff,
//         size: 0.05,
//         transparent: true,
//         opacity: 0.8,
//       });

//       stars = new THREE.Points(geometry, material);
//       scene.add(stars);

//       window.addEventListener("resize", handleResize);
//       document.addEventListener("mousemove", handleMouseMove);

//       animate();
//     }

//     function handleResize() {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     }

//     function handleMouseMove(event) {
//       mouseX = (event.clientX / window.innerWidth) * 2 - 1;
//       mouseY = (event.clientY / window.innerHeight) * 2 - 1;
//     }

//     function animate() {
//       animationId = requestAnimationFrame(animate);

//       if (stars) {
//         stars.rotation.x = mouseY * 0.1; // gentle parallax effect
//         stars.rotation.y = mouseX * 0.1;
//       }

//       renderer.render(scene, camera);
//     }

//     init();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousemove", handleMouseMove);
//       if (animationId) cancelAnimationFrame(animationId);
//       if (renderer) {
//         renderer.dispose();
//         mountRef.current.removeChild(renderer.domElement);
//       }
//     };
//   }, []);

//   return (
//     <div
//       id="starfield-container"
//       ref={mountRef}
//       className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
//     />
//   );
// }
