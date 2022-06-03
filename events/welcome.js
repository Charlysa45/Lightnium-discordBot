const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'guildMemberAdd',
	async execute(member) {
		const owner = await member.guild.fetchOwner()

		const welcomeEmbed = new MessageEmbed()
		.setColor('GOLD')
		.setAuthor({name: `¡Bienvenid@ a ${member.guild.name}!`, iconURL: `${member.guild.iconURL()}`})
		.setTitle(`Toma asiento y disfruta! ☕`)
		.setThumbnail(member.user.displayAvatarURL())
		.setDescription(
			`!Hola ${member.user}! Lee lo que nuestra carta tiene para ti:
			
			<#796236321185464375> Personaliza tu país y género.
			<#796236321185464376> Para ponerle a tu nombre.
			<#796236322209005579> Atrápalas a todas.
			<#796236323274489864> Escucha tus temas favoritos. 

			Preséntate en <#796236321185464378> y sé un nuevo comensal en nuestro café!
			`
		)
		.setImage('https://media.discordapp.net/attachments/796236320543866912/928103591997243434/Portada_AC_2022_GIF.gif?width=1440&height=629')
		.setFooter({text: `Att: ${owner.user.username}, dueño del Café`, iconURL: `${owner.user.avatarURL()}`})

		member.guild.channels.cache.get("796236321185464379")
		.send({embeds: [welcomeEmbed]})
	},
};