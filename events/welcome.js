module.exports = {
	name: 'guildMemberAdd',
	once: true,
	async execute(member) {
		console.log(member);
	},
};