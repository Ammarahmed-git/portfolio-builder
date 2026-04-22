// Global portfolio data
let portfolioData = {
    profile: { name: '', email: '', bio: '', avatar: '' },
    skills: [],
    projects: []
};

// 3D Background Scene
let scene, camera, renderer;
function init3D() {
    const canvas = document.getElementById('bgCanvas');
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    
    renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Floating geometric shapes
    const geometries = [new THREE.TorusGeometry(0.5, 0.2, 16, 100), 
                       new THREE.OctahedronGeometry(0.5),
                       new THREE.DodecahedronGeometry(0.5)];
    
    geometries.forEach((geo, i) => {
        const material = new THREE.MeshBasicMaterial({ 
            color: new THREE.Color().setHSL(i * 0.3, 0.8, 0.7),
            wireframe: true 
        });
        const mesh = new THREE.Mesh(geo, material);
        mesh.position.x = (i - 1) * 2;
        scene.add(mesh);
    });
    
    animate3D();
}

function animate3D() {
    requestAnimationFrame(animate3D);
    scene.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
            child.rotation.x += 0.01;
            child.rotation.y += 0.01;
            child.position.z = Math.sin(Date.now() * 0.001 + i) * 0.5;
        }
    });
    renderer.render(scene, camera);
}

// Particles effect
function createParticles() {
    const particles = document.getElementById('particles');
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px; height: 4px;
            background: radial-gradient(circle, #00d4ff, transparent);
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: ${Math.random() * 100}vh;
            animation: float ${3 + Math.random() * 4}s infinite linear;
            opacity: ${Math.random() * 0.5 + 0.2};
        `;
        particles.appendChild(particle);
    }
}

// Portfolio Builder Functions
function addSkill() {
    const skillInput = document.getElementById('newSkill');
    const skill = skillInput.value.trim();
    if (skill) {
        portfolioData.skills.push(skill);
        renderSkills();
        skillInput.value = '';
    }
}

function renderSkills() {
    const container = document.getElementById('skillsList');
    container.innerHTML = portfolioData.skills.map(skill => `
        <div class="skill-item">
            <span>${skill}</span>
            <button onclick="removeSkill('${skill}')">×</button>
        </div>
    `).join('');
}

function removeSkill(skill) {
    portfolioData.skills = portfolioData.skills.filter(s => s !== skill);
    renderSkills();
}

function addProject() {
    const project = {
        title: `Project ${portfolioData.projects.length + 1}`,
        description: 'Project description...',
        link: '',
        image: ''
    };
    portfolioData.projects.push(project);
    renderProjects();
}

function renderProjects() {
    const container = document.getElementById('projectsList');
    container.innerHTML = portfolioData.projects.map((project, i) => `
        <div class="project-item">
            <div>
                <input value="${project.title}" onchange="updateProject(${i}, 'title', this.value)">
                <textarea placeholder="Description..." onchange="updateProject(${i}, 'description', this.value)">${project.description}</textarea>
            </div>
            <button onclick="removeProject(${i})">×</button>
        </div>
    `).join('');
}

function updateProject(index, field, value) {
    portfolioData.projects[index][field] = value;
}

function removeProject(index) {
    portfolioData.projects.splice(index, 1);
    renderProjects();
}

function saveProfileData() {
    portfolioData.profile.name = document.getElementById('name').value;
    portfolioData.profile.email = document.getElementById('email').value;
    portfolioData.profile.bio = document.getElementById('bio').value;
}

function savePortfolio() {
    saveProfileData();
    
    fetch('index.php', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(portfolioData)
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert('✅ Portfolio saved successfully!');
        }
    });
}

function previewPortfolio() {
    saveProfileData();
    const preview = document.getElementById('portfolioPreview');
    preview.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <img src="${portfolioData.profile.avatar || 'https://via.placeholder.com/150'}" 
                 style="width: 150px; height: 150px; border-radius: 50%; margin-bottom: 1rem;">
            <h1>${portfolioData.profile.name || 'Your Name'}</h1>
            <p>${portfolioData.profile.bio || 'Creative professional'}</p>
            
            <div style="margin: 2rem 0;">
                <h3>Skills</h3>
                ${portfolioData.skills.map(skill => `<span style="background: linear-gradient(45deg, #00d4ff, #ff00ff); padding: 0.5rem 1rem; margin: 0.5rem; border-radius: 20px; display: inline-block;">${skill}</span>`).join('')}
            </div>
            
            <div>
                <h3>Projects</h3>
                ${portfolioData.projects.map(p => `<div style="background: rgba(255,255,255,0.1); padding: 1rem; margin: 1rem 0; border-radius: 10px;">
                    <h4>${p.title}</h4>
                    <p>${p.description}</p>
                </div>`).join('')}
            </div>
        </div>
    `;
    document.getElementById('preview').scrollIntoView({behavior: 'smooth'});
}

function exportHTML() {
    saveProfileData();
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <title>${portfolioData.profile.name} - Portfolio</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <style>
        /* Include your CSS here */
        body { font-family: 'Poppins', sans-serif; background: linear-gradient(135deg, #0c0c0c, #1a1a2e); color: white; }
        .profile { text-align: center; padding: 4rem 2rem; }
        .skills { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; margin: 2rem 0; }
        .skill-tag { background: linear-gradient(45deg, #00d4ff, #ff00ff); padding: 0.5rem 1.5rem; border-radius: 25px; }
    </style>
</head>
<body>
    <div class="profile">
        <img src="${portfolioData.profile.avatar}" style="width: 200px; height: 200px; border-radius: 50%;">
        <h1>${portfolioData.profile.name}</h1>
        <p>${portfolioData.profile.bio}</p>
        <div class="skills">
            ${portfolioData.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
    </div>
    <script>
        // 3D Background code here
    </script>
</body>
</html>`;
    
    const blob = new Blob([htmlContent], {type: 'text/html'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolio.html';
    a.click();
}

// Utility Functions
function scrollToBuilder() {
    document.getElementById('builder').scrollIntoView({behavior: 'smooth'});
}

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = stat.dataset.target;
        let count = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(count);
            }
        }, 20);
    });
}

// Intersection Observer for scroll animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });
    
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Profile picture upload
document.getElementById('profilePic').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            portfolioData.profile.avatar = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Window resize handler
window.addEventListener('resize', () => {
    if (renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    }
});

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
    init3D();
    createParticles();
    animateStats();
    initScrollAnimations();
    
    // Add initial project
    addProject();
    
    // Profile form sync
    document.getElementById('profileForm').addEventListener('input', saveProfileData);
});