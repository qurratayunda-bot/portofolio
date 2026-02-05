// photo.js - Photo handling functionality

document.addEventListener('DOMContentLoaded', function() {
    console.log('Photo.js loaded');
    
    // Initialize photo functionality
    initializePhotoModal();
    setupPhotoLoading();
    setupPhotoHoverEffects();
});

// Initialize photo modal
function initializePhotoModal() {
    const photoContainer = document.getElementById('photoContainer');
    const photoModal = document.getElementById('photoModal');
    const modalClose = document.getElementById('modalClose');
    const profilePhoto = document.getElementById('profilePhoto');
    const modalPhoto = document.getElementById('modalPhoto');
    
    if (!photoContainer || !photoModal || !modalClose || !profilePhoto || !modalPhoto) {
        console.log('Photo modal elements not found, skipping initialization');
        return;
    }
    
    // Open modal when photo is clicked
    photoContainer.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Set modal photo source
        modalPhoto.src = profilePhoto.src;
        modalPhoto.alt = profilePhoto.alt + ' - Full Size';
        
        // Show modal
        photoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Add escape key listener
        document.addEventListener('keydown', handleEscapeKey);
        
        // Log for debugging
        console.log('Photo modal opened');
    });
    
    // Close modal when close button is clicked
    modalClose.addEventListener('click', function() {
        closePhotoModal();
    });
    
    // Close modal when clicking outside the image
    photoModal.addEventListener('click', function(e) {
        if (e.target === this) {
            closePhotoModal();
        }
    });
    
    // Handle escape key to close modal
    function handleEscapeKey(e) {
        if (e.key === 'Escape' || e.keyCode === 27) {
            closePhotoModal();
        }
    }
    
    // Close modal function
    function closePhotoModal() {
        photoModal.classList.remove('active');
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscapeKey);
        
        // Log for debugging
        console.log('Photo modal closed');
    }
    
    // Preload modal image to avoid flash
    modalPhoto.addEventListener('load', function() {
        console.log('Modal photo loaded successfully');
        this.classList.add('loaded');
    });
    
    modalPhoto.addEventListener('error', function() {
        console.warn('Modal photo failed to load');
        this.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%23f0f9ff"/><text x="50%" y="50%" font-family="Arial" font-size="20" fill="%232563eb" text-anchor="middle" dy=".3em">Photo not available</text></svg>';
        this.alt = 'Photo not available';
    });
}

// Setup photo loading and error handling
function setupPhotoLoading() {
    const profilePhoto = document.getElementById('profilePhoto');
    const photoContainer = document.getElementById('photoContainer');
    
    if (!profilePhoto || !photoContainer) return;
    
    // Check if image is already loaded
    if (profilePhoto.complete) {
        handlePhotoLoadSuccess(profilePhoto);
    } else {
        // Add loading class
        profilePhoto.classList.add('loading');
        
        // Wait for image to load
        profilePhoto.addEventListener('load', function() {
            handlePhotoLoadSuccess(this);
        });
        
        // Handle image load error
        profilePhoto.addEventListener('error', function() {
            handlePhotoLoadError(this, photoContainer);
        });
    }
    
    // Add click animation
    photoContainer.addEventListener('click', function() {
        this.classList.add('clicked');
        setTimeout(() => {
            this.classList.remove('clicked');
        }, 300);
    });
}

// Setup photo hover effects
function setupPhotoHoverEffects() {
    const photoContainer = document.getElementById('photoContainer');
    const profilePhoto = document.getElementById('profilePhoto');
    
    if (!photoContainer || !profilePhoto) return;
    
    // Add hover effects
    photoContainer.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    photoContainer.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

// Handle successful photo load
function handlePhotoLoadSuccess(imgElement) {
    console.log('Profile photo loaded successfully');
    
    // Remove loading class
    imgElement.classList.remove('loading');
    
    // Set initial opacity
    imgElement.style.opacity = '0';
    
    // Fade in the photo
    setTimeout(() => {
        imgElement.style.transition = 'opacity 0.5s ease';
        imgElement.style.opacity = '1';
        
        // Remove transition after fade-in
        setTimeout(() => {
            imgElement.style.transition = '';
        }, 500);
    }, 100);
    
    // Check if photo needs any adjustments
    adjustPhotoIfNeeded(imgElement);
}

// Handle photo load error
function handlePhotoLoadError(imgElement, container) {
    console.warn('Profile photo failed to load. Using fallback.');
    
    // Add error class to container
    container.classList.add('error');
    
    // Hide the broken image
    imgElement.style.display = 'none';
    
    // Create and show error message
    const errorMsg = document.createElement('div');
    errorMsg.className = 'photo-error-message';
    errorMsg.innerHTML = `
        <i class="fas fa-exclamation-circle"></i>
        <p>Foto tidak dapat dimuat</p>
    `;
    
    // Add error message to container
    container.appendChild(errorMsg);
    
    // Log error details
    console.error('Image source that failed:', imgElement.src);
}

// Adjust photo if needed (for specific aspect ratios)
function adjustPhotoIfNeeded(imgElement) {
    const naturalWidth = imgElement.naturalWidth;
    const naturalHeight = imgElement.naturalHeight;
    
    // Only adjust if we have valid dimensions
    if (naturalWidth > 0 && naturalHeight > 0) {
        const aspectRatio = naturalWidth / naturalHeight;
        
        console.log('Photo dimensions:', naturalWidth, 'x', naturalHeight, 'Aspect ratio:', aspectRatio.toFixed(2));
        
        // If photo is not square, we might need to adjust object-position
        if (Math.abs(aspectRatio - 1) > 0.1) {
            console.log('Photo is not perfectly square, adjusting object-position for better crop');
            
            // For portrait photos (height > width)
            if (aspectRatio < 1) {
                imgElement.style.objectPosition = 'center 25%';
            }
            // For landscape photos (width > height)
            else {
                imgElement.style.objectPosition = 'center 50%';
            }
        }
    }
}

// Export functions for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializePhotoModal,
        setupPhotoLoading,
        setupPhotoHoverEffects,
        handlePhotoLoadSuccess,
        handlePhotoLoadError,
        adjustPhotoIfNeeded
    };
}