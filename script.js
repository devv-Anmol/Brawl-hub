// 1. Grab the container from our HTML
const brawlerContainer = document.getElementById('brawlerContainer');


let allBrawlers = [];


async function fetchBrawlers() {
    try {
        // The API call
        const response = await fetch('https://api.brawlapi.com/v1/brawlers');
        
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

       
        const data = await response.json();
        
        
        allBrawlers = data.list; 
        
       
        console.log("Fetched Brawlers:", allBrawlers);

        
        renderBrawlers(allBrawlers);

    } catch (error) {
        console.error('Error fetching brawlers:', error);
        brawlerContainer.innerHTML = '<p style="color: red; text-align: center;">Failed to load Brawlers. Please try again later.</p>';
    }
}


function renderBrawlers(brawlersArray) {
    

    
    const htmlString = brawlersArray.map(brawler => {
        
        return `
            <div class="brawler-card">
                <img src="${brawler.imageUrl}" alt="${brawler.name}" style="width: 100px; height: 100px; object-fit: contain;">
                <h3 style="margin-top: 10px;">${brawler.name}</h3>
                <p style="margin-top: 5px; font-size: 0.9rem;"><strong>Class:</strong> ${brawler.class.name}</p>
                <p style="font-size: 0.9rem;"><strong>Rarity:</strong> <span style="color: ${brawler.rarity.color};">${brawler.rarity.name}</span></p>
            </div>
        `;
    }).join('');

   
    brawlerContainer.innerHTML = htmlString;
}


fetchBrawlers();