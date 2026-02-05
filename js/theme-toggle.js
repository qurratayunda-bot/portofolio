// theme-toggle.js - Dark/Light Mode Toggle Functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('Theme toggle initialized');
    
    // Create theme toggle button
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    themeToggle.setAttribute('aria-label', 'Toggle dark mode');
    themeToggle.setAttribute('title', 'Toggle dark/light mode');
    
    // Insert theme toggle in navigation
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.appendChild(themeToggle);
        
        // Add click event listener
        themeToggle.addEventListener('click', toggleTheme);
        
        // Initialize theme based on saved preference or system preference
        initializeTheme();
        
        // Add theme change animation
        setupThemeTransitions();
    } else {
        console.warn('Navbar not found, theme toggle not added');
    }
});

// Initialize theme on page load
function initializeTheme() {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    // Check for system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        setTheme('dark');
    } else {
        setTheme('light');
    }
}

// Toggle between dark and light mode
function toggleTheme() {
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    setTheme(newTheme);
    
    // Save preference to localStorage
    localStorage.setItem('portfolio-theme', newTheme);
    
    // Trigger custom event for other components
    document.dispatchEvent(new CustomEvent('themeChanged', {
        detail: { theme: newTheme }
    }));
    
    // Add animation to button
    const button = document.querySelector('.theme-toggle');
    button.classList.add('theme-toggle-animate');
    setTimeout(() => {
        button.classList.remove('theme-toggle-animate');
    }, 300);
}

// Set theme to specified mode
function setTheme(theme) {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            themeToggle.setAttribute('title', 'Switch to light mode');
        }
    } else {
        body.classList.remove('dark-mode');
        if (themeToggle) {
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            themeToggle.setAttribute('title', 'Switch to dark mode');
        }
    }
    
    // Update meta theme-color for mobile browsers
    updateMetaThemeColor(theme);
    
    // Log theme change for debugging
    console.log(`Theme changed to: ${theme}`);
}

// Update meta theme-color for mobile browsers
function updateMetaThemeColor(theme) {
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.head.appendChild(metaThemeColor);
    }
    
    if (theme === 'dark') {
        metaThemeColor.content = '#121212';
    } else {
        metaThemeColor.content = '#2563eb';
    }
}

// Setup smooth transitions for theme changes
function setupThemeTransitions() {
    const style = document.createElement('style');
    style.textContent = `
        /* Smooth transitions for theme changes */
        body,
        .header,
        .hero,
        .highlights,
        .highlight-card,
        .quick-link-card,
        .footer,
        .btn,
        .navbar,
        .nav-links {
            transition: background-color 0.3s ease, 
                       color 0.3s ease, 
                       border-color 0.3s ease,
                       box-shadow 0.3s ease;
        }
        
        /* Disable transitions during initial load */
        body.preload * {
            transition: none !important;
        }
    `;
    document.head.appendChild(style);
    
    // Remove preload class after page loads
    setTimeout(() => {
        document.body.classList.remove('preload');
    }, 100);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    // Only apply system preference if no user preference is saved
    if (!localStorage.getItem('portfolio-theme')) {
        const newTheme = e.matches ? 'dark' : 'light';
        setTheme(newTheme);
    }
});

// Export functions for use in other scripts
window.themeToggle = {
    toggle: toggleTheme,
    setTheme: setTheme,
    getCurrentTheme: () => document.body.classList.contains('dark-mode') ? 'dark' : 'light'
};