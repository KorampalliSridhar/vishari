// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Here you can add logic to show/hide different content sections
            // based on which tab is clicked
            const tabName = this.textContent.trim();
            console.log('Switched to:', tabName);
            
            // Example: Update content based on tab
            updateContent(tabName);
        });
    });
});

function updateContent(tabName) {
    const contentArea = document.querySelector('.content-area');
    
    if (tabName === 'ABOUT ME') {
        contentArea.innerHTML = `
            <div class="about-content">
                <div class="illustration">
                    <img src="assets/designer-illustration.svg" alt="Designer Illustration">
                </div>
                
                <div class="text-content">
                    <p class="intro-text">
                        My journey in the world of design began in 2010, and since then, I have had the privilege of working with a diverse range of IT software services and product companies. Throughout my career, I have successfully transitioned into a UX designer, dedicating the last four years to mastering the intricacies of this field.
                    </p>

                    <p class="highlight-text">
                        My unwavering commitment to a "Customer First" approach ensures that the UX solutions I craft are not only user-centric but also user-friendly.
                    </p>

                    <p>
                        My design process is comprehensive, encompassing brainstorming, ideation, research, feature development, interaction design, interface design, and user testing. I have had the opportunity to work on a variety of projects, including web apps, mobile apps, native apps, responsive websites, marketing materials, and print materials. This diverse experience has honed my ability to adapt to different design challenges effectively.
                    </p>

                    <p>
                        I pride myself on being adaptable, capable of excelling as an individual contributor or leading and managing a design team. My track record demonstrates my ability to consistently meet organisational and leadership expectations, making me a valuable asset to any team.
                    </p>
                </div>
            </div>
        `;
    } else if (tabName === 'WORK EXPERIENCE') {
        contentArea.innerHTML = `
            <div class="work-experience-content">
                <h2 style="color: #ff4757; margin-bottom: 30px;">Work Experience</h2>
                
                <div class="experience-item" style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h3 style="color: #2c3e50; margin-bottom: 10px;">UI/UX Designer II</h3>
                    <p style="color: #7f8c8d; margin-bottom: 10px;"><strong>Company Name</strong> | 2021 - Present</p>
                    <ul style="color: #555; line-height: 1.8;">
                        <li>Led UX design initiatives for multiple product teams</li>
                        <li>Conducted user research and usability testing</li>
                        <li>Created wireframes, prototypes, and high-fidelity designs</li>
                        <li>Collaborated with development teams to ensure design implementation</li>
                    </ul>
                </div>

                <div class="experience-item" style="margin-bottom: 30px; padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h3 style="color: #2c3e50; margin-bottom: 10px;">UI/UX Designer</h3>
                    <p style="color: #7f8c8d; margin-bottom: 10px;"><strong>Previous Company</strong> | 2018 - 2021</p>
                    <ul style="color: #555; line-height: 1.8;">
                        <li>Designed responsive web and mobile applications</li>
                        <li>Developed design systems and component libraries</li>
                        <li>Facilitated design workshops and brainstorming sessions</li>
                    </ul>
                </div>

                <div class="experience-item" style="padding: 20px; background: white; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <h3 style="color: #2c3e50; margin-bottom: 10px;">Graphic Designer</h3>
                    <p style="color: #7f8c8d; margin-bottom: 10px;"><strong>Early Career Company</strong> | 2010 - 2018</p>
                    <ul style="color: #555; line-height: 1.8;">
                        <li>Created marketing materials and brand assets</li>
                        <li>Designed print and digital campaigns</li>
                        <li>Transitioned from graphic design to UX design</li>
                    </ul>
                </div>
            </div>
        `;
    } else if (tabName === 'PORTFOLIO') {
        contentArea.innerHTML = `
            <div class="portfolio-content">
                <h2 style="color: #ff4757; margin-bottom: 30px;">Portfolio</h2>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 25px;">
                    <div class="portfolio-item" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); transition: transform 0.3s;">
                        <div style="height: 200px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                            Project 1
                        </div>
                        <div style="padding: 20px;">
                            <h3 style="color: #2c3e50; margin-bottom: 10px;">E-Commerce Mobile App</h3>
                            <p style="color: #7f8c8d; font-size: 14px;">A modern shopping experience with intuitive navigation and seamless checkout process.</p>
                        </div>
                    </div>

                    <div class="portfolio-item" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
                        <div style="height: 200px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                            Project 2
                        </div>
                        <div style="padding: 20px;">
                            <h3 style="color: #2c3e50; margin-bottom: 10px;">Health & Fitness Dashboard</h3>
                            <p style="color: #7f8c8d; font-size: 14px;">Analytics dashboard for tracking health metrics and workout progress.</p>
                        </div>
                    </div>

                    <div class="portfolio-item" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
                        <div style="height: 200px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                            Project 3
                        </div>
                        <div style="padding: 20px;">
                            <h3 style="color: #2c3e50; margin-bottom: 10px;">Banking App Redesign</h3>
                            <p style="color: #7f8c8d; font-size: 14px;">Complete redesign focusing on accessibility and user trust.</p>
                        </div>
                    </div>

                    <div class="portfolio-item" style="background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08);">
                        <div style="height: 200px; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 18px; font-weight: 600;">
                            Project 4
                        </div>
                        <div style="padding: 20px;">
                            <h3 style="color: #2c3e50; margin-bottom: 10px;">Food Delivery Platform</h3>
                            <p style="color: #7f8c8d; font-size: 14px;">End-to-end design for a local food delivery service.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Add hover effects for portfolio items
document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.portfolio-item')) {
        e.target.closest('.portfolio-item').style.transform = 'translateY(-5px)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.portfolio-item')) {
        e.target.closest('.portfolio-item').style.transform = 'translateY(0)';
    }
});
