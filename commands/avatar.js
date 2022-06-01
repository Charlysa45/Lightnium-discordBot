const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Visualiza el avatar tuyo o el del usuario que elijas.')
		.addUserOption(option => option.setName('usuario').setDescription('el avatar del usuario que deseas ver')),
	async execute(interaction) {
		const user = interaction.options.getUser('usuario');

        const avatarEmbed = new MessageEmbed()

        if (!user) {
            console.log(interaction.user)
            avatarEmbed
            .setColor('GOLD')
            .setTitle(`${interaction.user.username}'s Avatar`)
            .setImage(`${interaction.user.displayAvatarURL({ dynamic: true, format: 'png', size: 600 })}`);
        }else{
            console.log(user)
            avatarEmbed
             .setColor('GOLD')
             .setTitle(`${user.username}'s Avatar`)
             .setImage(`${user.displayAvatarURL({ dynamic: true, format: 'png', size: 600 })}`);
        }
        
		return interaction.reply({embeds: [avatarEmbed]});
	},
};