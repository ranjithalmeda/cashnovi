function setTheme(isDark) {
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Update class on html element
    document.documentElement.classList.toggle('dark', isDark);
    
    // Update icon visibility using style.display
    if (themeToggleDarkIcon && themeToggleLightIcon) {
        themeToggleDarkIcon.style.display = isDark ? 'none' : 'block';
        themeToggleLightIcon.style.display = isDark ? 'block' : 'none';
    }

    // Save preference
    localStorage.setItem('color-theme', isDark ? 'dark' : 'light');
}

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check for saved theme preference or system preference
    const isDark = localStorage.getItem('color-theme') === 'dark' || 
                  (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    // Set initial theme
    setTheme(isDark);

    // Add click handler for theme toggle button
    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function() {
            const isDark = !document.documentElement.classList.contains('dark');
            setTheme(isDark);
        });
    }
});
