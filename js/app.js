// 💡 Eureka! v2.0 - App Logic

class EurekaApp {
    constructor() {
        this.currentCategory = 'all';
        this.currentFact = null;
        this.viewedFacts = new Set();
        this.savedFacts = JSON.parse(localStorage.getItem('eureka-saved') || '[]');
        this.stats = JSON.parse(localStorage.getItem('eureka-stats') || '{"totalViewed":0,"streak":0,"lastVisit":null}');
        this.init();
    }
    
    init() {
        this.updateStreak();
        this.showDailyFact();
        this.setupSwipe();
        this.updateStatsUI();
    }
    
    updateStreak() {
        const today = new Date().toDateString();
        const lastVisit = this.stats.lastVisit;
        
        if (lastVisit) {
            const lastDate = new Date(lastVisit);
            const diffDays = Math.floor((new Date(today) - lastDate) / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                // Consecutive day
                this.stats.streak++;
            } else if (diffDays > 1) {
                // Streak broken
                this.stats.streak = 1;
            }
            // Same day = no change
        } else {
            this.stats.streak = 1;
        }
        
        if (this.stats.lastVisit !== today) {
            this.stats.lastVisit = today;
            this.saveStats();
        }
    }
    
    showDailyFact() {
        // Get consistent "fact of the day" based on date
        const today = new Date();
        const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        const factIndex = dayOfYear % FACTS.length;
        
        this.currentFact = FACTS[factIndex];
        this.displayFact(this.currentFact, true);
    }
    
    setupSwipe() {
        const card = document.getElementById('factCard');
        let startX, startY;
        
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
        });
        
        card.addEventListener('touchend', (e) => {
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = startX - endX;
            const diffY = Math.abs(startY - endY);
            
            if (Math.abs(diffX) > 50 && diffY < 100) {
                this.nextFact();
            }
        });
        
        card.addEventListener('click', () => this.nextFact());
    }
    
    getFilteredFacts() {
        if (this.currentCategory === 'all') {
            return FACTS;
        }
        return FACTS.filter(f => f.category === this.currentCategory);
    }
    
    nextFact() {
        const facts = this.getFilteredFacts();
        
        if (this.viewedFacts.size >= facts.length) {
            this.viewedFacts.clear();
        }
        
        let availableFacts = facts.filter((_, i) => !this.viewedFacts.has(facts.indexOf(_)));
        if (availableFacts.length === 0) {
            availableFacts = facts;
            this.viewedFacts.clear();
        }
        
        const randomIndex = Math.floor(Math.random() * availableFacts.length);
        const fact = availableFacts[randomIndex];
        
        this.currentFact = fact;
        this.viewedFacts.add(FACTS.indexOf(fact));
        
        // Update stats
        this.stats.totalViewed++;
        this.saveStats();
        this.updateStatsUI();
        
        this.displayFact(fact);
    }
    
    displayFact(fact, isDaily = false) {
        const card = document.getElementById('factCard');
        const category = CATEGORIES[fact.category];
        
        card.classList.add('animate-out');
        
        setTimeout(() => {
            document.getElementById('factCategoryIcon').textContent = category.icon;
            document.getElementById('factCategoryName').textContent = isDaily ? '✨ Dato del Día' : category.name;
            document.getElementById('factEmoji').textContent = fact.emoji;
            document.getElementById('factTitle').textContent = fact.title;
            document.getElementById('factDescription').textContent = fact.description;
            document.getElementById('factEra').textContent = fact.era;
            document.getElementById('factLocation').textContent = fact.location;
            
            const isSaved = this.savedFacts.some(f => f.title === fact.title);
            document.getElementById('saveIcon').textContent = isSaved ? '❤️' : '🤍';
            
            card.dataset.category = fact.category;
            if (isDaily) card.classList.add('daily');
            else card.classList.remove('daily');
            
            card.classList.remove('animate-out');
            card.classList.add('animate-in');
            
            setTimeout(() => card.classList.remove('animate-in'), 300);
            
            if (navigator.vibrate) navigator.vibrate(30);
            
        }, 150);
    }
    
    updateStatsUI() {
        const streakEl = document.getElementById('streakCount');
        const viewedEl = document.getElementById('viewedCount');
        
        if (streakEl) streakEl.textContent = this.stats.streak;
        if (viewedEl) viewedEl.textContent = this.stats.totalViewed;
    }
    
    saveStats() {
        localStorage.setItem('eureka-stats', JSON.stringify(this.stats));
    }
    
    toggleCategories() {
        const panel = document.getElementById('categoriesPanel');
        panel.classList.toggle('open');
    }
    
    setCategory(category) {
        this.currentCategory = category;
        this.viewedFacts.clear();
        
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        document.getElementById('currentCategoryIcon').textContent = CATEGORIES[category].icon;
        
        this.toggleCategories();
        this.nextFact();
    }
    
    save() {
        if (!this.currentFact) return;
        
        const index = this.savedFacts.findIndex(f => f.title === this.currentFact.title);
        
        if (index > -1) {
            this.savedFacts.splice(index, 1);
            document.getElementById('saveIcon').textContent = '🤍';
            this.showToast('Eliminado de guardados');
        } else {
            this.savedFacts.push(this.currentFact);
            document.getElementById('saveIcon').textContent = '❤️';
            this.showToast('¡Guardado! 💡');
        }
        
        localStorage.setItem('eureka-saved', JSON.stringify(this.savedFacts));
        
        if (navigator.vibrate) navigator.vibrate([30, 30, 30]);
    }
    
    share() {
        if (!this.currentFact) return;
        
        const fact = this.currentFact;
        const text = `💡 ¿Sabías que...\n\n${fact.title}\n\n${fact.description}\n\n✨ Descubre más datos increíbles:\n👉 https://fernando9017.github.io/eureka/`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Eureka! 💡',
                text: text,
                url: 'https://fernando9017.github.io/eureka/'
            }).catch(() => this.copyToClipboard(text));
        } else {
            this.copyToClipboard(text);
        }
    }
    
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            this.showToast('¡Copiado! 📋');
        });
    }
    
    showToast(message) {
        const toast = document.getElementById('toast');
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }
}

// Initialize
const app = new EurekaApp();
