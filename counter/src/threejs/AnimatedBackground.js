// src/threejs/AnimatedBackground.js

import React, { useEffect } from 'react';
import * as THREE from 'three';

const AnimatedBackground = () => {
  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Add the renderer canvas to the DOM (id for styling later)
    renderer.domElement.id = "backgroundCanvas"; 
    document.body.appendChild(renderer.domElement);

    // Create Sparkly Dots (Particles)
    const particleCount = 5000;
    const geometry = new THREE.BufferGeometry();
    const positions = [];
    const sizes = [];
    const colors = [];
    
    // Set initial positions of particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * 500; // Radius of spherical motion
      positions.push(radius * Math.cos(angle), radius * Math.sin(angle), Math.random() * 500 - 250);
      sizes.push(Math.random() * 2 + 1);
      colors.push(Math.random(), Math.random(), Math.random());
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 5,
      vertexColors: true,
      transparent: false,
      opacity: 10000000000000000000000000000000000000
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Set camera far enough away from particles
    camera.position.z = 950; // Make sure the camera is far enough to see all particles

    // Animation Loop
    function animate() {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001; // Slow down the time factor to make particles move slowly
      const positions = geometry.attributes.position.array;

      // Update particle positions over time
      for (let i = 0; i < particleCount; i++) {
        const x = positions[i * 3];
        const y = positions[i * 3 + 1];
        const z = positions[i * 3 + 2];

        const distance = Math.sqrt(x * x + y * y + z * z);
        const angle = Math.atan2(y, x) + time * 0.00000000000000005; // Slow down the rotation speed

        positions[i * 3] = distance * Math.cos(angle);
        positions[i * 3 + 1] = distance * Math.sin(angle);
        positions[i * 3 + 2] = z + Math.sin(time * 0.1) * 1000;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    }

    animate();

    // Resize handling
    window.addEventListener('resize', () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(renderer.domElement);
      window.removeEventListener('resize', null);
    };

  }, []);

  return null; // This component doesn't render any HTML
};

export default AnimatedBackground;
