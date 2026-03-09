export default defineEventHandler((event) => {

  const token = getCookie(event, "token")

  if (!token) {
    throw createError({
      statusCode: 401,
      statusMessage: "Unauthorized"
    })
  }

  return {
    name: "Naveen User",
    email: "naveen@test.com",
    role: "admin"
  }

})