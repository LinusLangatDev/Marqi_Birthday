function createConfetti() {
            const colors = ['#8B4513', '#DAA520', '#4B3621', '#228B22', '#800080', '#CD853F'];
            const confettiCount = 100;
            
            for (let i = 0; i < confettiCount; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                const left = Math.random() * 100;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const size = Math.random() * 10 + 5;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 5;
                
                confetti.style.left = `${left}%`;
                confetti.style.backgroundColor = color;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.animationDuration = `${duration}s`;
                confetti.style.animationDelay = `${delay}s`;
                
                if (Math.random() > 0.5) {
                    confetti.style.borderRadius = '50%';
                } else {
                    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                }
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, (duration + delay) * 1000);
            }
        }
        
        createConfetti();
        setInterval(createConfetti, 5000);
        
        document.querySelector('.button').addEventListener('click', function(e) {
            e.preventDefault();
            createConfetti();
            this.textContent = 'Wish Made! 🎉';
            setTimeout(() => {
                this.textContent = 'Make Another Wish, Margaret!';
            }, 2000);
        });

        const achievements = [
            "Started our first project together",
            "Overcame a major challenge",
            "Celebrated our first big success",
            "Supported each other through tough times",
            "Learned a new skill together"
        ];

        const tree = document.getElementById('achievementTree');

        achievements.forEach((achievement, index) => {
            const achievementNode = document.createElement('div');
            achievementNode.classList.add('achievement');
            achievementNode.style.left = `${10 + (index * 20)}%`;
            achievementNode.style.top = `${70 - (index * 15)}%`;
            achievementNode.title = achievement;
            
            achievementNode.addEventListener('click', () => {
                alert(`Achievement unlocked: ${achievement}`);
            });
            
            tree.appendChild(achievementNode);
        });
