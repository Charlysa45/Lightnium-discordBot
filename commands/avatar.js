const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('avatar')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addUserOption(option => option.setName('target').setDescription('The user\'s avatar to show')),
	async execute(interaction) {
		const user = interaction.options.getUser('target');
        console.log(interaction.user.avatarURL())

        const avatarEmbed = new MessageEmbed()
        .setColor('GOLD')
        .setTitle(`${interaction.user.username}'s Avatar`)
        .setImage(`${interaction.user.displayAvatarURL({ dynamic: true })}`)

		if (user) return interaction.reply({embeds: [avatarEmbed]});
		return interaction.reply(`Your avatar: ${interaction.user.displayAvatarURL({ dynamic: true })}`);
	},
};