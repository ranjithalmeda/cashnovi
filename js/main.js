// DOM Elements
document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('button:contains("Sign In")');
    const startEarningButton = document.querySelector('button:contains("Start Earning Now")');

    // Animation for numbers
    function animateValue(element, start, end, duration) {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
                clearInterval(timer);
                current = end;
            }
            element.textContent = current.toFixed(2);
        }, 16);
    }

    // Mock data for demonstration
    const mockData = {
        totalEarnings: 150.75,
        availableTasks: 15,
        rewardPoints: 500
    };

    // Update dashboard numbers with animation
    const totalEarningsElement = document.querySelector('.bg-green-50 .text-2xl');
    const availableTasksElement = document.querySelector('.bg-blue-50 .text-2xl');
    const rewardPointsElement = document.querySelector('.bg-purple-50 .text-2xl');

    if (totalEarningsElement) {
        animateValue(totalEarningsElement, 0, mockData.totalEarnings, 2000);
    }
    if (availableTasksElement) {
        animateValue(availableTasksElement, 0, mockData.availableTasks, 1500);
    }
    if (rewardPointsElement) {
        animateValue(rewardPointsElement, 0, mockData.rewardPoints, 1500);
    }

    // Add hover effects to feature cards
    const featureCards = document.querySelectorAll('.bg-gray-50.rounded-lg');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('transform', 'scale-105', 'transition-transform');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('transform', 'scale-105', 'transition-transform');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
