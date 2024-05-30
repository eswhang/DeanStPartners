        var scene, camera, renderer, logo;
    
        init();
        animate();
    
        function init() {
            // Create a scene
            scene = new THREE.Scene();
    
            // Create a camera 
            camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
            camera.position.set(0, 0, 8);
    
            // Create a WebGL renderer
            renderer = new THREE.WebGLRenderer({ alpha: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            document.getElementById('logoContainer').appendChild(renderer.domElement);
    
            // Add lights
            var ambientLight = new THREE.AmbientLight(0x404040);
            scene.add(ambientLight);
            var directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
            directionalLight.position.set(1, 1, 1);
            scene.add(directionalLight);
    
            // Load the 3D logo
            var loader = new THREE.GLTFLoader();
            loader.load('TreePyramidTest.glb', function(gltf) {
                logo = gltf.scene;
                logo.scale.set(1, 1, 1); // Display the object at its original size
                logo.position.set(0, -1.5, 0); 
                scene.add(logo);
            }, undefined, function(error) {
                console.error(error);
            });
        }
    
        function animate() {
            requestAnimationFrame(animate);
    
            // Rotate the logo
            if (logo) {
                logo.rotation.y += 0.01;
            }
    
            renderer.render(scene, camera);
        }