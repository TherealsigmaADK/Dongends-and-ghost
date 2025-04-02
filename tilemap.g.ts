// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010505050509040505050505010302010105050505090405050505050102020101050505050504050505080501020201010505040404040508050505010102010105050505050505050505050505050101050505050508050505060505050501010508050805050508050505050505010105050505050605050508050505050101050505050505050505050508050501010404040405050505050505050505010102020204050508050506070707070101020202040505050805070707070701010202020508050505050707070707010102020202050505050507070707070101010101010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . 2 2 . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . 2 . 2 . . 2 
2 . . 2 2 2 2 . 2 . . . 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 . . . 2 . . . . 2 
2 . 2 . 2 . . . 2 . . . . . . 2 
2 . . . . . 2 . . . 2 . . . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 2 2 2 2 . . . . . . . . . . 2 
2 . . . 2 . . 2 . . 2 . . . . 2 
2 . . . 2 . . . 2 . . . . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.dungeon.darkGroundCenter,sprites.dungeon.chestClosed,sprites.dungeon.floorLight0,sprites.dungeon.darkGroundSouthEast1,sprites.castle.saplingPine,sprites.castle.shrub,sprites.castle.rock0,sprites.castle.tileGrass2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
