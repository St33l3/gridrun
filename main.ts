namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy()
    music.baDing.play()
})
info.onCountdownEnd(function () {
    music.playMelody("B C5 A B A A F E ", 120)
    tiles.setTilemap(tiles.createTilemap(
            hex`10001000030303030303030303030303030303030303030303030303030303030303030303030404040404040404040404040303030304040606060606060606040403030303040605050505050505050604030303030406050505050505050506040303030304060505080707090505060403030303040605050e10120a0505060403030303040605050e0f110a0505060403030303040605050d0c0c0b050506040303030304060505050505050505060403030303040605050505050505050604030303030404060606060606060604040303030304040404040404040404040403030303030303030303030303030303030303030303030303030303030303030303`,
            img`
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1,myTiles.tile2,sprites.dungeon.floorLight0,sprites.dungeon.floorDark0,sprites.dungeon.floorMixed,sprites.dungeon.floorDarkDiamond,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.floorLight2],
            TileScale.Sixteen
        ))
    info.changeLifeBy(1)
    info.changeScoreBy(50)
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
    music.powerDown.play()
})
let coin: Sprite = null
let projectile6: Sprite = null
let projectile7: Sprite = null
let projectile8: Sprite = null
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
game.splash("gridrun")
info.setScore(0)
info.setLife(29)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100004010101010101010104010101010101010101010101040101010101040101010303030303030303030303030303030304010404040404040404040404040404010101010101010101010101010104010101010101010101010101010101010101010101010101040401040401010101030303030303030303030303030303030101010101010101010101010101010101010101010101010101010101010101010101040404040404040401010101010303030303030303030303030303030301010101010101010101010401010101010101010101010101010104010101010101010101010101010101010101010103030303030303030303030303030303`,
            img`
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . . 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileGrass1,myTiles.tile1,myTiles.tile2,sprites.castle.tileGrass3],
            TileScale.Sixteen
        ))
let mySprite = sprites.create(img`
. . . . . . . . . . . . 
. a a a a a a a a a . . 
. a 7 7 7 a 7 7 7 a . . 
. a 7 2 7 a 7 2 7 a . . 
. a 7 7 7 a 7 7 7 a . . 
. a a a a a a a a a . . 
. 2 2 2 2 2 2 2 2 2 . . 
. 2 9 9 9 9 9 9 9 2 . . 
. 2 9 9 9 9 9 9 9 2 . . 
. 2 2 2 2 9 2 2 2 2 . . 
8 8 8 8 2 2 2 8 8 8 8 . 
. 8 8 8 8 8 8 8 8 8 . . 
. . . . 8 8 8 . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
. . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
info.startCountdown(20)
game.onUpdateInterval(2000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 e . . . . 
. . . . . 2 2 2 2 d 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 e f f c c . 
. . . . e e 2 2 e f f f f b c . 
. . . e e e f e 2 b f f f d c . 
. . e e 2 2 d f 2 1 1 1 1 b c . 
. . e e 2 2 d f e e c c c . . . 
. . b 1 1 d e 2 e e c . . . . . 
. . f f f f d d f . . . . . . . 
f f f f f f d d . . . . . . . . 
f f f . f f f e . . . . . . . . 
f f . . . . e e e . . . . . . . 
. . . . . . e e e e . . . . . . 
`, 63, Math.randomRange(-100, 100))
    projectile2 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . 2 2 2 2 2 e . . . . 
. . . . . 2 2 2 2 d 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 2 2 e . . . 
. . . . e 2 2 2 2 2 e f f c c . 
. . . . e e 2 2 e f f f f b c . 
. . e e e f e 2 2 b f f f d c . 
. e e 2 2 d f e 2 1 1 1 1 b c . 
. e e 2 2 d f e e e c c c . . . 
. b 1 1 e e 2 2 e e c . . . . . 
. . f d d 2 2 2 f f f d d . . . 
e e f d d e e e . f f d d . . . 
e e e f f f f f . . . . . . . . 
e e . . . . f f f . . . . . . . 
. . . . . . f f f f . . . . . . 
`, 100, Math.randomRange(-100, 100))
    projectile3 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 e . . . 
. . . . . . 2 2 2 2 d 2 2 e . . 
. . . . . e 2 2 2 2 2 2 2 e . . 
. . . . . e 2 2 2 2 2 2 2 e . . 
. . . . . e 2 2 2 2 2 e f f c c 
. . . . . e e 2 2 e f f f f b c 
. . . e e e f e 2 2 e f f f d c 
. . e e 2 2 d f e 2 c b 4 4 c c 
. . e e 2 2 d f e c 4 1 1 4 c . 
. . b 1 1 d e e e c 4 4 4 4 c . 
. . . f f f f f d d 4 4 4 b c . 
. . . . f f f f d d c c c c . . 
. . . . . f f f f f c c c . . . 
. . . . e e e f f . . . . . . . 
. . . . e e e e f f . . . . . . 
`, 50, Math.randomRange(-100, 100))
    projectile4 = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . f f f f f . . . . . . . . . . 
. . . . . . . f f b 1 1 1 1 f f . . . . . . . . 
. . . . . . f b 1 1 1 1 1 1 1 b f . . . . . . . 
. . . . . . f 1 1 1 1 1 1 1 1 1 f . . . . . . . 
. . . . . f f f f 1 1 1 1 1 1 1 d f . . . . . . 
. . . . f b 1 1 1 c 1 d d 1 1 1 d f . . . . . . 
. . . . f f b 1 b 1 f d c f 1 1 b f . . . . . . 
. . . . . f f b f b f b 1 1 1 1 1 f . . . . . . 
. . . . . . f f f f c f d b 1 b 1 f . . . . . . 
. . . . . . . f c c c f c f b f b f . . . . . . 
. . . . . . . . f f f f f f f f f f . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . . . . . f f f f f f . . . . . . . . . 
. . . . . f . . f f f f f f f . . . . . . . . . 
. . . . . f f f f f f f f f . . . . . . . . . . 
. . . . . . f f f f f f f . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`, 50, Math.randomRange(-100, 100))
    projectile5 = sprites.createProjectileFromSide(img`
. . 6 6 6 6 . . 
. 6 1 4 4 4 6 . 
6 d 4 4 4 4 4 6 
c b b 1 1 4 d c 
. c b b 4 1 c . 
. . c c c c . . 
`, 100, Math.randomRange(-100, 100))
    projectile8 = sprites.createProjectileFromSide(img`
. . . c c c c c c c c c c c c c c c c c c . . . 
. . c b d d d d d d d d d d d d d d d d b c . . 
. c d d d d d d d d d d d d d d d d d d d d c . 
. c d d b b b b b b b b b b b b b b b b d d c . 
. c d b b b b b b b b b b b b b b b b b b d c . 
. c d b b b b b b b b b b b b b b b b b b d c . 
c b b b c c c c c c c c c c c c c c c c b b b c 
c d d c b d d d d d d d d d d d d d d b c d d c 
c d d c d d d d d d d d d d d d d d d d c d d c 
c d d c d d d d d d d d d d d d d d d d c d d c 
c d d c d d d d d d d d d d d d d d d d c d d c 
c b d c d d d d d d d d d d d d d d d d c d b c 
c c b b b b b b b b b b b b b b b b b b b b c c 
c c b b b b b b b b b b b b b b b b b b b b c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
. . c b b c . . . . . . . . . . . . c b b c . . 
`, 50, Math.randomRange(-100, 100))
    projectile7 = sprites.createProjectileFromSide(img`
. . . . . . . . . c c 8 . . . . 
. . . . . . 8 c c c f 8 c c . . 
. . . c c 8 8 f c a f f f c c . 
. . c c c f f f c a a f f c c c 
8 c c c f f f f c c a a c 8 c c 
c c c b f f f 8 a c c a a a c c 
c a a b b 8 a b c c c c c c c c 
a f c a a b b a c c c c c f f c 
a 8 f c a a c c a c a c f f f c 
c a 8 a a c c c c a a f f f 8 a 
. a c a a c f f a a b 8 f f c a 
. . c c b a f f f a b b c c 6 c 
. . . c b b a f f 6 6 a b 6 c . 
. . . c c b b b 6 6 a c c c c . 
. . . . c c a b b c c c . . . . 
. . . . . c c c c c c . . . . . 
`, 50, Math.randomRange(-100, 100))
    projectile6 = sprites.createProjectileFromSide(img`
. . 6 6 6 6 . . 
. 6 d 4 4 4 6 . 
6 1 b 1 1 4 d 6 
c 1 b b 4 4 1 c 
. c b b b d c . 
. . c c c c . . 
`, 89, Math.randomRange(-100, 100))
    music.jumpDown.play()
})
game.onUpdateInterval(500, function () {
    coin = sprites.create(img`
. . b b b . . . 
. b 5 5 5 b . . 
b 5 d 3 d 5 b . 
b 5 3 5 1 5 b . 
c 5 3 5 1 d c . 
c 5 d 1 d d c . 
. f d d d f . . 
. . f f f . . . 
`, SpriteKind.Food)
    coin.setPosition(Math.randomRange(0, 160), Math.randomRange(0, 120))
})
