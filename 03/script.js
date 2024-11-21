
var monster = {
    init: function() {
        monster.div = document.getElementById('animar');
        monster.frameWidth = 100;
        monster.frames = 7;
        monster.offsetX = 0;

        monster.animar();
    },
    animar: function() {
        monster.offsetX -= monster.frameWidth;

        if (monster.offsetX <= -monster.frameWidth * monster.frames) {
            monster.offsetX = 0;
        }

        monster.div.style.backgroundPosition = monster.offsetX + 'px';
        setTimeout(monster.animar, 200);
    }
};

Core.start(monster);
