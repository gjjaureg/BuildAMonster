class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.RightArmX = this.bodyX + 100;
        this.RightArmY = this.bodyY + 50;

        this.LeftArmX = this.bodyX - 100;
        this.LeftArmY = this.bodyY + 50;

        this.RightLegX = this.bodyX + 40;
        this.RightLegY = this.bodyY + 170;

        this.LeftLegX = this.bodyX - 40;
        this.LeftLegY = this.bodyY + 170;

        this.EyeX = this.bodyX;
        this.EyeY = this.bodyY - 50;

        this.MouthX = this.bodyX;
        this.MouthY = this.bodyY + 50;

        this.RightAntX = this.bodyX + 40;
        this.RightAntY = this.bodyY - 130;

        this.LeftAntX = this.bodyX - 40;
        this.LeftAntY = this.bodyY - 130;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_blueE.png");
        my.sprite.RightArm = this.add.sprite(this.RightArmX, this.RightArmY, "monsterParts", "arm_blueC.png");
        my.sprite.LeftArm = this.add.sprite(this.LeftArmX, this.LeftArmY, "monsterParts", "arm_blueC.png");
        my.sprite.LeftArm.flipX = true; 
        my.sprite.RightLeg = this.add.sprite(this.RightLegX, this.RightLegY, "monsterParts", "leg_blueC.png");
        my.sprite.LeftLeg = this.add.sprite(this.LeftLegX, this.LeftLegY, "monsterParts", "leg_blueC.png");
        my.sprite.LeftLeg.flipX = true;
        my.sprite.Eye = this.add.sprite(this.EyeX, this.EyeY, "monsterParts", "eye_psycho_dark.png");
        my.sprite.SMouth = this.add.sprite(this.MouthX, this.MouthY, "monsterParts", "mouthA.png");
        my.sprite.FMouth = this.add.sprite(this.MouthX, this.MouthY, "monsterParts", "mouthF.png");
        my.sprite.FMouth.visible = false
        my.sprite.RightAntenna = this.add.sprite(this.RightAntX, this.RightAntY, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.LeftAntenna = this.add.sprite(this.LeftAntX, this.LeftAntY, "monsterParts", "detail_blue_antenna_large.png");
        my.sprite.LeftAntenna.flipX = true;
        

        this.SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        let FKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        
        //event input: dimple smile
        FKey.on('down', (key, event) => {
            my.sprite.SMouth.visible = false;
            my.sprite.FMouth.visible = true;
        });
        //event input: regular smile
        let SKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        SKey.on('down', (key, event) => {
            my.sprite.SMouth.visible = true;
            my.sprite.FMouth.visible = false;
        });

        this.DKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.AKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.DKey.isDown){     //pulling input: peace hand
           my.sprite.body.x += 3;
           my.sprite.Eye.x += 3;
           my.sprite.SMouth.x += 3;
           my.sprite.FMouth.x += 3;
           my.sprite.LeftArm.x += 3;
           my.sprite.RightArm.x += 3;
           my.sprite.LeftLeg.x += 3;
           my.sprite.RightLeg.x += 3;
           my.sprite.RightAntenna.x += 3;
           my.sprite.LeftAntenna.x += 3;

       }
       else if (this.AKey.isDown) {
        my.sprite.body.x -= 3;
        my.sprite.Eye.x -= 3;
        my.sprite.SMouth.x -= 3;
        my.sprite.FMouth.x -= 3;
        my.sprite.LeftArm.x -= 3;
        my.sprite.RightArm.x -= 3;
        my.sprite.LeftLeg.x -= 3;
        my.sprite.RightLeg.x -= 3;
        my.sprite.RightAntenna.x -= 3;
        my.sprite.LeftAntenna.x -= 3;

       }
    }

}