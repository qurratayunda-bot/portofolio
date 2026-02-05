// Projects Page JavaScript - With Working Video Modal

document.addEventListener('DOMContentLoaded', function() {
    console.log('Projects page loaded - initializing...');
    
    // =============== PROJECT FILTERING ===============
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    // Initialize all projects as visible
    projectCards.forEach(card => {
        card.classList.add('visible');
    });
    
    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filterValue = this.getAttribute('data-filter');
            
            // Filter projects
            let visibleCount = 0;
            projectCards.forEach(card => {
                const categories = card.getAttribute('data-categories');
                
                if (filterValue === 'all' || categories.includes(filterValue)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 10);
                    visibleCount++;
                } else {
                    card.classList.remove('visible');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
            
            // Update project count
            updateProjectCount(visibleCount);
        });
    });
    
    // Update project count display
    function updateProjectCount(count) {
        const countElement = document.querySelector('.view-more-note');
        if (countElement) {
            countElement.textContent = `Showing ${count} projects`;
        }
    }
    
    // Initialize project count
    updateProjectCount(projectCards.length);
    
    // =============== REMOVE LOAD MORE BUTTON ===============
    const loadMoreButton = document.getElementById('loadMoreProjects');
    if (loadMoreButton) {
        loadMoreButton.style.display = 'none';
        loadMoreButton.remove();
    }
    
    // =============== VIDEO MODAL FUNCTIONALITY ===============
    // Function to initialize video buttons
    function initializeVideoButtons() {
        const demoButtons = document.querySelectorAll('.demo-btn');
        console.log(`Found ${demoButtons.length} demo buttons`);
        
        demoButtons.forEach((button, index) => {
            // Remove any existing event listeners
            const newButton = button.cloneNode(true);
            button.parentNode.replaceChild(newButton, button);
            
            // Add click event listener
            newButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                const videoSrc = this.getAttribute('data-video-src');
                const projectCard = this.closest('.project-card');
                const projectTitle = projectCard.querySelector('.project-title').textContent;
                
                console.log(`Button ${index + 1} clicked:`, {
                    videoSrc: videoSrc,
                    projectTitle: projectTitle,
                    button: this
                });
                
                // Check if video modal function exists
                if (typeof window.openVideoModal === 'function') {
                    console.log('Calling openVideoModal function');
                    window.openVideoModal(videoSrc, projectTitle);
                } else {
                    console.error('openVideoModal function not found!');
                    
                    // Create a simple alert as fallback
                    alert(`Demo Video: ${projectTitle}\n\nVideo source: ${videoSrc}\n\nThis video player will open when the video modal is properly loaded.`);
                    
                    // Try to open video in new tab
                    if (videoSrc && videoSrc !== '#') {
                        window.open(videoSrc, '_blank');
                    }
                }
            });
            
            // Add hover effects
            newButton.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px)';
            });
            
            newButton.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Initialize video buttons
    initializeVideoButtons();
    
    // =============== KEYBOARD NAVIGATION ===============
    projectCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const demoBtn = this.querySelector('.demo-btn');
                if (demoBtn) {
                    demoBtn.click();
                }
            }
        });
    });
    
    // =============== HOVER EFFECTS ===============
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
    
    // =============== STATS COUNTER ANIMATION ===============
    const statNumbers = document.querySelectorAll('.stat-card h3');
    
    statNumbers.forEach(stat => {
        const targetNumber = parseInt(stat.textContent);
        let currentNumber = 0;
        const increment = targetNumber / 30;
        const duration = 1000;
        const stepTime = duration / 30;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            if (currentNumber >= targetNumber) {
                currentNumber = targetNumber;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(currentNumber) + '+';
        }, stepTime);
    });
    
    // =============== FIX BUTTON COLORS ===============
    function fixButtonColors() {
        const demoButtons = document.querySelectorAll('.demo-btn');
        demoButtons.forEach(button => {
            // Ensure consistent button styling
            button.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
            button.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.3)';
            button.style.border = 'none';
            button.style.cursor = 'pointer';
            button.style.transition = 'all 0.3s ease';
        });
    }
    
    fixButtonColors();
    
    // =============== DEBUGGING INFO ===============
    console.log('Projects page initialization complete');
    console.log(`Total projects: ${projectCards.length}`);
    console.log(`Video modal function available: ${typeof window.openVideoModal === 'function'}`);
    
    // =============== FALLBACK VIDEO MODAL ===============
    // Define fallback function in case video-modal.js doesn't load
    if (typeof window.openVideoModal === 'undefined') {
        console.log('Defining fallback openVideoModal function');
        
        window.openVideoModal = function(videoSrc, title) {
            console.log('Fallback openVideoModal called:', videoSrc, title);
            
            // Create modal container
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.95);
                z-index: 9999;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
            `;
            
            // Create modal content
            modal.innerHTML = `
                <div style="
                    background: #1a1a1a;
                    border-radius: 12px;
                    padding: 0;
                    max-width: 900px;
                    width: 100%;
                    box-shadow: 0 20px 60px rgba(0,0,0,0.7);
                    position: relative;
                ">
                    <div style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 1.5rem 2rem;
                        background: #2d2d2d;
                        border-bottom: 1px solid #404040;
                        border-radius: 12px 12px 0 0;
                    ">
                        <h3 style="color: white; margin: 0; font-size: 1.4rem;">${title || 'Project Demo'}</h3>
                        <button id="closeFallbackModal" style="
                            background: none;
                            border: none;
                            color: #a0a0a0;
                            font-size: 2rem;
                            cursor: pointer;
                            padding: 0;
                            width: 40px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-radius: 50%;
                        ">&times;</button>
                    </div>
                    <div style="padding: 2rem; text-align: center;">
                        <div style="
                            width: 100%;
                            height: 300px;
                            background: #000;
                            border-radius: 8px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            margin-bottom: 1.5rem;
                        ">
                            <i class="fas fa-video" style="font-size: 4rem; color: #666;"></i>
                        </div>
                        <p style="color: #a0a0a0; margin-bottom: 1rem;">
                            Video Source: <code style="background: #2d2d2d; padding: 0.3rem 0.5rem; border-radius: 4px;">${videoSrc}</code>
                        </p>
                        <p style="color: #a0a0a0; margin-bottom: 2rem;">
                            This is a fallback modal. The main video player is not available.
                        </p>
                        <div style="display: flex; gap: 1rem; justify-content: center;">
                            <button onclick="window.open('${videoSrc}', '_blank')" style="
                                padding: 0.8rem 1.5rem;
                                background: linear-gradient(135deg, #3b82f6, #2563eb);
                                color: white;
                                border: none;
                                border-radius: 6px;
                                cursor: pointer;
                                font-weight: 600;
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                            ">
                                <i class="fas fa-external-link-alt"></i> Open Video
                            </button>
                            <button id="closeModalBtn" style="
                                padding: 0.8rem 1.5rem;
                                background: #6b7280;
                                color: white;
                                border: none;
                                border-radius: 6px;
                                cursor: pointer;
                                font-weight: 600;
                                display: flex;
                                align-items: center;
                                gap: 0.5rem;
                            ">
                                <i class="fas fa-times"></i> Close
                            </button>
                        </div>
                    </div>
                </div>
            `;
            
            // Add to document
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            // Add close functionality
            const closeBtn = document.getElementById('closeFallbackModal');
            const closeModalBtn = document.getElementById('closeModalBtn');
            
            function closeModal() {
                modal.remove();
                document.body.style.overflow = '';
            }
            
            closeBtn.addEventListener('click', closeModal);
            closeModalBtn.addEventListener('click', closeModal);
            
            // Close when clicking outside
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModal();
                }
            });
            
            // Close with Escape key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        };
        
        console.log('Fallback video modal function defined');
    }
});

// Ensure video modal function exists globally
if (typeof window.openVideoModal === 'undefined') {
    window.openVideoModal = function(videoSrc, title) {
        console.warn('Video modal function called but not properly loaded');
        alert(`Video Player Not Ready\n\nTitle: ${title}\nVideo: ${videoSrc}\n\nPlease ensure video-modal.js is properly loaded.`);
    };
}