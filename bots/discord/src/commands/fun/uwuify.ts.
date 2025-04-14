import CommandError, { CommandErrorType } from '$/classes/CommandError'
import { ApplicationCommandOptionType, Message } from 'discord.js'
import { ModerationCommand } from '../../classes/Command'

function uwuify(text: string): string {
    let uwuText = text
        // r/l to w
        .replace(/(?:r|l)/g, 'w')
        .replace(/(?:R|L)/g, 'W')
        // n[aeiou] to ny[aeiou]
        .replace(/n([aeiou])/g, 'ny$1')
        .replace(/N([aeiou])/g, 'Ny$1')
        .replace(/N([AEIOU])/g, 'Ny$1')
        // th to d
        .replace(/th/g, 'd')
        .replace(/Th/g, 'D')
        // owo faces and similar embellishments
        .replace(/!+/g, '!! >w<')
        .replace(/\?/g, '?? UwU');

    const suffixes = [' uwu', ' owo', ' ^w^', ' >:3', ' x3', ' nyaa~', ' ;w;', ' * O *'];
    if (Math.random() < 0.7) { // Add suffix 70% of the time
        uwuText += suffixes[Math.floor(Math.random() * suffixes.length)];
    }

     // Shutter rate 15%
     if (Math.random() < 0.15) {
          const words = uwuText.split(' ');
          if (words.length > 0 && words[0].length > 1) {
              words[0] = words[0].charAt(0) + '-' + words[0];
              uwuText = words.join(' ');
          }
     }

    return uwuText;
}

export default new ModerationCommand({
    name: 'replyuwu',
    description: 'Send an uwuified message as the bot nyaa~',
    options: {
        message: {
            description: 'The message to send (wiww be uwuified!)', // Uwuified option desc
            required: true,
            type: ApplicationCommandOptionType.String,
        },
        reference: {
            description: 'The message ID to wepwy to (use `watest` to wepwy to the watest message)', // Uwuified option desc
            required: false,
            type: ApplicationCommandOptionType.String,
        },
    },
    allowMessageCommand: false,
    async execute({ logger, executor }, trigger, { reference: ref, message: msg }) {
        if (trigger instanceof Message) return

        const channel = await trigger.guild!.channels.fetch(trigger.channelId)
        if (!channel?.isTextBased())
            throw new CommandError(
                CommandErrorType.InvalidArgument,
                'This command can onwy be used in ow on text channews >w<',
            )

        const refMsg = ref?.startsWith('latest')
            ? await channel.messages.fetch({ limit: 1 }).then(it => it.first())
            : ref

        const uwuifiedMsg = uwuify(msg);

        await channel.send({
            content: uwuifiedMsg, // Send the uwuified version
            reply: refMsg ? { messageReference: refMsg, failIfNotExists: true } : undefined,
        })

        logger.info(`User ${executor.user.tag} made the bot say (uwuified): "${msg}" -> "${uwuifiedMsg}"`);

        await trigger.reply({
            content: uwuify('OK!'),
            ephemeral: true,
        })
    },
})
