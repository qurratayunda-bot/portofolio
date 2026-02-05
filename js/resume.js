// Resume Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Resume page loaded');
    
    // =============== FILTER ORGANIZATION ITEMS ===============
    const orgFilterButtons = document.querySelectorAll('.org-filter-btn');
    const orgItems = document.querySelectorAll('.organization-item');
    const noOrgMessage = document.querySelector('.no-org-items-message');
    
    orgFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            orgFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            let visibleCount = 0;
            
            // Filter items
            orgItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hidden');
                    visibleCount++;
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
            
            // Update organization counter
            updateOrganizationCounter(visibleCount, orgItems.length);
            
            // Show/hide empty state message
            if (visibleCount === 0) {
                noOrgMessage.style.display = 'flex';
            } else {
                noOrgMessage.style.display = 'none';
            }
        });
    });
    
    function updateOrganizationCounter(visible, total) {
        const counter = document.querySelector('.organization-counter');
        if (counter) {
            counter.textContent = `Menampilkan ${visible} dari ${total} pengalaman organisasi`;
        }
    }
    
    // =============== FILTER CERTIFICATION ITEMS ===============
    const certFilterButtons = document.querySelectorAll('.cert-filter-btn');
    const certificationItems = document.querySelectorAll('.certification-item');
    const noCertMessage = document.querySelector('.no-certification-items-message');
    
    certFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            certFilterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            let visibleCount = 0;
            
            // Filter items
            certificationItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hidden');
                    visibleCount++;
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
            
            // Update certification counter
            updateCertificationCounter(visibleCount, certificationItems.length);
            
            // Show/hide empty state message
            if (visibleCount === 0) {
                noCertMessage.style.display = 'flex';
            } else {
                noCertMessage.style.display = 'none';
            }
        });
    });
    
    function updateCertificationCounter(visible, total) {
        const counter = document.querySelector('.certification-counter');
        if (counter) {
            counter.textContent = `Menampilkan ${visible} dari ${total} sertifikasi & pelatihan`;
        }
    }
    
    // =============== FILTER VOLUNTEER ITEMS ===============
    const filterButtons = document.querySelectorAll('.btn-filter');
    const volunteerItems = document.querySelectorAll('.volunteer-item');
    const noVolunteerMessage = document.querySelector('.no-volunteer-items-message');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            let visibleCount = 0;
            
            // Filter items
            volunteerItems.forEach(item => {
                const categories = item.getAttribute('data-category');
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.classList.remove('hidden');
                    visibleCount++;
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.classList.add('hidden');
                    }, 300);
                }
            });
            
            // Update volunteer counter
            updateVolunteerCounter(visibleCount, volunteerItems.length);
            
            // Show/hide empty state message
            if (visibleCount === 0) {
                noVolunteerMessage.style.display = 'flex';
            } else {
                noVolunteerMessage.style.display = 'none';
            }
        });
    });
    
    function updateVolunteerCounter(visible, total) {
        const counter = document.querySelector('.volunteer-counter');
        if (counter) {
            counter.textContent = `Menampilkan ${visible} dari ${total} pengalaman sukarelawan`;
        }
    }
    
    // Initial counters update
    updateOrganizationCounter(orgItems.length, orgItems.length);
    updateCertificationCounter(certificationItems.length, certificationItems.length);
    updateVolunteerCounter(volunteerItems.length, volunteerItems.length);
    
    // =============== PRINT RESUME FUNCTIONALITY ===============
    const printButton = document.getElementById('printResume');
    
    if (printButton) {
        printButton.addEventListener('click', function() {
            // Store original styles
            const originalStyles = {
                orgControls: document.querySelector('.organization-controls').style.cssText,
                certControls: document.querySelector('.certification-controls').style.cssText,
                volunteerControls: document.querySelector('.volunteer-controls').style.cssText,
                orgCounter: document.querySelector('.organization-counter').style.cssText,
                certCounter: document.querySelector('.certification-counter').style.cssText,
                volunteerCounter: document.querySelector('.volunteer-counter').style.cssText
            };
            
            // Hide controls and counters for printing
            document.querySelector('.organization-controls').style.display = 'none';
            document.querySelector('.certification-controls').style.display = 'none';
            document.querySelector('.volunteer-controls').style.display = 'none';
            document.querySelector('.organization-counter').style.display = 'none';
            document.querySelector('.certification-counter').style.display = 'none';
            document.querySelector('.volunteer-counter').style.display = 'none';
            document.querySelector('.no-org-items-message').style.display = 'none';
            document.querySelector('.no-certification-items-message').style.display = 'none';
            document.querySelector('.no-volunteer-items-message').style.display = 'none';
            
            // Show all items for printing
            orgItems.forEach(item => {
                item.classList.remove('hidden');
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.display = 'block';
            });
            
            certificationItems.forEach(item => {
                item.classList.remove('hidden');
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.display = 'block';
            });
            
            volunteerItems.forEach(item => {
                item.classList.remove('hidden');
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
                item.style.display = 'block';
            });
            
            // Open print dialog
            setTimeout(() => {
                window.print();
            }, 500);
            
            // Restore after print
            const afterPrint = () => {
                // Restore styles
                document.querySelector('.organization-controls').style.cssText = originalStyles.orgControls;
                document.querySelector('.certification-controls').style.cssText = originalStyles.certControls;
                document.querySelector('.volunteer-controls').style.cssText = originalStyles.volunteerControls;
                document.querySelector('.organization-counter').style.cssText = originalStyles.orgCounter;
                document.querySelector('.certification-counter').style.cssText = originalStyles.certCounter;
                document.querySelector('.volunteer-counter').style.cssText = originalStyles.volunteerCounter;
                
                // Reapply current filters
                const activeOrgFilter = document.querySelector('.org-filter-btn.active');
                const activeCertFilter = document.querySelector('.cert-filter-btn.active');
                const activeVolunteerFilter = document.querySelector('.btn-filter.active');
                
                if (activeOrgFilter) activeOrgFilter.click();
                if (activeCertFilter) activeCertFilter.click();
                if (activeVolunteerFilter) activeVolunteerFilter.click();
                
                window.removeEventListener('afterprint', afterPrint);
            };
            
            window.addEventListener('afterprint', afterPrint);
            
            // Fallback for browsers that don't support afterprint
            setTimeout(afterPrint, 1000);
        });
    }
    
    // =============== SHARE RESUME FUNCTIONALITY ===============
    const shareButton = document.getElementById('shareResume');
    
    if (shareButton) {
        shareButton.addEventListener('click', shareResume);
    }
    
    async function shareResume() {
        const shareData = {
            title: 'Qurrata Ayyunda Prayogi - Resume',
            text: 'Check out my professional resume with work experience, organizations, certifications, and volunteer activities.',
            url: window.location.href
        };
        
        try {
            if (navigator.share) {
                await navigator.share(shareData);
                showNotification('Resume shared successfully!', 'success');
            } else {
                // Fallback: copy URL to clipboard
                await navigator.clipboard.writeText(window.location.href);
                showNotification('Link copied to clipboard!', 'success');
            }
        } catch (err) {
            console.error('Error sharing:', err);
            showNotification('Could not share resume', 'error');
        }
    }
    
    // =============== DOWNLOAD TRACKING ===============
    const downloadButtons = document.querySelectorAll('a[download]');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function() {
            const fileName = this.getAttribute('href').split('/').pop();
            showNotification(`Downloading CV: ${fileName}`, 'success');
        });
    });
    
    // =============== SKILL TAGS ANIMATION ===============
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 50}ms`;
        
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });
    
    // =============== INTEREST TAGS ANIMATION ===============
    const interestTags = document.querySelectorAll('.interest-tag');
    
    interestTags.forEach((tag, index) => {
        tag.style.animationDelay = `${index * 100}ms`;
        
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-2px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // =============== LANGUAGE ITEMS HOVER EFFECT ===============
    const languageItems = document.querySelectorAll('.language-list li');
    
    languageItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = 'var(--shadow)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // =============== COLLAPSE/EXPAND ON MOBILE ===============
    const setupMobileExpand = () => {
        if (window.innerWidth <= 768) {
            // Organization items
            orgItems.forEach(item => {
                const header = item.querySelector('.organization-header');
                const content = item.querySelector('.organization-content');
                
                if (header && content) {
                    header.style.cursor = 'pointer';
                    
                    const expandIcon = document.createElement('i');
                    expandIcon.className = 'fas fa-chevron-down org-expand-toggle';
                    expandIcon.style.marginLeft = 'auto';
                    expandIcon.style.transition = 'transform 0.3s ease';
                    
                    header.appendChild(expandIcon);
                    
                    content.style.maxHeight = '0';
                    content.style.overflow = 'hidden';
                    content.style.transition = 'max-height 0.3s ease';
                    
                    header.addEventListener('click', function() {
                        const isExpanded = content.style.maxHeight !== '0px';
                        
                        if (isExpanded) {
                            content.style.maxHeight = '0';
                            expandIcon.style.transform = 'rotate(0deg)';
                        } else {
                            content.style.maxHeight = content.scrollHeight + 'px';
                            expandIcon.style.transform = 'rotate(180deg)';
                        }
                    });
                }
            });
            
            // Certification items
            certificationItems.forEach(item => {
                const header = item.querySelector('.certification-header');
                const content = item.querySelector('.certification-content');
                
                if (header && content) {
                    header.style.cursor = 'pointer';
                    
                    const expandIcon = document.createElement('i');
                    expandIcon.className = 'fas fa-chevron-down cert-expand-toggle';
                    expandIcon.style.marginLeft = 'auto';
                    expandIcon.style.transition = 'transform 0.3s ease';
                    
                    header.appendChild(expandIcon);
                    
                    content.style.maxHeight = '0';
                    content.style.overflow = 'hidden';
                    content.style.transition = 'max-height 0.3s ease';
                    
                    header.addEventListener('click', function() {
                        const isExpanded = content.style.maxHeight !== '0px';
                        
                        if (isExpanded) {
                            content.style.maxHeight = '0';
                            expandIcon.style.transform = 'rotate(0deg)';
                        } else {
                            content.style.maxHeight = content.scrollHeight + 'px';
                            expandIcon.style.transform = 'rotate(180deg)';
                        }
                    });
                }
            });
            
            // Volunteer items
            volunteerItems.forEach(item => {
                const header = item.querySelector('.volunteer-header');
                const content = item.querySelector('.volunteer-content');
                
                if (header && content) {
                    header.style.cursor = 'pointer';
                    
                    const expandIcon = document.createElement('i');
                    expandIcon.className = 'fas fa-chevron-down volunteer-expand-toggle';
                    expandIcon.style.marginLeft = 'auto';
                    expandIcon.style.transition = 'transform 0.3s ease';
                    
                    header.appendChild(expandIcon);
                    
                    content.style.maxHeight = '0';
                    content.style.overflow = 'hidden';
                    content.style.transition = 'max-height 0.3s ease';
                    
                    header.addEventListener('click', function() {
                        const isExpanded = content.style.maxHeight !== '0px';
                        
                        if (isExpanded) {
                            content.style.maxHeight = '0';
                            expandIcon.style.transform = 'rotate(0deg)';
                        } else {
                            content.style.maxHeight = content.scrollHeight + 'px';
                            expandIcon.style.transform = 'rotate(180deg)';
                        }
                    });
                }
            });
        }
    };
    
    setupMobileExpand();
    
    // =============== SCROLL ANIMATIONS ===============
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe all resume items
    document.querySelectorAll('.organization-item, .certification-item, .volunteer-item, .competition-item, .skill-tag, .interest-tag, .language-list li').forEach(item => {
        observer.observe(item);
    });
    
    // =============== HELPER FUNCTIONS ===============
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notification => notification.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="close-notification">&times;</button>
        `;
        
        document.body.appendChild(notification);
        
        // Style the notification
        const styleId = 'notification-styles';
        if (!document.getElementById(styleId)) {
            const style = document.createElement('style');
            style.id = styleId;
            style.textContent = `
                .notification {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    padding: 1rem 1.5rem;
                    border-radius: var(--radius);
                    background: white;
                    box-shadow: var(--shadow-lg);
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    z-index: 10000;
                    animation: slideIn 0.3s ease;
                    border-left: 4px solid var(--primary-color);
                    max-width: 400px;
                }
                
                .notification.success {
                    border-left-color: #10b981;
                }
                
                .notification.error {
                    border-left-color: #ef4444;
                }
                
                .notification i {
                    font-size: 1.2rem;
                }
                
                .notification.success i {
                    color: #10b981;
                }
                
                .notification.error i {
                    color: #ef4444;
                }
                
                .close-notification {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: var(--text-light);
                    line-height: 1;
                    padding: 0;
                    width: 24px;
                    height: 24px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                @keyframes slideIn {
                    from {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateX(0);
                        opacity: 1;
                    }
                }
                
                @keyframes slideOut {
                    to {
                        transform: translateX(100%);
                        opacity: 0;
                    }
                }
                
                @media (max-width: 768px) {
                    .notification {
                        left: 20px;
                        right: 20px;
                        max-width: none;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Add close functionality
        notification.querySelector('.close-notification').addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => {
                notification.remove();
            }, 300);
        });
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }
        }, 5000);
    }
    
    // =============== UPDATE CURRENT YEAR ===============
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // =============== RESPONSIVE ADJUSTMENTS ===============
    window.addEventListener('resize', function() {
        if (window.innerWidth <= 768) {
            setupMobileExpand();
        } else {
            // Remove expand/collapse icons on desktop
            document.querySelectorAll('.org-expand-toggle, .cert-expand-toggle, .volunteer-expand-toggle').forEach(icon => {
                icon.remove();
            });
            
            // Show all content on desktop
            document.querySelectorAll('.organization-content, .certification-content, .volunteer-content').forEach(content => {
                content.style.maxHeight = '';
                content.style.overflow = '';
            });
        }
    });
});