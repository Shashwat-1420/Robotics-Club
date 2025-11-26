document.addEventListener('DOMContentLoaded', () => {
    /* --- Gallery Modal Logic --- */
    const galleryItems = document.querySelectorAll('.gallery-item');
    const galleryModal = document.getElementById('galleryModal');
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDate = document.getElementById('modalDate');
    const closeModal = document.getElementById('closeModal');

    // Open Gallery Modal
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            const title = item.querySelector('h3').innerText;
            const date = item.querySelector('p').innerText;

            modalImage.src = img.src;
            modalTitle.innerText = title;
            modalDate.innerText = date;

            galleryModal.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });

    // Close Gallery Modal
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Enable scrolling
        });
    }

    // Close Gallery Modal on Outside Click
    window.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    /* --- Team Modal Logic --- */
    const teamModal = document.getElementById('teamModal');
    const closeTeamModal = document.getElementById('closeTeamModal');
    const teamModalImage = document.getElementById('teamModalImage');
    const teamModalName = document.getElementById('teamModalName');
    const teamModalRole = document.getElementById('teamModalRole');
    const teamModalBio = document.getElementById('teamModalBio');
    const teamModalResearch = document.getElementById('teamModalResearch');
    const viewProfileBtns = document.querySelectorAll('.view-profile-btn');

    // Team Data
    const teamData = {
        'shashwat': {
            name: 'SHASHWAT MISHRA',
            role: 'PRESIDENT',
            image: 'https://placehold.co/400x500/1e293b/06b6d4?text=Shashwat',
            bio: 'Shashwat is a visionary leader with a passion for robotics and AI. He has led multiple successful projects and is dedicated to fostering a culture of innovation within the club.',
            research: 'Autonomous Navigation, Swarm Robotics, Artificial Intelligence in Robotics.'
        },
        'desai': {
            name: 'DR. RAVISHANKAR P DESAI',
            role: 'FACULTY MENTOR',
            image: 'https://placehold.co/400x500/1e293b/a855f7?text=Dr.+Desai',
            bio: 'Dr. Desai is a distinguished professor with over 15 years of experience in robotics research. He provides invaluable guidance and mentorship to the club members.',
            research: 'Control Systems, Human-Robot Interaction, Industrial Automation.'
        },
        'yashashwini': {
            name: 'YASHASHWINI RAO',
            role: 'STUDENT MENTOR',
            image: 'https://placehold.co/400x500/1e293b/ec4899?text=Yashashwini',
            bio: 'Yashashwini is an experienced senior member who loves teaching and mentoring juniors. She specializes in embedded systems and circuit design.',
            research: 'Embedded Systems, IoT, Signal Processing.'
        },
        'rithwik': {
            name: 'RITHWIK BHASKAR',
            role: 'STUDENT MENTOR',
            image: 'https://placehold.co/400x500/1e293b/22c55e?text=Rithwik',
            bio: 'Rithwik is a coding wizard with a knack for solving complex algorithmic problems. He mentors students in software development for robotics.',
            research: 'Computer Vision, SLAM, Path Planning Algorithms.'
        },
        'nishanth': {
            name: 'AREKATLA NISHANTH',
            role: 'VICE PRESIDENT',
            image: 'https://placehold.co/400x500/1e293b/eab308?text=Nishanth',
            bio: 'Nishanth is known for his execution skills and operational excellence. He ensures that all club activities run smoothly and efficiently.',
            research: 'Mechanical Design, Kinematics, Rapid Prototyping.'
        },
        'thaslim': {
            name: 'SHAIK THASLIM',
            role: 'TREASURER',
            image: 'https://placehold.co/400x500/1e293b/f97316?text=Thaslim',
            bio: 'Thaslim manages the club\'s finances with precision and transparency. She is also an active contributor to hardware projects.',
            research: 'Financial Management in Tech, PCB Design, Sensors.'
        },
        'charitha': {
            name: 'CHARITHA SREE',
            role: 'GENERAL SECRETARY',
            image: 'https://placehold.co/400x500/1e293b/14b8a6?text=Charitha',
            bio: 'Charitha is the organizational backbone of the club. She coordinates events, meetings, and communications effectively.',
            research: 'Project Management, Soft Robotics, Bio-inspired Robotics.'
        }
    };

    // Open Team Modal
    viewProfileBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const memberId = btn.getAttribute('data-id');
            const member = teamData[memberId];

            if (member) {
                teamModalImage.src = member.image;
                teamModalName.innerText = member.name;
                teamModalRole.innerText = member.role;
                teamModalBio.innerText = member.bio;
                teamModalResearch.innerText = member.research;

                teamModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close Team Modal
    if (closeTeamModal) {
        closeTeamModal.addEventListener('click', () => {
            teamModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close Team Modal on Outside Click
    window.addEventListener('click', (e) => {
        if (e.target === teamModal) {
            teamModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});
