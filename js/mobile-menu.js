document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenuPanel = document.getElementById('mobile-menu-panel');
    const openIcon = document.getElementById('mobile-menu-icon-open');
    const closeIcon = document.getElementById('mobile-menu-icon-close');

    if (!mobileMenuButton || !mobileMenuPanel || !openIcon || !closeIcon) {
        console.warn('Mobile menu elements not found');
        return;
    }

    function toggleMobileMenu() {
        const isOpen = mobileMenuPanel.classList.contains('hidden');
        
        // Toggle menu visibility
        if (isOpen) {
            mobileMenuPanel.classList.remove('hidden');
            mobileMenuPanel.classList.add('animate-in');
            openIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
        } else {
            mobileMenuPanel.classList.add('hidden');
            openIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
        }
    }

    // Add click event listener to menu button
    mobileMenuButton.addEventListener('click', toggleMobileMenu);

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = mobileMenuButton.contains(event.target) || mobileMenuPanel.contains(event.target);
        
        if (!isClickInside && !mobileMenuPanel.classList.contains('hidden')) {
            toggleMobileMenu();
        }
    });
});
