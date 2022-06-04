const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("8ball")
        .setDescription("🎱 pregúntame algo y mi bola mágica te responderá")
        .addStringOption(option => option.setName('pregunta').setDescription('escribe aquí tu pregunta').setRequired(true)),
    async execute(interaction){
        const question = await interaction.options.getString('pregunta');

        let respuestas = [
            'Sip, por supuesto :3',
            'Segurisimo que sí ^^.',
            'Cuenta con ello, querid@.',
            'Mmmm... puede ser.',
            'Probablemente sip.',
            'Probablemente nope.',
            'Nah, no creo.',
            'En absoluto.',
            'Nope, no cuentes con ello.',
            'No lo sé, pregúntale a Matr3x.',
            'Ehhh... si... seguro que sí ^^.',
            '¿te digo la verdad o seguimos siendo amigos?.',
            'Si te soy sincera, nope.'
        ]

        let resRandom = respuestas[Math.floor(Math.random()*respuestas.length)] 

        const eightBallEmbed = new MessageEmbed()
        .setTitle('🎱 La bola mágica de Lightnium')
        .setColor('GREY')
        .setThumbnail(interaction.user.displayAvatarURL())
        .addFields(
            {name:'A tu pregunta:', value:question},
            {name:'La bola magica te responde:', value: resRandom}
        )

        return interaction.reply({embeds: [eightBallEmbed]})
    }
}