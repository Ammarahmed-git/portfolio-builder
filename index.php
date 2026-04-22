<?php require_once 'config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio Builder - 3D Magic ✨</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <!-- 3D Background Canvas -->
    <canvas id="bgCanvas"></canvas>
    
    <!-- Floating Particles -->
    <div id="particles"></div>

    <!-- Navigation -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
                <i class="fas fa-rocket"></i>
                <span>Portfolio3D</span>
            </div>
            <div class="nav-menu">
                <a href="#home" class="nav-link">Home</a>
                <a href="#builder" class="nav-link">Builder</a>
                <a href="#preview" class="nav-link">Preview</a>
                <a href="#export" class="nav-link">Export</a>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div class="hero-content">
            <h1 class="hero-title">
                Build Stunning <span class="gradient-text">3D Portfolios</span>
            </h1>
            <p class="hero-subtitle">Create jaw-dropping portfolio websites with drag & drop, 3D animations, and AI-powered design suggestions.</p>
            <button class="cta-button" onclick="scrollToBuilder()">
                <span>Start Building</span>
                <i class="fas fa-arrow-right"></i>
            </button>
        </div>
        <div class="hero-stats">
            <div class="stat">
                <span class="stat-number" data-target="5000">0</span>
                <span>Portfolios Created</span>
            </div>
            <div class="stat">
                <span class="stat-number" data-target="99">0</span>
                <span>% Satisfaction</span>
            </div>
        </div>
    </section>

    <!-- Portfolio Builder -->
    <section id="builder" class="builder-section">
        <div class="container">
            <h2 class="section-title">Portfolio Builder</h2>
            <div class="builder-grid">
                <!-- Profile Section -->
                <div class="builder-panel profile-panel">
                    <h3><i class="fas fa-user"></i> Profile</h3>
                    <form id="profileForm">
                        <input type="text" id="name" placeholder="Your Name" required>
                        <input type="email" id="email" placeholder="Email">
                        <textarea id="bio" placeholder="Short bio..."></textarea>
                        <input type="file" id="profilePic" accept="image/*">
                    </form>
                </div>

                <!-- Skills Section -->
                <div class="builder-panel skills-panel">
                    <h3><i class="fas fa-chart-line"></i> Skills</h3>
                    <div id="skillsList"></div>
                    <input type="text" id="newSkill" placeholder="Add skill...">
                    <button type="button" onclick="addSkill()">Add Skill</button>
                </div>

                <!-- Projects Section -->
                <div class="builder-panel projects-panel">
                    <h3><i class="fas fa-project-diagram"></i> Projects</h3>
                    <div id="projectsList"></div>
                    <button type="button" onclick="addProject()">+ New Project</button>
                </div>
            </div>
            <div class="builder-actions">
                <button class="save-btn" onclick="savePortfolio()">
                    <i class="fas fa-save"></i> Save Portfolio
                </button>
                <button class="preview-btn" onclick="previewPortfolio()">
                    <i class="fas fa-eye"></i> Preview
                </button>
            </div>
        </div>
    </section>

    <!-- Preview Section -->
    <section id="preview" class="preview-section">
        <div class="container">
            <h2 class="section-title">Live Preview</h2>
            <div id="portfolioPreview" class="portfolio-preview"></div>
        </div>
    </section>

    <!-- Export Section -->
    <section id="export" class="export-section">
        <div class="container">
            <h2>Export Your Portfolio</h2>
            <div class="export-options">
                <button class="export-btn" onclick="exportHTML()">
                    <i class="fas fa-file-code"></i> Export HTML
                </button>
                <button class="export-btn" onclick="exportJSON()">
                    <i class="fas fa-file-code"></i> Export JSON
                </button>
            </div>
        </section>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>