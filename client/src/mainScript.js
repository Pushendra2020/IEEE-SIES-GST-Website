// This file replicates your original script.js logic for shapes, parallax, glitch, and starfield
import { useEffect } from "react";
//import { initStarfield } from "./lib/starfieldUtils";
import * as THREE from "three";



export function useMainEffects() {
  useEffect(() => {
    // Only run effects on home route
   
initStarfield()
    // Get background elements
    const bgElements = document.querySelector(".bg-elements");
    const staticShapes = document.querySelectorAll(".shape");
    const navLinks = document.querySelectorAll(".nav-link");

    // Array to store randomly created shapes
    const randomShapes = [];

    // Parallax effect on mouse move
    function mouseMoveHandler(e) {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;

      // Move shapes
      staticShapes.forEach((shape) => {
        const shiftX = mouseX * 20;
        const shiftY = mouseY * 20;
        if (shape.classList.contains("shape1")) {
          shape.style.transform = `translate(${shiftX}px, ${shiftY}px) rotate(${mouseX * 10}deg)`;
        } else if (shape.classList.contains("shape2")) {
          shape.style.transform = `translate(${-shiftX}px, ${shiftY}px) rotate(${-mouseY * 15}deg)`;
        } else if (shape.classList.contains("shape3")) {
          shape.style.transform = `translate(${shiftX * 1.5}px, ${-shiftY}px) rotate(${mouseX * 5}deg)`;
        } else if (shape.classList.contains("shape4")) {
          shape.style.transform = `translate(${-shiftX * 0.7}px, ${-shiftY * 0.7}px) rotate(${mouseY * 20}deg)`;
        }
      });

      // Move grid
      const grid = document.querySelector(".grid");
      if (grid) {
        const subtleX = (mouseX - 0.5) * 30;
        const subtleY = (mouseY - 0.5) * 30;
        grid.style.transform = `perspective(500px) rotateX(60deg) translate(${subtleX}px, ${subtleY}px)`;
      }

      // Move stars
      const stars = document.querySelector(".stars");
      if (stars) {
        const starX = (mouseX - 0.5) * 70;
        const starY = (mouseY - 0.5) * 70;
        stars.style.transform = `translate(${starX}px, ${starY}px)`;
      }

      // Move static shapes with parallax effect
      staticShapes.forEach((shape) => {
        const shapeX = (mouseX - 0.5) * 60;
        const shapeY = (mouseY - 0.5) * 60;
        if (shape.classList.contains("shape1")) {
          shape.style.transform = `translate(${shapeX}px, ${shapeY}px) rotate(${mouseX * 20}deg)`;
        } else if (shape.classList.contains("shape2")) {
          shape.style.transform = `translate(${-shapeX * 0.8}px, ${shapeY}px) rotate(${-mouseY * 25}deg)`;
        } else if (shape.classList.contains("shape3")) {
          shape.style.transform = `translate(${shapeX * 1.2}px, ${-shapeY}px) rotate(${mouseX * 15}deg)`;
        } else if (shape.classList.contains("shape4")) {
          shape.style.transform = `translate(${-shapeX * 0.6}px, ${-shapeY * 0.6}px) rotate(${mouseY * 30}deg)`;
        }
      });

      // Move random shapes
      randomShapes.forEach((shape) => {
        const shapeX = (mouseX - 0.5) * 50;
        const shapeY = (mouseY - 0.5) * 50;
        shape.style.transform = `translate(${shapeX}px, ${shapeY}px)`;
      });
    }
    document.addEventListener("mousemove", mouseMoveHandler);

    // Function to create a random shape
    function createRandomShape() {
      const shape = document.createElement("div");
      shape.classList.add("shape");
      shape.classList.add("random-shape");
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const size = Math.random() * 100 + 50;
      const shapeType = Math.floor(Math.random() * 3);
      const colors = ["#00c3ff", "#ff00a6", "#00ffcc", "#ff9900"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      shape.style.position = "absolute";
      shape.style.top = `${posY}%`;
      shape.style.left = `${posX}%`;
      shape.style.opacity = "0.4";
      shape.style.animation = `float ${Math.random() * 5 + 8}s infinite ease-in-out ${Math.random() * 5}s`;
      if (shapeType === 0) {
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.background = `linear-gradient(45deg, ${color}, transparent)`;
        shape.style.border = `2px solid ${color}`;
      } else if (shapeType === 1) {
        shape.style.width = `${size}px`;
        shape.style.height = `${size}px`;
        shape.style.background = `linear-gradient(45deg, ${color}, transparent)`;
        shape.style.border = `2px solid ${color}`;
        shape.style.borderRadius = "50%";
      } else {
        shape.style.width = "0";
        shape.style.height = "0";
        shape.style.borderLeft = `${size / 2}px solid transparent`;
        shape.style.borderRight = `${size / 2}px solid transparent`;
        shape.style.borderBottom = `${size}px solid ${color}`;
      }
      shape.dataset.originalLeft = posX;
      shape.dataset.originalTop = posY;
      bgElements.appendChild(shape);
      randomShapes.push(shape);
      setTimeout(() => {
        shape.style.transition = "opacity 1s";
        shape.style.opacity = "0";
        setTimeout(() => {
          bgElements.removeChild(shape);
          const index = randomShapes.indexOf(shape);
          if (index > -1) {
            randomShapes.splice(index, 1);
          }
        }, 1000);
      }, Math.random() * 15000 + 10000);
    }
    const shapeInterval = setInterval(createRandomShape, 3000);
    for (let i = 0; i < 5; i++) {
      setTimeout(createRandomShape, i * 300);
    }

    // Glitch effect for retro text
    const retroText = document.querySelector(".retro-text");
    function glitchEffect() {
      if (Math.random() > 0.7) {
        retroText.style.textShadow = `
          ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 10}px rgba(0, 195, 255, 0.8),
          ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px ${Math.random() * 10}px rgba(255, 0, 166, 0.8)
        `;
        setTimeout(() => {
          retroText.style.textShadow = "";
        }, 100);
      }
    }
    const glitchInterval = setInterval(glitchEffect, 500);

    // Parallax effect for navigation links
    const navbar = document.querySelector(".navbar");
    const navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item, index) => {
      item.dataset.originalX = 0;
      item.dataset.originalY = 0;
      item.dataset.speedX = 0.3 + index * 0.1;
      item.dataset.speedY = 0.2 + index * 0.05;
      item.style.zIndex = 10 + index;
      item.style.transition = "transform 0.1s ease-out";
    });
    function navMouseMoveHandler(e) {
      const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
      navItems.forEach((item, index) => {
        const moveX = mouseX * parseFloat(item.dataset.speedX) * 30;
        const moveY = mouseY * parseFloat(item.dataset.speedY) * 15;
        item.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    }
    document.addEventListener("mousemove", navMouseMoveHandler);

    // Navigation effects
    navLinks.forEach((link, index) => {
      link.addEventListener("mouseenter", function () {
        this.style.animation = "glitch 0.3s infinite";
        const linkRect = this.getBoundingClientRect();
        const smallShape = document.createElement("div");
        smallShape.classList.add("nav-shape");
        smallShape.style.position = "absolute";
        smallShape.style.width = "10px";
        smallShape.style.height = "10px";
        smallShape.style.background = Math.random() > 0.5 ? "#00c3ff" : "#ff00a6";
        smallShape.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
        smallShape.style.top = `${linkRect.top + linkRect.height / 2}px`;
        smallShape.style.left = `${linkRect.left - 20}px`;
        smallShape.style.opacity = "0.7";
        smallShape.style.zIndex = "10";
        smallShape.style.boxShadow = "0 0 10px currentColor";
        smallShape.style.transition = "all 0.5s ease";
        document.body.appendChild(smallShape);
        setTimeout(() => {
          smallShape.style.transform = "translateX(20px) scale(0)";
          smallShape.style.opacity = "0";
          setTimeout(() => {
            document.body.removeChild(smallShape);
          }, 500);
        }, 300);
        const parentItem = this.closest(".nav-item");
        if (parentItem) {
          parentItem.style.transform = `translate3d(0, 0, 20px) scale(1.1)`;
          parentItem.style.zIndex = 20;
        }
      });
      link.addEventListener("mouseleave", function () {
        this.style.animation = "";
        const parentItem = this.closest(".nav-item");
        if (parentItem) {
          const moveX = parseFloat(parentItem.dataset.originalX);
          const moveY = parseFloat(parentItem.dataset.originalY);
          parentItem.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
          parentItem.style.zIndex = 10 + index;
        }
      });
      link.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const y = target.getBoundingClientRect().top + window.pageYOffset - 60;
            window.scrollTo({ top: y, behavior: "smooth" });
          }
        }
      });
    });

    // Function to show a message
    function showMessage(text) {
      const message = document.createElement("div");
      message.className = "nav-message";
      message.style.position = "fixed";
      message.style.top = "20%";
      message.style.left = "50%";
      message.style.transform = "translateX(-50%)";
      message.style.background = "rgba(0, 0, 0, 0.8)";
      message.style.color = "#00c3ff";
      message.style.fontFamily = "'Press Start 2P', cursive";
      message.style.fontSize = "14px";
      message.style.padding = "15px 20px";
      message.style.borderRadius = "5px";
      message.style.boxShadow = "0 0 20px rgba(0, 195, 255, 0.7), 0 0 40px rgba(255, 0, 166, 0.5)";
      message.style.zIndex = "1000";
      message.style.textAlign = "center";
      message.style.opacity = "0";
      message.style.transition = "opacity 0.3s ease";
      message.style.border = "2px solid #00c3ff";
      const textContainer = document.createElement("div");
      message.appendChild(textContainer);
      document.body.appendChild(message);
      setTimeout(() => {
        message.style.opacity = "1";
      }, 10);
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < text.length) {
          textContainer.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 50);
      setTimeout(() => {
        message.style.opacity = "0";
        setTimeout(() => {
          document.body.removeChild(message);
        }, 300);
      }, 2000);
      initStarfield()
    }

    // Add glitch animation keyframes
    const style = document.createElement("style");
    // style.textContent = `
    //   @keyframes glitch {
    //     0% { transform: translate(0); }
    //     20% { transform: translate(-2px, 2px); }
    //     40% { transform: translate(-2px, -2px); }
    //     60% { transform: translate(2px, 2px); }
    //     80% { transform: translate(2px, -2px); }
    //     100% { transform: translate(0); }
    //   }
    // `;
    // document.head.appendChild(style);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mousemove", navMouseMoveHandler);
      clearInterval(shapeInterval);
      clearInterval(glitchInterval);
    };

   function initStarfield() {
  // Create scene, camera, and renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  document
    .getElementById("starfield-container")
    .appendChild(renderer.domElement);

  // Position camera
  camera.position.z = 5;

  // Create star triangles
  const stars = [];
  const starGeometry = new THREE.BufferGeometry();
  const starMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
  });

  // Create star vertices
  const starVertices = [];
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    // Create a triangle shape
    const size = Math.random() * 0.1 + 0.05;
    const x = (Math.random() - 0.5) * 20;
    const y = (Math.random() - 0.5) * 20;
    const z = (Math.random() - 0.5) * 20;

    // Triangle vertices
    starVertices.push(x, y, z, x + size, y + size, z, x - size, y + size, z);

    // Store star data for animation
    stars.push({
      x: x,
      y: y,
      z: z,
      originalX: x,
      originalY: y,
      speed: Math.random() * 0.02 + 0.01,
      size: size,
    });
  }

  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
  );
  const starMesh = new THREE.Mesh(starGeometry, starMaterial);
  scene.add(starMesh);

  // Mouse position tracking
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener("mousemove", (event) => {
    // Calculate mouse position as a value between -1 and 1
    mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    mouseY = (event.clientY / window.innerHeight) * 2 - 1;
  });

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Update star positions based on continuous mouse movement
    const positions = starMesh.geometry.attributes.position.array;

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      const index = i * 9; // 3 vertices per triangle, 3 coordinates per vertex

      // Calculate movement based on continuous mouse position
      const moveX = mouseX * 2 * star.speed;
      const moveY = mouseY * 2 * star.speed;

      // Update triangle vertices
      positions[index] = star.originalX + moveX; // First vertex
      positions[index + 1] = star.originalY + moveY;
      positions[index + 2] = star.z;

      positions[index + 3] = star.originalX + star.size + moveX; // Second vertex
      positions[index + 4] = star.originalY + star.size + moveY;
      positions[index + 5] = star.z;

      positions[index + 6] = star.originalX - star.size + moveX; // Third vertex
      positions[index + 7] = star.originalY + star.size + moveY;
      positions[index + 8] = star.z;
    }

    starMesh.geometry.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
  }

  animate();
}

  }, []);
}

