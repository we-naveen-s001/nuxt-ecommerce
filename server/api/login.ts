export default defineEventHandler(async (event) => {

  const body = await readBody(event)

  const { email, password } = body

  if (!email || !password) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email and password required"
    })
  }

  if (email === "naveen@test.com" && password === "123456") {

    const token = "mock-token"

    setCookie(event, "token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "strict"
    })

    return {
      success: true,
      token,
      user: {
        name: "Naveen",
        email
      }
    }
  }

  throw createError({
    statusCode: 401,
    statusMessage: "Invalid credentials"
  })
})