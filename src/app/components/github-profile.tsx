export async function GithubProfile() {
    await new Promise(resolve => setTimeout(resolve, 2000))

    const response = await fetch('https://api.github.com/users/douglasdl')
    const user = await response.json()
  return (
    <div>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}