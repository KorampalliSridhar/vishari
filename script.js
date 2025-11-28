// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });

    // Smooth scroll for sidebar on mobile
    const sidebar = document.querySelector('.sidebar');
    if (sidebar && window.innerWidth <= 768) {
        sidebar.style.scrollBehavior = 'smooth';
    }

    // Handle responsive behavior
    function handleResize() {
        const container = document.querySelector('.container');
        if (window.innerWidth <= 1024) {
            // Mobile/Tablet behavior
            console.log('Mobile/Tablet view');
        } else {
            // Desktop behavior
            console.log('Desktop view');
        }
    }

    // Run on load and resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Add keyboard navigation for tabs
    tabs.forEach((tab, index) => {
        tab.addEventListener('keydown', function(e) {
            let newIndex;
            
            // Arrow right
            if (e.key === 'ArrowRight') {
                newIndex = index + 1;
                if (newIndex >= tabs.length) newIndex = 0;
                tabs[newIndex].focus();
                tabs[newIndex].click();
            }
            
            // Arrow left
            if (e.key === 'ArrowLeft') {
                newIndex = index - 1;
                if (newIndex < 0) newIndex = tabs.length - 1;
                tabs[newIndex].focus();
                tabs[newIndex].click();
            }
        });
    });
});
