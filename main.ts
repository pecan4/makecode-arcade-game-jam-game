namespace SpriteKind {
    export const tet_box_image = SpriteKind.create()
    export const dialogue = SpriteKind.create()
}
function textbox (text: string, person: Image, person2: Image, text_above_person_1: boolean) {
    declutter.load("dialogue1", sprites.create(person, SpriteKind.dialogue))
    declutter.load("dialogue2", sprites.create(person2, SpriteKind.dialogue))
    declutter.get("dialogue1").setPosition(120, 89)
    declutter.get("dialogue2").setPosition(35, 89)
    declutter.get("dialogue2").image.flipX()
    if (text_above_person_1) {
        story.spriteSayText(declutter.get("dialogue1"), text, 15, 1)
    } else {
        story.spriteSayText(declutter.get("dialogue2"), text, 15, 1)
    }
    pause(text.length)
    declutter.offload("dialogue1")
    declutter.offload("dialogue2")
}
