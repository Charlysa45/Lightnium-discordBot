const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        console.log(user)

        const avatarSelfEmbed = new MessageEmbed()
        .setColor('GOLD')
        .setTitle(`${interaction.user.username}'s Avatar`)
        .setImage(`${interaction.user.displayAvatarURL({ dynamic: true, format: 'png', size: 600 })}`);
        
        // const avatarEmbed = new MessageEmbed()
        // .setColor('GOLD')
        // .setTitle(`${user.username}'s Avatar`)
        // .setImage(`${user.displayAvatarURL({ dynamic: true })}`)

		if (user) return interaction.reply({embeds: [avatarSelfEmbed]});
		return interaction.reply({embeds: [avatarSelfEmbed]});
	},
};