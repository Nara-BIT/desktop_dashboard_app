// Navigation functionality
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');
const sectionTitle = document.getElementById('sectionTitle');
const logoutBtn = document.getElementById('logoutBtn');

// Handle navigation clicks
navItems.forEach(item => {
    item.addEventListener('click', () => {
        const targetSection = item.getAttribute('data-section');
        
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        
        // Add active class to clicked nav item
        item.classList.add('active');
        
        // Hide all sections
        sections.forEach(section => section.classList.remove('active'));
        
        // Show target section
        document.getElementById(targetSection).classList.add('active');
        
        // Update section title
        const sectionText = item.querySelector('span:last-child').textContent;
        sectionTitle.textContent = sectionText;
    });
});

// Handle logout
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        try {
            await window.electronAPI.logout();
        } catch (error) {
            console.error('Logout error:', error);
        }
    });
}
