// ---------------------------------------------------------------------------
// All of the site's editable text and asset paths live here.
// Change names, wording, or file paths in this one place — every scene
// pulls from this config.
// ---------------------------------------------------------------------------

export const SITE_CONTENT = {
  page1: {
    greeting: 'Merhaba Ceylin',
    subtitle: 'Sana küçük bir mesajım var!',
  },

  page2: {
    from: 'Gönderen: Bulut :)',
    to: 'Gönderilen: Ceylin <3',
    label: 'Mesaj:',
    message:
      'Senin için hazırladığım sürprize bakmak ister misin? O zaman alttaki tuşa basss.',
  },

  page3: {
    // Blank lines become paragraph breaks (rendered with white-space: pre-line).
    letter: `Merhaba Ceylini,

Seninle konuşmaya başladığımdan beri hayatımda güzel bir şeylerin değiştiğini hissediyorum. Seninle konuştuğum zaman gerçekten daha mutlu oluyorum.

Bazen ailemle ilgili sorunlar yaşadığım, moralimin tamamen sıfır olduğu zamanlar oluyor. Böyle zamanlarda seninle konuşmak bana gerçekten çok iyi geliyor. Sanki bütün kötü düşüncelerimin arasından çıkıp biraz nefes alabiliyorum. Sen farkında olmasan bile bazen sadece seninle konuşmak bile moralime ilaç gibi geliyor.

İyi ki seninle konuşmaya başlamışım. İyi ki hayatımda varsın. Belki bunları sana her zaman söyleyemiyorum ama benim için gerçekten çok özelsin.

Bu siteyi de sadece sana küçük bir sürpriz yapmak ve ne kadar değerli olduğunu biraz olsun göstermek için hazırladım.

Seni çok seviyorum. ❤️`,
  },

  assets: {
    // Drop your own file at this path (see public/assets/README.md).
    // Optional: a missing file simply leaves the music button inactive.
    music: './assets/music.mp3',
  },
} as const;
