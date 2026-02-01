// 💡 Eureka! - App Logic

class EurekaApp {
    constructor() {
        this.currentCategory = 'all';
        this.currentFact = null;
        this.viewedFacts = new Set();
        this.savedFacts = JSON.parse(localStorage.getItem('eureka-saved') || '[]');
        this.init();
    }
    
    init() {
        this.nextFact();
        this.setupSwipe();
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
            const diffY = Math.abs(startY - e.changedTouches[0].clientY);
            
            // Horizontal swipe
            if (Math.abs(diffX) > 50 && diffY < 100) {
                this.nextFact();
            }
        });
        
        // Click on card
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
        
        // Reset viewed if we've seen all
        if (this.viewedFacts.size >= facts.length) {
            this.viewedFacts.clear();
        }
        
        // Get random unviewed fact
        let availableFacts = facts.filter((_, i) => !this.viewedFacts.has(facts.indexOf(_)));
        if (availableFacts.length === 0) {
            availableFacts = facts;
            this.viewedFacts.clear();
        }
        
        const randomIndex = Math.floor(Math.random() * availableFacts.length);
        const fact = availableFacts[randomIndex];
        
        this.currentFact = fact;
        this.viewedFacts.add(FACTS.indexOf(fact));
        
        this.displayFact(fact);
    }
    
    displayFact(fact) {
        const card = document.getElementById('factCard');
        const category = CATEGORIES[fact.category];
        
        // Animate out
        card.classList.add('animate-out');
        
        setTimeout(() => {
            // Update content
            document.getElementById('factCategoryIcon').textContent = category.icon;
            document.getElementById('factCategoryName').textContent = category.name;
            document.getElementById('factEmoji').textContent = fact.emoji;
            document.getElementById('factTitle').textContent = fact.title;
            document.getElementById('factDescription').textContent = fact.description;
            document.getElementById('factEra').textContent = fact.era;
            document.getElementById('factLocation').textContent = fact.location;
            
            // Update save icon
            const isSaved = this.savedFacts.some(f => f.title === fact.title);
            document.getElementById('saveIcon').textContent = isSaved ? '❤️' : '🤍';
            
            // Set category color
            card.dataset.category = fact.category;
            
            // Animate in
            card.classList.remove('animate-out');
            card.classList.add('animate-in');
            
            setTimeout(() => {
                card.classList.remove('animate-in');
            }, 300);
            
            // Vibrate
            if (navigator.vibrate) navigator.vibrate(30);
            
        }, 150);
    }
    
    toggleCategories() {
        const panel = document.getElementById('categoriesPanel');
        panel.classList.toggle('open');
    }
    
    setCategory(category) {
        this.currentCategory = category;
        this.viewedFacts.clear();
        
        // Update UI
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        document.getElementById('currentCategoryIcon').textContent = CATEGORIES[category].icon;
        
        // Close panel and get new fact
        this.toggleCategories();
        this.nextFact();
    }
    
    save() {
        if (!this.currentFact) return;
        
        const index = this.savedFacts.findIndex(f => f.title === this.currentFact.title);
        
        if (index > -1) {
            // Remove from saved
            this.savedFacts.splice(index, 1);
            document.getElementById('saveIcon').textContent = '🤍';
            this.showToast('Eliminado de guardados');
        } else {
            // Add to saved
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
        const text = `💡 ¿Sabías que...\n\n${fact.title}\n\n${fact.description}\n\n✨ Descubre más en Eureka!\n👉 https://fernando9017.github.io/eureka/`;
        
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
