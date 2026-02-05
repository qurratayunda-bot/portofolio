// main.js - Main JavaScript for Portfolio Website
// Note: Dark/Light Mode functionality has been moved to theme-toggle.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio website loaded successfully!');
    
    // Remove preload class to enable animations
    document.body.classList.remove('preload');
    
    // =============== NAVIGATION ===============
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Mobile Navigation Toggle
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
            
            // Toggle aria-expanded attribute for accessibility
            const isExpanded = this.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
        
        // Close mobile menu when clicking on a link
        const navLinksItems = document.querySelectorAll('.nav-links a');
        navLinksItems.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navLinks.contains(event.target) && 
                !hamburger.contains(event.target) && 
                navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu on escape key press
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                body.style.overflow = '';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
    
    // Set active navigation based on current page
    function setActiveNav() {
        const currentPage = window.location.pathname;
        const navItems = document.querySelectorAll('.nav-links a');
        
        navItems.forEach(item => {
            const itemHref = item.getAttribute('href');
            
            // Remove active class from all items first
            item.classList.remove('active');
            
            // Check if current page matches nav item
            if (itemHref === 'index.html' && (currentPage.endsWith('/') || currentPage.endsWith('index.html'))) {
                item.classList.add('active');
            } else if (itemHref === 'resume.html' && currentPage.includes('resume.html')) {
                item.classList.add('active');
            } else if (itemHref === 'projects.html' && currentPage.includes('projects.html')) {
                item.classList.add('active');
            } else if (itemHref === 'contact.html' && currentPage.includes('contact.html')) {
                item.classList.add('active');
            }
        });
    }
    
    setActiveNav();
    
    // =============== SMOOTH SCROLLING ===============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#' || href === '#!') return;
            
            // Check if it's an on-page anchor
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash without scrolling
                    history.pushState(null, null, href);
                }
            }
        });
    });
    
    // =============== HEADER SCROLL EFFECT ===============
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    let ticking = false;
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (!ticking) {
                window.requestAnimationFrame(function() {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    
                    // Add shadow when scrolled
                    if (scrollTop > 50) {
                        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
                        header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
                        
                        // For dark mode support
                        if (document.body.classList.contains('dark-mode')) {
                            header.style.backgroundColor = 'rgba(30, 30, 30, 0.98)';
                        }
                    } else {
                        header.style.boxShadow = 'none';
                        header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                        
                        // For dark mode support
                        if (document.body.classList.contains('dark-mode')) {
                            header.style.backgroundColor = 'rgba(30, 30, 30, 0.95)';
                        }
                    }
                    
                    // Hide/show header on scroll (optional)
                    if (scrollTop > lastScrollTop && scrollTop > 200) {
                        // Scrolling down
                        header.style.transform = 'translateY(-100%)';
                    } else {
                        // Scrolling up
                        header.style.transform = 'translateY(0)';
                    }
                    
                    lastScrollTop = scrollTop;
                    ticking = false;
                });
                
                ticking = true;
            }
        });
    }
    
    // =============== ANIMATIONS ON SCROLL ===============
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                
                // Add delay for staggered animations
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
                
                // Special animation for progress bars
                if (entry.target.classList.contains('progress-fill')) {
                    const width = entry.target.getAttribute('data-width') || '100%';
                    setTimeout(() => {
                        entry.target.style.width = width;
                    }, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe elements to animate
    const elementsToAnimate = document.querySelectorAll(
        '.highlight-card, .quick-link-card, .education-item, .certificate, ' +
        '.skill-category, .experience-category, .project-card, .contact-method, ' +
        '.profile-summary'
    );
    
    elementsToAnimate.forEach((element, index) => {
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Add staggered delay
        element.dataset.delay = index * 100;
        
        observer.observe(element);
    });
    
    // =============== UPDATE CURRENT YEAR IN FOOTER ===============
    const currentYear = new Date().getFullYear();
    const yearElements = document.querySelectorAll('#currentYear');
    yearElements.forEach(element => {
        element.textContent = currentYear;
    });
    
    // =============== LAZY LOADING FOR IMAGES ===============
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, imgObserver) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const lazyImage = entry.target;
                    
                    // Load the image
                    if (lazyImage.dataset.src) {
                        lazyImage.src = lazyImage.dataset.src;
                        
                        // Remove data-src attribute
                        delete lazyImage.dataset.src;
                    }
                    
                    // Add loaded class
                    lazyImage.classList.add('loaded');
                    
                    // Stop observing
                    imgObserver.unobserve(lazyImage);
                }
            });
        }, {
            rootMargin: '50px 0px',
            threshold: 0.01
        });
        
        // Observe all lazy images
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    } else {
        // Fallback for older browsers
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.classList.add('loaded');
        });
    }
    
    // =============== LOADING ANIMATION ===============
    window.addEventListener('load', function() {
        // Remove loading state
        const loader = document.querySelector('.page-loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
        
        // Add loaded class to body for animations
        document.body.classList.add('loaded');
        
        // Initialize photo features
        initializePhotoFeatures();
        
        // Log page load completion
        console.log('Page fully loaded and ready');
    });
    
    // =============== BACK TO TOP BUTTON ===============
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
    backToTopButton.className = 'back-to-top';
    backToTopButton.setAttribute('aria-label', 'Back to top');
    backToTopButton.setAttribute('title', 'Back to top');
    document.body.appendChild(backToTopButton);
    
    // Style the back to top button
    const buttonStyles = document.createElement('style');
    buttonStyles.textContent = `
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
            transition: all 0.3s ease;
            opacity: 0;
            visibility: hidden;
            transform: translateY(20px);
            z-index: 999;
        }
        
        .dark-mode .back-to-top {
            background: var(--dark-primary-color);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }
        
        .back-to-top.visible {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }
        
        .back-to-top:hover {
            background: var(--primary-dark);
            transform: translateY(-3px);
            box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4);
        }
        
        .dark-mode .back-to-top:hover {
            background: var(--dark-primary-dark);
            box-shadow: 0 6px 20px rgba(59, 130, 246, 0.4);
        }
        
        @media (max-width: 768px) {
            .back-to-top {
                bottom: 20px;
                right: 20px;
                width: 45px;
                height: 45px;
                font-size: 1rem;
            }
        }
    `;
    document.head.appendChild(buttonStyles);
    
    // Show/hide back to top button
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        // Clear the timeout
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        
        // Use requestAnimationFrame for better performance
        scrollTimeout = window.requestAnimationFrame(function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
    });
    
    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Update focus for accessibility
        setTimeout(() => {
            document.querySelector('header')?.focus();
        }, 500);
    });
    
    // =============== PREVENT FORM SUBMISSION (for demo) ===============
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        // Only prevent submission on demo forms without action
        if (!form.action || form.action === '#' || form.action === '') {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Show success message
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn?.innerHTML;
                
                if (submitBtn) {
                    // Show loading state
                    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                    submitBtn.disabled = true;
                    
                    // Simulate API call
                    setTimeout(() => {
                        // Show success message
                        alert('Thank you for your message! This is a demo form. In a real application, this would submit data to a server.');
                        
                        // Reset form
                        this.reset();
                        
                        // Reset button
                        if (originalText) {
                            submitBtn.innerHTML = originalText;
                        } else {
                            submitBtn.innerHTML = 'Send Message';
                        }
                        submitBtn.disabled = false;
                    }, 1500);
                }
            });
        }
    });
    
    // =============== ADD PAGE TRANSITION EFFECTS ===============
    const pageLinks = document.querySelectorAll('a:not([href^="#"]):not([href^="mailto:"]):not([href^="tel:"]):not([target="_blank"])');
    
    pageLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Don't intercept if it's a download link or external link
            if (this.hasAttribute('download') || 
                this.getAttribute('href').startsWith('http') ||
                this.getAttribute('href').includes('://') ||
                this.getAttribute('href').startsWith('#')) {
                return;
            }
            
            // Add click animation
            this.classList.add('clicked');
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300);
        });
    });
    
    // =============== ADD LOADING STATE FOR BUTTONS ===============
    document.querySelectorAll('.btn:not([href])').forEach(button => {
        button.addEventListener('click', function(e) {
            // Only add loading for buttons that aren't links and aren't disabled
            if (!this.hasAttribute('href') && !this.disabled) {
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
                this.disabled = true;
                
                // Reset after 2 seconds (for demo)
                setTimeout(() => {
                    this.innerHTML = originalText;
                    this.disabled = false;
                }, 2000);
            }
        });
    });
    
    // =============== ACCESSIBILITY IMPROVEMENTS ===============
    
    // Add keyboard navigation to cards
    document.querySelectorAll('.quick-link-card, .highlight-card, .project-card').forEach(card => {
        card.setAttribute('tabindex', '0');
        
        // Add keyboard support for Enter key
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Add focus styles
        card.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--primary-color)';
            this.style.outlineOffset = '2px';
        });
        
        card.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // =============== PERFORMANCE OPTIMIZATIONS ===============
    
    // Debounce resize events
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            // Update any layout-dependent calculations here
            console.log('Window resized, performing layout updates');
        }, 250);
    });
    
    // =============== ERROR HANDLING ===============
    
    // Global error handler
    window.addEventListener('error', function(e) {
        console.error('Global error caught:', e.message, e.filename, e.lineno);
    });
    
    // Promise rejection handler
    window.addEventListener('unhandledrejection', function(e) {
        console.error('Unhandled promise rejection:', e.reason);
    });
    
    // =============== HELPER FUNCTIONS ===============
    
    // Initialize photo features
    window.initializePhotoFeatures = function() {
        console.log('Initializing photo features...');
        
        // Photo click animation
        const photoContainer = document.getElementById('photoContainer');
        if (photoContainer) {
            photoContainer.addEventListener('click', function() {
                this.classList.add('clicked');
                setTimeout(() => {
                    this.classList.remove('clicked');
                }, 300);
            });
        }
        
        // Check if photo loaded successfully
        const profilePhoto = document.getElementById('profilePhoto');
        if (profilePhoto) {
            // Add loading class initially
            if (!profilePhoto.complete) {
                profilePhoto.classList.add('loading');
            }
            
            // Check if image is already loaded
            if (profilePhoto.complete) {
                handlePhotoLoad(profilePhoto);
            } else {
                // Wait for image to load
                profilePhoto.addEventListener('load', function() {
                    handlePhotoLoad(this);
                });
                
                // Handle image load error
                profilePhoto.addEventListener('error', function() {
                    handlePhotoError(this);
                });
            }
        }
    };
    
    // Photo load handler
    window.handlePhotoLoad = function(imgElement) {
        console.log('Profile photo loaded successfully');
        imgElement.classList.remove('loading');
        imgElement.style.opacity = '0';
        
        // Fade in the photo
        setTimeout(() => {
            imgElement.style.transition = 'opacity 0.5s ease';
            imgElement.style.opacity = '1';
        }, 100);
    };
    
    // Photo error handler
    window.handlePhotoError = function(imgElement) {
        console.warn('Profile photo failed to load. Using fallback icon.');
        
        const container = imgElement.parentElement;
        if (container) {
            container.classList.add('error');
            
            // Remove the broken image
            imgElement.style.display = 'none';
            
            // Show user-friendly message
            const errorMsg = document.createElement('div');
            errorMsg.className = 'photo-error-message';
            errorMsg.innerHTML = `
                <i class="fas fa-exclamation-circle"></i>
                <p>Foto tidak dapat dimuat</p>
            `;
            container.appendChild(errorMsg);
        }
    };
    
    // =============== INITIALIZE ON DOM LOAD ===============
    
    // Set initial states
    if (document.querySelector('.page-loader')) {
        setTimeout(() => {
            document.querySelector('.page-loader').style.opacity = '1';
        }, 10);
    }
    
    // Log initialization complete
    console.log('Main.js initialization complete');
});

// Export functions for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setActiveNav: setActiveNav,
        initializePhotoFeatures: initializePhotoFeatures,
        handlePhotoLoad: handlePhotoLoad,
        handlePhotoError: handlePhotoError
    };
}