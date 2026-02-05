// Video Modal JavaScript - Complete Solution

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('Video modal script loaded successfully');
    
    // Get modal elements
    const videoModal = document.getElementById('videoModal');
    const video = document.getElementById('projectVideo');
    const closeButton = document.querySelector('.video-modal-close');
    const videoTitle = document.getElementById('videoTitle');
    const videoDuration = document.getElementById('videoDuration');
    
    // Check if essential elements exist
    if (!videoModal) {
        console.error('CRITICAL: Video modal element not found!');
        return;
    }
    
    if (!video) {
        console.error('CRITICAL: Video element not found!');
        return;
    }
    
    console.log('All essential video modal elements found');
    
    // =============== MODAL CONTROLS ===============
    
    // Close button functionality
    if (closeButton) {
        closeButton.addEventListener('click', closeVideoModal);
        console.log('Close button initialized');
    }
    
    // Close modal when clicking outside
    videoModal.addEventListener('click', function(e) {
        if (e.target === videoModal) {
            closeVideoModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoModal.style.display === 'block') {
            closeVideoModal();
        }
    });
    
    // Function to close video modal
    function closeVideoModal() {
        console.log('Closing video modal');
        videoModal.style.display = 'none';
        document.body.style.overflow = '';
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    }
    
    // =============== VIDEO CONTROLS ===============
    
    // Get control buttons
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    const fullscreenBtn = document.getElementById('fullscreenBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    // Play/Pause button
    if (playPauseBtn) {
        playPauseBtn.addEventListener('click', function() {
            console.log('Play/Pause clicked');
            if (video.paused) {
                video.play().catch(e => {
                    console.error('Play failed:', e);
                });
            } else {
                video.pause();
            }
        });
    }
    
    // Mute/Unmute button
    if (muteBtn) {
        muteBtn.addEventListener('click', function() {
            console.log('Mute/Unmute clicked');
            video.muted = !video.muted;
            updateMuteButton();
        });
    }
    
    // Fullscreen button
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener('click', toggleFullscreen);
    }
    
    // Download button
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('Download clicked');
            const videoSrc = video.src;
            if (videoSrc && videoSrc !== '') {
                const link = document.createElement('a');
                link.href = videoSrc;
                link.download = 'project-demo.mp4';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else {
                alert('Video source not available for download');
            }
        });
    }
    
    // =============== VIDEO EVENT HANDLERS ===============
    
    // Update play/pause button
    video.addEventListener('play', function() {
        console.log('Video playing');
        updatePlayPauseButton(true);
    });
    
    video.addEventListener('pause', function() {
        console.log('Video paused');
        updatePlayPauseButton(false);
    });
    
    // Update duration display
    video.addEventListener('loadedmetadata', function() {
        console.log('Video metadata loaded');
        if (videoDuration) {
            const duration = formatTime(video.duration);
            videoDuration.textContent = duration;
        }
    });
    
    // Update mute button
    video.addEventListener('volumechange', updateMuteButton);
    
    // Handle video errors
    video.addEventListener('error', function(e) {
        console.error('Video error:', video.error);
        showVideoError('Video failed to load. Please check the file path.');
    });
    
    // =============== HELPER FUNCTIONS ===============
    
    // Update play/pause button
    function updatePlayPauseButton(isPlaying) {
        if (playPauseBtn) {
            playPauseBtn.innerHTML = isPlaying ? 
                '<i class="fas fa-pause"></i> Pause' : 
                '<i class="fas fa-play"></i> Play';
        }
    }
    
    // Update mute button
    function updateMuteButton() {
        if (muteBtn) {
            muteBtn.innerHTML = video.muted ? 
                '<i class="fas fa-volume-mute"></i> Unmute' : 
                '<i class="fas fa-volume-up"></i> Mute';
        }
    }
    
    // Toggle fullscreen
    function toggleFullscreen() {
        console.log('Toggle fullscreen');
        if (!document.fullscreenElement) {
            videoModal.classList.add('fullscreen');
            if (videoModal.requestFullscreen) {
                videoModal.requestFullscreen();
            }
            if (fullscreenBtn) {
                fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> Exit Fullscreen';
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            videoModal.classList.remove('fullscreen');
            if (fullscreenBtn) {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
            }
        }
    }
    
    // Format time in MM:SS format
    function formatTime(seconds) {
        if (isNaN(seconds)) return '00:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    
    // Show video error message
    function showVideoError(message) {
        console.error('Showing video error:', message);
        
        const videoContainer = document.querySelector('.video-container');
        if (!videoContainer) return;
        
        // Remove existing error
        const existingError = videoContainer.querySelector('.video-error');
        if (existingError) existingError.remove();
        
        // Remove loading indicator
        const loadingIndicator = videoContainer.querySelector('.video-loading');
        if (loadingIndicator) loadingIndicator.remove();
        
        // Create error message
        const errorDiv = document.createElement('div');
        errorDiv.className = 'video-error';
        errorDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            <h4>Video Error</h4>
            <p>${message}</p>
            <p><small>Check browser console for details</small></p>
            <button class="video-control-btn" onclick="this.closest('.video-error').remove()">
                <i class="fas fa-times"></i> Dismiss
            </button>
        `;
        
        videoContainer.appendChild(errorDiv);
    }
    
    // Show loading indicator
    function showLoadingIndicator() {
        const videoContainer = document.querySelector('.video-container');
        if (!videoContainer) return;
        
        // Remove existing loading indicator
        const existingLoading = videoContainer.querySelector('.video-loading');
        if (existingLoading) existingLoading.remove();
        
        // Remove existing error
        const existingError = videoContainer.querySelector('.video-error');
        if (existingError) existingError.remove();
        
        // Create loading indicator
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'video-loading';
        loadingDiv.innerHTML = `
            <div class="video-loading-spinner"></div>
            <div class="video-loading-text">Loading video...</div>
        `;
        
        videoContainer.appendChild(loadingDiv);
    }
    
    // Hide loading indicator
    function hideLoadingIndicator() {
        const loadingIndicator = document.querySelector('.video-loading');
        if (loadingIndicator) {
            loadingIndicator.remove();
        }
    }
    
    // Exit fullscreen when fullscreen mode changes
    document.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
            videoModal.classList.remove('fullscreen');
            if (fullscreenBtn) {
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> Fullscreen';
            }
        }
    });
    
    // =============== KEYBOARD SHORTCUTS ===============
    document.addEventListener('keydown', function(e) {
        // Only handle shortcuts when modal is open
        if (videoModal.style.display !== 'block') return;
        
        // Prevent default for media keys
        if (['Space', 'KeyK', 'KeyM', 'KeyF', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
            e.preventDefault();
        }
        
        switch(e.code) {
            case 'Space':
            case 'KeyK':
                // Play/Pause
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
                break;
                
            case 'KeyM':
                // Mute/Unmute
                video.muted = !video.muted;
                break;
                
            case 'KeyF':
                // Fullscreen
                toggleFullscreen();
                break;
                
            case 'ArrowLeft':
                // Rewind 5 seconds
                video.currentTime = Math.max(0, video.currentTime - 5);
                break;
                
            case 'ArrowRight':
                // Forward 5 seconds
                video.currentTime = Math.min(video.duration, video.currentTime + 5);
                break;
        }
    });
    
    console.log('Video modal controls initialized');
});

// =============== GLOBAL FUNCTION TO OPEN VIDEO MODAL ===============
window.openVideoModal = function(videoSrc, title) {
    console.log('openVideoModal called with:', { videoSrc, title });
    
    // Get modal elements
    const videoModal = document.getElementById('videoModal');
    const video = document.getElementById('projectVideo');
    const videoTitle = document.getElementById('videoTitle');
    const videoDuration = document.getElementById('videoDuration');
    
    // Validate elements
    if (!videoModal || !video) {
        console.error('Video modal elements missing!');
        alert('Video player is not available. Please refresh the page.');
        return;
    }
    
    // Reset previous video state
    video.pause();
    video.currentTime = 0;
    
    // Set video source and title
    video.src = videoSrc;
    
    if (videoTitle) {
        videoTitle.textContent = title || 'Project Demo';
    }
    
    if (videoDuration) {
        videoDuration.textContent = '--:--';
    }
    
    // Reset control buttons
    const playPauseBtn = document.getElementById('playPauseBtn');
    const muteBtn = document.getElementById('muteBtn');
    
    if (playPauseBtn) {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i> Play';
    }
    
    if (muteBtn) {
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i> Mute';
    }
    
    // Reset video settings
    video.volume = 1;
    video.muted = false;
    video.playbackRate = 1;
    
    // Show modal
    videoModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Show loading indicator
    const showLoading = function() {
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            // Remove existing elements
            const existingLoading = videoContainer.querySelector('.video-loading');
            const existingError = videoContainer.querySelector('.video-error');
            if (existingLoading) existingLoading.remove();
            if (existingError) existingError.remove();
            
            // Create loading indicator
            const loadingDiv = document.createElement('div');
            loadingDiv.className = 'video-loading';
            loadingDiv.innerHTML = `
                <div class="video-loading-spinner"></div>
                <div class="video-loading-text">Loading video...</div>
            `;
            videoContainer.appendChild(loadingDiv);
        }
    };
    
    // Hide loading indicator
    const hideLoading = function() {
        const loadingDiv = document.querySelector('.video-loading');
        if (loadingDiv) {
            loadingDiv.remove();
        }
    };
    
    // Show error
    const showError = function() {
        hideLoading();
        
        const videoContainer = document.querySelector('.video-container');
        if (videoContainer) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'video-error';
            errorDiv.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                <h4>Video Not Found</h4>
                <p>The video file could not be loaded. Please check:</p>
                <p><code>${videoSrc}</code></p>
                <p>Make sure the video file exists and has the correct path.</p>
                <button class="video-control-btn" onclick="this.closest('.video-error').remove()">
                    <i class="fas fa-times"></i> Close
                </button>
            `;
            videoContainer.appendChild(errorDiv);
        }
    };
    
    // Load video with error handling
    showLoading();
    
    // Try to load the video
    video.load();
    
    // Set up event listeners
    const onCanPlay = function() {
        console.log('Video can play');
        hideLoading();
        
        // Try to play automatically (browsers may block this)
        video.play().catch(e => {
            console.log('Auto-play blocked:', e.message);
            // This is normal - many browsers block auto-play
        });
    };
    
    const onError = function() {
        console.error('Video loading failed');
        showError();
    };
    
    // Add one-time event listeners
    video.addEventListener('canplay', onCanPlay, { once: true });
    video.addEventListener('error', onError, { once: true });
    
    // Also try to load with timeout
    setTimeout(() => {
        if (video.readyState < 2) { // HAVE_CURRENT_DATA
            console.warn('Video taking too long to load');
            video.dispatchEvent(new Event('error'));
        }
    }, 5000);
    
    console.log('Video modal opened successfully');
};

// Make sure function is available
console.log('Video modal functions ready');