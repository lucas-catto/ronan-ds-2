var monster = {
    init: function() {
        monster.div = document.getElementById('animate');
        monster.frameWidth = 46.6;
        monster.frames = 6;
        monster.offsetX = 0;

        monster.animate();
    },
    animate: function() {
        monster.offsetX -= monster.frameWidth;

        if (monster.offsetX <= -monster.frameWidth * monster.frames) {
            monster.offsetX = 0;
        }

        monster.div.style.backgroundPosition = monster.offsetX + 'px';
        setTimeout(monster.animate, 200);
    }
};

Core.start(monster);
