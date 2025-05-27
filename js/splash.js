/**
 * Splash Screen Handler
 * Creates and manages a splash screen that shows during page load
 * Can be included on any page that needs a loading screen
 */

// Create and inject the splash screen as soon as the script runs
(function() {
    // Create splash screen element
    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.style.position = 'fixed';
    splashScreen.style.top = '0';
    splashScreen.style.left = '0';
    splashScreen.style.width = '100%';
    splashScreen.style.height = '100%';
    splashScreen.style.backgroundColor = '#ffffff';
    splashScreen.style.display = 'flex';
    splashScreen.style.flexDirection = 'column';
    splashScreen.style.justifyContent = 'center';
    splashScreen.style.alignItems = 'center';
    splashScreen.style.zIndex = '9999';
    splashScreen.style.transition = 'opacity 0.5s ease-out';
    
    // Check if dark mode is active
    if (document.documentElement.classList.contains('dark')) {
        splashScreen.style.backgroundColor = '#1F2937';
    }
    
    // Create logo element
    const logo = document.createElement('img');
    logo.src = 'images/cashnoviwithlogo.png';
    logo.alt = 'CashNovi Logo';
    logo.className = 'splash-logo';
    logo.style.maxWidth = '200px';
    logo.style.marginBottom = '20px';
    logo.style.animation = 'shake 0.8s ease-in-out infinite';
    
    // Create dots container
    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'dots-container';
    dotsContainer.style.display = 'flex';
    dotsContainer.style.gap = '8px';
    
    // Create three dots
    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('div');
        dot.className = `dot dot-${i}`;
        dot.style.width = '12px';
        dot.style.height = '12px';
        dot.style.backgroundColor = '#18BC96';
        dot.style.borderRadius = '50%';
        dot.style.animation = `pulse-dot 1.5s ease-in-out infinite ${i * 0.2}s`;
        dotsContainer.appendChild(dot);
    }
    
    // Add animations to document
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shake {
            0% { transform: translateX(0); }
            25% { transform: translateX(-0.5px) rotate(-0.2deg); }
            50% { transform: translateX(0.5px) rotate(0.2deg); }
            75% { transform: translateX(-0.5px) rotate(-0.2deg); }
            100% { transform: translateX(0) rotate(0); }
        }
        
        @keyframes pulse-dot {
            0% { transform: scale(1); opacity: 0.4; }
            50% { transform: scale(1.4); opacity: 1; }
            100% { transform: scale(1); opacity: 0.4; }
        }
    `;
    document.head.appendChild(style);
    
    // Assemble splash screen
    splashScreen.appendChild(logo);
    splashScreen.appendChild(dotsContainer);
    
    // Add to document as early as possible
    if (document.body) {
        document.body.appendChild(splashScreen);
    } else {
        // If body isn't available yet, wait for DOMContentLoaded
        window.addEventListener('DOMContentLoaded', function() {
            document.body.appendChild(splashScreen);
        });
    }
    
    // Hide splash screen after content is loaded
    window.addEventListener('load', function() {
        setTimeout(function() {
            splashScreen.style.opacity = '0';
            setTimeout(function() {
                if (splashScreen.parentNode) {
                    splashScreen.parentNode.removeChild(splashScreen);
                }
            }, 500); // Wait for fade out animation to complete
        }, 1000); // Show splash for at least 1 second after load
    });
    
    // Fallback in case load event doesn't fire
    setTimeout(function() {
        splashScreen.style.opacity = '0';
        setTimeout(function() {
            if (splashScreen.parentNode) {
                splashScreen.parentNode.removeChild(splashScreen);
            }
        }, 500);
    }, 5000); // Maximum time to show splash screen (5 seconds)
})();