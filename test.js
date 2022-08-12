function hero_list(producer, ...heros) {
    return {producer: producer, heros: heros}
}
 
const marvel = hero_list('Marvel', 'iron man', 'thor', 'black widow', 'hulk');
const dc = hero_list('DC', 'batman', 'superman', 'aquaman');

hero_list();