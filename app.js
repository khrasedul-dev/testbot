const { Composer } = require('micro-bot')

const bot =   new Composer()


bot.start(ctx=>{
    ctx.reply("Bot started")
})


module.exports = bot