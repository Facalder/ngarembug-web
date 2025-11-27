export function formatDate(dateString: string): string {
	const date = new Date(dateString)

	const day = String(date.getDate()).padStart(2, '0')
	const month = String(date.getMonth() + 1).padStart(2, '0')
	const year = date.getFullYear()

	return `${day}-${month}-${year}`
}

export function formatRelative(dateString: string): string {
	const date = new Date(dateString)
	const now = new Date()

	const diffMs = now.getTime() - date.getTime()
	const sec = Math.floor(diffMs / 1000)
	const min = Math.floor(sec / 60)
	const hour = Math.floor(min / 60)
	const day = Math.floor(hour / 24)
	const week = Math.floor(day / 7)
	const month = Math.floor(day / 30)
	const year = Math.floor(day / 365)

	if (sec < 60) return `${sec} secs ago`
	if (min < 60) return `${min} mins ago`
	if (hour < 24) return `${hour} hours ago`
	if (day < 7) return `${day} days ago`
	if (week < 4) return `${week} weeks ago`
	if (month < 12) return `${month} months ago`

	return `${year} years ago`
}
