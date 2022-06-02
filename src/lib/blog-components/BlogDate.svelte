<script>
	export let date;

	const convertedDate = () => {
		const months = {
			1: 'Jan',
			2: 'Feb',
			3: 'Mar',
			4: 'Apr',
			5: 'May',
			6: 'Jun',
			7: 'Jul',
			8: 'Aug',
			9: 'Sep',
			10: 'Oct',
			11: 'Nov',
			12: 'Dec'
		};
		const dateString = date.substring(0, 10);
		const [year, month, day] = dateString.split('-');
		return `${day}-${months[parseInt(month)]}-${year}`;
	};
</script>

<p class="text-blue-300 font-semibold">{convertedDate()}</p>
