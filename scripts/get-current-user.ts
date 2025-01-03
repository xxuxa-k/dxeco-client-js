
(async () => {
  const response = await fetch("https://api.dxeco.io/api/auth/current-user", {
    method: "get",
    headers: {
      "X-API-Key": process.env["X_API_KEY"]!,
    },
  })

  if (response.ok) {
    const data = await response.json()
    console.log(data)
  } else {
    console.error(response.statusText)
  }
})()
