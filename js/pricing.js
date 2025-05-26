document.addEventListener('DOMContentLoaded', function() {
    let currentPeriod = 'monthly';

    const monthlyPrices = {
        basic: '₹3,000',
        premium: '₹6,000',
        vip: '₹9,000'
    };

    const yearlyPrices = {
        basic: '₹30,000',
        premium: '₹60,000',
        vip: '₹90,000'
    };

    const monthlyButton = document.querySelector('[data-period="monthly"]');
    const yearlyButton = document.querySelector('[data-period="yearly"]');
    const priceElements = document.querySelectorAll('[data-price]');
    const savingLabels = document.querySelectorAll('[data-saving]');    function updatePrices(period) {
        // Update prices
        priceElements.forEach(el => {
            const plan = el.getAttribute('data-price');
            el.textContent = period === 'monthly' ? monthlyPrices[plan] : yearlyPrices[plan];
        });

        // Update period text
        document.querySelectorAll('.period-text').forEach(el => {
            el.textContent = period === 'monthly' ? '/month' : '/year';
        });

        // Update saving labels
        savingLabels.forEach(el => {
            el.style.display = period === 'yearly' ? 'block' : 'none';
        });

        // Update button states
        if (period === 'monthly') {
            monthlyButton.classList.add('bg-primary', 'text-white');
            monthlyButton.classList.remove('text-gray-600', 'dark:text-gray-400');
            yearlyButton.classList.remove('bg-primary', 'text-white');
            yearlyButton.classList.add('text-gray-600', 'dark:text-gray-400');
        } else {
            yearlyButton.classList.add('bg-primary', 'text-white');
            yearlyButton.classList.remove('text-gray-600', 'dark:text-gray-400');
            monthlyButton.classList.remove('bg-primary', 'text-white');
            monthlyButton.classList.add('text-gray-600', 'dark:text-gray-400');
        }
    }    monthlyButton.addEventListener('click', () => {
        currentPeriod = 'monthly';
        updatePrices('monthly');
    });
    
    yearlyButton.addEventListener('click', () => {
        currentPeriod = 'yearly';
        updatePrices('yearly');
    });

    // Function to handle plan selection
    window.selectPlan = function(plan) {
        const selectedPlanInfo = {
            plan: plan,
            period: currentPeriod,
            price: currentPeriod === 'monthly' ? monthlyPrices[plan] : yearlyPrices[plan]
        };

        // Add visual feedback
        const button = event.currentTarget;
        const originalText = button.textContent;
        button.textContent = 'Processing...';
        button.disabled = true;

        // Simulate processing (in a real app, this would be an API call)
        setTimeout(() => {
            // Store selected plan in session storage
            sessionStorage.setItem('selectedPlan', JSON.stringify(selectedPlanInfo));
            
            // Redirect to a signup or checkout page
            window.location.href = 'signup.html';
        }, 500);
    }

    // Check if there's a previously selected plan
    const urlParams = new URLSearchParams(window.location.search);
    const preSelectedPlan = urlParams.get('plan');
    if (preSelectedPlan) {
        const planButtons = document.querySelectorAll(`[onclick*="${preSelectedPlan}"]`);
        if (planButtons.length > 0) {
            planButtons[0].focus();
            planButtons[0].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});
